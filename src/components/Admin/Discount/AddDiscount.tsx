'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { useSession } from 'next-auth/react';
import styles from './Discount.module.scss';
import { addDiscount, clearMessage, updateDiscount } from '~/redux/actions';
import { GetAllCodeInDiscount } from '~/libs/orthers/getData';
import { generateUniqueCodeInDiscount } from '~/libs/orthers/generatedCode';
import { formatISODate } from '~/libs/orthers/formatDate';
import moment from 'moment';
import Tippy from '@tippyjs/react';
import { toast, Zoom } from 'react-toastify';
const cx = classNames.bind(styles);

export interface IAppProps {
    isOpen: boolean;
    isClose: Function;
    valueUpdate: any;
    showToast: any;
}

export default function AddDiscount({ isOpen, isClose, valueUpdate, showToast }: IAppProps) {
    const [open, setOpen] = useState<boolean>(false);
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [timeStart, setTimeStart] = useState<string>(moment().format('YYYY-MM-DD'));
    const [timeEnd, setTimeEnd] = useState<string>(moment().format('YYYY-MM-DD'));
    
    const [tenKhuyenMai, setTenKhuyenMai] = useState<string>('');
    const [moTa, setMoTa] = useState<string>('');
    const [maKhuyenMai, setMaKhuyenMai] = useState<string>('');
    const [mucGiamGia, setMucGiamGia] = useState<string>('');
    
    const [valueUpdateState, setValueUpdateState] = useState<any>(valueUpdate ? valueUpdate : null);
    const selector = useSelector((state: RootState) => state.main);
    const { data: session } = useSession();
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
        isClose(false);
    };

    const reset = () => {
        setIsLoader(false);
        setMoTa('');
        setTenKhuyenMai('');
        setMaKhuyenMai('');
        setMucGiamGia('');
        handleClose();
        dispatch(clearMessage());
    };

    // xử lý thêm hoặc chỉnh sửa mã khuyễn mãi
    const handleClickBtn = () => {
        const isFormValid =
            tenKhuyenMai.trim() !== '' &&
            moTa.trim() !== '' &&
            maKhuyenMai.trim() !== '' &&
            mucGiamGia &&
            timeStart.trim() !== '' &&
            timeEnd.trim() !== '';
        if (isFormValid) {
            const dateStart = formatISODate(new Date(timeStart));
            const dateEnd = formatISODate(new Date(timeEnd));
    
            if (dateEnd > dateStart) {
                const discountData = {
                    authorId: session?.user.id,
                    name: tenKhuyenMai,
                    description: moTa,
                    dateStart,
                    dateEnd,
                    code: maKhuyenMai,
                    percent: +mucGiamGia,
                };
    
                const action = valueUpdate && valueUpdate.id ? updateDiscount : addDiscount;
    
                dispatch(action(valueUpdate?.id ? { ...discountData, id: valueUpdate.id } : discountData));
                setIsLoader(true);
            } else {
                toast.warning('Ngày kết thúc phải lớn hơn ngày bắt đầu!', {
                    position: 'bottom-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    transition: Zoom,
                });
            }
        } else {
            toast.warning('Vui lòng nhập đầy đủ các thông tin!', {
                position: 'bottom-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Zoom,
            });
        }
    };
    

    // tạo tự động các mã khuyễn mãi
    const generateMaKhuyenMai = async () => {
        const resp = await GetAllCodeInDiscount();
        if (resp) {
            setMaKhuyenMai(generateUniqueCodeInDiscount(resp));
        }
    };

    // XỬ LÝ LẤY GIÁ TRỊ KHI NGƯỜI DÙNG NHẤN CHỈNH SỬA HIỂN THỊ LÊN FORM
    useEffect(() => {
        if (valueUpdateState !== null) {
            setTimeStart(moment(valueUpdateState.dateStart).format('YYYY-MM-DD'));
            setTimeEnd(moment(valueUpdateState.dateEnd).format('YYYY-MM-DD'));
            setTenKhuyenMai(valueUpdateState.name);
            setMaKhuyenMai(valueUpdateState.code);
            setMucGiamGia(valueUpdateState.percent);
            setMoTa(valueUpdateState.description);
        }
    }, [valueUpdateState]);

    useEffect(() => {
        if (isOpen) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [isOpen]);

    // XỬ lý kiểm tra khi thêm hoặc chỉnh sửa sẽ thông báo 1 toast và open = false
    useEffect(() => {
        if (
            selector.message === 'Thêm mã khuyến mãi thành công' ||
            selector.message === 'Chỉnh sửa mã khuyến mãi thành công'
        ) {
            reset();
            showToast({
                message: selector.message,
                status: true,
            });
        }
    }, [selector.message]);

    return (
        <>
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
                            value={tenKhuyenMai || ''}
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
                            value={moTa || ''}
                            onChange={(e) => setMoTa(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className={cx('wrapper-content', 'mt-2')}>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm">Mã khuyến mãi</p>
                            <Tippy content="Tạo mã khuyễn mãi tự động">
                                <p
                                    className="font-semibold text-sm underline text-primaryColor hover:cursor-pointer"
                                    onClick={generateMaKhuyenMai}
                                >
                                    Tạo tự động
                                </p>
                            </Tippy>
                        </div>
                        <input
                            className={cx('wrapper-content-inputName', 'mt-2')}
                            placeholder="Bấm tạo tự động"
                            value={maKhuyenMai || ''}
                            disabled={true}
                            onChange={(e) => setMaKhuyenMai(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold text-sm">Mức giảm</p>
                        <div className={cx('wrapper-content-discount', 'mt-2')}>
                            <input
                                placeholder="Nhập số phần trăm"
                                value={mucGiamGia || ''}
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
                                    value={timeStart || ''}
                                    onChange={(e) => setTimeStart(e.target.value)}
                                />
                            </div>
                            <div className="ml-6">
                                <p className="text-xs font-medium">Thời gian kết thúc</p>
                                <input
                                    className={cx('wrapper-content-inputTimeEnd', 'mt-2')}
                                    type="date"
                                    value={timeEnd  || ''}
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
                        onClick={handleClickBtn}
                        // disabled={isClicked}
                    >
                        {isLoader
                            ? '...'
                            : valueUpdate && valueUpdate.id
                              ? 'Chỉnh sửa mã khuyễn mãi'
                              : 'Thêm mã khuyễn mãi'}
                    </button>
                </div>
            </div>
        </>
    );
}
