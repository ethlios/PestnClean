'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { useSession } from 'next-auth/react';
import styles from './Discount.module.scss';
import ChooseObjectCustomer from './ChooseObjectCustomer';
import { addDiscount } from '~/redux/actions';

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
    const [openChooseObjectCustomer, setOpenChooseObjectCustomer] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [timeStart, setTimeStart] = useState<string>('');
    const [timeEnd, setTimeEnd] = useState<string>('');
    const { data: session } = useSession();
    const selector = useSelector((state: RootState) => state.main);
    const [tenKhuyenMai, setTenKhuyenMai] = useState('');
    const [moTa, setMoTa] = useState('');
    const [maKhuyenMai, setMaKhuyenMai] = useState('');
    const [mucGiamGia, setMucGiamGia] = useState('');
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
        isClose(false);
    };

    const handleClickOpenChooseObject = () => {
        setOpenChooseObjectCustomer(true);
    };

    const handleSave = () => {
        // Đóng modal sau khi lưu thành công
        isClose(false);

        const data = {
            authorId: session?.user.id,
            name: tenKhuyenMai,
            description: moTa,
            // selectedOption,
            dateStart: new Date(timeStart),
            dateEnd: new Date(timeEnd),
            code: maKhuyenMai,
            percent: +mucGiamGia,
        };

        dispatch(addDiscount(data));
    };

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    const generateMaKhuyenMai = () => {
        const randomString = Math.random().toString(36).substring(2, 8); // Sinh chuỗi ngẫu nhiên 6 ký tự
        setMaKhuyenMai(randomString);
    };

    useEffect(() => {
        if (isOpen) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        // Lấy ngày và giờ hiện tại
        const now = new Date();
        // Format ngày và giờ thành chuỗi YYYY-MM-DDThh:mm (định dạng datetime-local)
        const formattedDateTime = now.toISOString().slice(0, 16);
        setTimeStart(formattedDateTime);
        setTimeEnd(formattedDateTime);
    }, []);

    useEffect(() => {
        if (selectedOption === 'Tùy chọn') {
            setOpenChooseObjectCustomer(true);
        }
    }, [selectedOption]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header', 'flex items-center justify-between h-10')}>
                <p className="font-medium underline">TẠO MÃ KHUYẾN MÃI</p>
                <button type="button" onClick={handleClose}>
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
                <div className="mt-2">
                    <p className="font-semibold text-sm">Đối tượng khách hàng</p>
                    <div className="mt-2">
                        <div className={cx('wrapper-content-object', 'flex items-center')}>
                            <input
                                type="radio"
                                id="unlimited"
                                name="chooseObject"
                                value="Không giới hạn"
                                checked={selectedOption === 'Không giới hạn'}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="unlimited">Không giới hạn khách hàng</label>
                        </div>
                        <div className={cx('wrapper-content-object', 'flex items-center mt-2')}>
                            <input
                                type="radio"
                                id="option"
                                name="chooseObject"
                                value="Tùy chọn"
                                checked={selectedOption === 'Tùy chọn'}
                                onClick={handleClickOpenChooseObject}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="option">Tùy chọn khách hàng</label>
                            <ChooseObjectCustomer
                                valueUpdate={null}
                                isOpen={openChooseObjectCustomer}
                                isClose={(e: boolean) => setOpenChooseObjectCustomer(e)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-content', 'mt-2')}>
                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-sm">Mã khuyến mãi</p>
                        <p
                            className="font-semibold text-sm underline text-primaryColor"
                            onClick={generateMaKhuyenMai}
                        >
                            Tạo tự động
                        </p>
                    </div>
                    <input
                        className={cx('wrapper-content-inputName', 'mt-2')}
                        placeholder="Nhập mã khuyễn mãi hoặc tạo tự động"
                        value={maKhuyenMai}
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
                                type="datetime-local"
                                id="birthdaytime"
                                name="birthdaytime"
                                value={timeStart}
                                onChange={(e) => setTimeStart(e.target.value)}
                            />
                        </div>
                        <div className="ml-6">
                            <p className="text-xs font-medium">Thời gian kết thúc</p>
                            <input
                                className={cx('wrapper-content-inputTimeEnd', 'mt-2')}
                                type="datetime-local"
                                id="birthdaytime"
                                name="birthdaytime"
                                value={timeEnd}
                                onChange={(e) => setTimeEnd(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    className={cx('wrapper-btnSubmit', 'mt-6')}
                    onClick={handleSave}
                    // disabled={isClicked}
                >
                    Thêm mã khuyễn mãi
                </button>
            </div>
        </div>
    );
}