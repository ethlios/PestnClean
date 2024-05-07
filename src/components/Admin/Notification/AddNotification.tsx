'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { useSession } from 'next-auth/react';
import styles from './Notification.module.scss';
import ChooseObjectCustomer from './ChooseObjectCustomer';
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

export default function AddNotification({ isOpen, isClose, valueUpdate }: IAppProps) {
    const [open, setOpen] = useState(false);
    const [openChooseObjectCustomer, setOpenChooseObjectCustomer] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [timeStart, setTimeStart] = useState<string>('');
    const [timeEnd, setTimeEnd] = useState<string>('');
    const session = useSession();
    const selector = useSelector((state: RootState) => state.main);

    const handleClose = () => {
        setOpen(false);
        isClose(false);
    };

    const handleClickOpenChooseObject = () => {
        setOpenChooseObjectCustomer(true);
    }

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
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
        if(selectedOption === "Tùy chọn"){
            setOpenChooseObjectCustomer(true);
        }
    },[selectedOption]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header', 'flex items-center justify-between h-10')}>
                <p className="font-medium underline">TẠO THÔNG BÁO</p>
                <button className={cx('wrapper-header-btnExit')} type="button" onClick={handleClose}>
                    Exit
                </button>
            </div>
            <div className={cx('wrapper-content', 'mt-2')}>
                <div className="mt-4">
                    <p className="font-semibold text-sm">Tiêu đề thông báo</p>
                    <input
                        className={cx('wrapper-content-inputName', 'mt-2')}
                        placeholder="Nhập tiêu đề thông báo"
                    />
                </div>
                <div className="mt-4">
                    <p className="font-semibold text-sm">Mô tả</p>
                    <textarea
                        className={cx('wrapper-content-textarea', 'mt-2')}
                        id="w3review"
                        name="w3review"
                        rows={4}
                        placeholder="Nhập mô tả thông báo"
                    ></textarea>
                </div>
                <div className="mt-2">
                    <p className="font-semibold text-sm">Đối tượng thông báo</p>
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
            <div className="flex justify-center">
                <button
                    className={cx('wrapper-btnSubmit', 'mt-6')}
                    // onClick={handleSave}
                    // disabled={isClicked}
                >
                    Thêm thông báo
                </button>
            </div>
        </div>
    );
}
