'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { useSession } from 'next-auth/react';
import styles from './Discount.module.scss';
import { addDiscount, clearMessage } from '~/redux/actions';
import { GetAllCodeInDiscount } from '~/libs/orthers/getData';
import { generateUniqueCodeInDiscount } from '~/libs/orthers/generatedCode';
import Toast from '~/components/Orther/Toast';
import { formatISODate } from '~/libs/orthers/formatDate';
import moment from 'moment';
const cx = classNames.bind(styles);

export interface IAppProps {
    isOpen: boolean;
    isClose: Function;
    valueUpdate: any;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '5px',
    p: '10px',
};

export default function AddDiscount({ isOpen, isClose, valueUpdate }: IAppProps) {
    const [open, setOpen] = useState(false);
    const [showToast, setShowToast] = useState<boolean>(false);
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [timeStart, setTimeStart] = useState<string>(() => {
        return moment().format('YYYY-MM-DD');
    });
    const [timeEnd, setTimeEnd] = useState<string>(() => {
        return moment().format('YYYY-MM-DD');
    });
    const [tenKhuyenMai, setTenKhuyenMai] = useState('');
    const [moTa, setMoTa] = useState('');
    const [maKhuyenMai, setMaKhuyenMai] = useState('');
    const [mucGiamGia, setMucGiamGia] = useState('');

    const selector = useSelector((state: RootState) => state.main);
    const { data: session } = useSession();
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
        isClose(false);
    };

    const reset = () => {
        setMoTa('');
        setTenKhuyenMai('');
        setMaKhuyenMai('');
        setMucGiamGia('');
        handleClose();
        dispatch(clearMessage());
    };

    const handleSave = () => {
        if (
            tenKhuyenMai !== '' &&
            moTa !== '' &&
            timeStart !== '' &&
            timeEnd !== '' &&
            maKhuyenMai !== '' &&
            mucGiamGia
        ) {
            dispatch(
                addDiscount({
                    authorId: session?.user.id,
                    name: tenKhuyenMai,
                    description: moTa,
                    dateStart: formatISODate(new Date(timeStart)),
                    dateEnd: formatISODate(new Date(timeEnd)),
                    code: maKhuyenMai,
                    percent: +mucGiamGia,
                }),
            );
            setIsLoader(true);
        }
    };

    const generateMaKhuyenMai = async () => {
        const resp = await GetAllCodeInDiscount();
        if (resp) {
            setMaKhuyenMai(generateUniqueCodeInDiscount(resp));
        }
    };

    useEffect(() => {
        if (isOpen) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if (selector.message === 'Add Discount Success') {
            setIsLoader(false);
            setShowToast(true);
            setTimeout(() => {
                reset();
            }, 1000);
        } else {
            setOpen(false);
        }
    }, [selector.message]);

    return (
        <>
            <Toast text="Thêm thành công" showToast={showToast} setShowToast={setShowToast} rule="normal" />
            <div className={cx('wrapper')}>
                <div className={cx('wrapper-header', 'flex items-center justify-between h-10')}>
                    <p className="font-medium underline">TẠO MÃ KHUYẾN MÃI</p>
                    <button className={cx('wrapper-header-btnExit')} type="button" onClick={handleClose}>
                        Exit
                    </button>
                </div>
                <div className={cx('wrapper-content', 'mt-2')}>
                    <div className="font-bold">Mã khuyến mãi</div>
                    <div className="mt-4">
                        <p className="font-semibold text-sm">Tên khuyến mãi</p>
                        <input
                            className={cx('wrapper-content-inputName', 'mt-2')}
                            placeholder="Nhập tên khuyến mãi"
                            value={tenKhuyenMai}
                            onChange={(e) => setTenKhuyenMai(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold text-sm">Mô tả</p>
                        <textarea
                            className={cx('wrapper-content-textarea', 'mt-2')}
                            id="w3review"
                            name="w3review"
                            rows={4}
                            placeholder="Nhập mô tả mã khuyễn mãi"
                            value={moTa}
                            onChange={(e) => setMoTa(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className={cx('wrapper-content', 'mt-2')}>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm">Mã khuyến mãi</p>
                            <p
                                className="font-semibold text-sm underline text-primaryColor hover:cursor-pointer"
                                onClick={generateMaKhuyenMai}
                            >
                                Tạo tự động
                            </p>
                        </div>
                        <input
                            className={cx('wrapper-content-inputName', 'mt-2')}
                            placeholder="Bấm tạo tự động"
                            value={maKhuyenMai}
                            disabled={true}
                            onChange={(e) => setMaKhuyenMai(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold text-sm">Mức giảm</p>
                        <div className={cx('wrapper-content-discount', 'mt-2')}>
                            <input
                                placeholder="Nhập số phần trăm"
                                value={mucGiamGia}
                                onChange={(e) => setMucGiamGia(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold text-sm">Thời gian hiệu lực</p>
                        <div className="flex items-center justify-start mt-2">
                            <div>
                                <p className="text-xs font-medium">Thời gian bắt đầu</p>
                                <input
                                    className={cx('wrapper-content-inputTimeStart', 'mt-2')}
                                    type="date"
                                    value={timeStart}
                                    onChange={(e) => setTimeStart(e.target.value)}
                                />
                            </div>
                            <div className="ml-6">
                                <p className="text-xs font-medium">Thời gian kết thúc</p>
                                <input
                                    className={cx('wrapper-content-inputTimeEnd', 'mt-2')}
                                    type="date"
                                    value={timeEnd}
                                    onChange={(e) => setTimeEnd(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className={cx(
                            'wrapper-btnSubmit',
                            'mt-6',
                            isLoader ? 'wrapper-btnSubmit-loader' : 'wrapper-btnSubmit-success',
                        )}
                        onClick={handleSave}
                        // disabled={isClicked}
                    >
                        {isLoader ? '...' : 'Thêm mã khuyễn mãi'}
                    </button>
                </div>
            </div>
        </>
    );
}
