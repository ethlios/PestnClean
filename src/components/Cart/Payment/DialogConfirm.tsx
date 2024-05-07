import { Button } from '@mui/material';
import styles from './payment.module.scss';
import classNames from 'classnames/bind';
import useSize from '~/libs/hooks/useSize';
import formatter from '~/libs/orthers/formatMoney';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '~/redux/actions';
import { useSession } from 'next-auth/react';
import { uidOrder } from '~/libs/orthers/generatedCode';

const cx = classNames.bind(styles);

export interface IAppProps {
    setShowDialog?: any;
    formData?: any;
    cart?: any;
    totalAllPrice?: number;
    formInfoRef?: any;
}

export default function DialogConfirm({
    setShowDialog,
    formData,
    cart,
    totalAllPrice,
    formInfoRef,
}: IAppProps) {
    const { sizeX } = useSize();
    const dispatch = useDispatch();
    const { data: session } = useSession();

    const handleClose = () => {
        setShowDialog(false);
    };

    const sendEmail = () => {
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formInfoRef.current, 'YOUR_USER_ID').then(
        //     (result) => {
        //         console.log('SUCCESS!');
        //     },
        //     (error) => {
        //         console.log('FAILED...', error);
        //     },
        // );
    };

    const order = {
        authorId: 104399638902286280553,
        userId: session?.user.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        district: formData.district,
        ward: formData.ward,
        message: formData.message,
        code: uidOrder(),
        payment: 'COD',
        product: JSON.stringify(cart),
    };

    const handleConfirm = () => {
        dispatch(addOrder(order));
        // console.log(order);
        sendEmail();
    };

    return (
        <div className="cpmount">
            <div className={cx('dialog-wrapper')} onClick={handleClose}>
                <div
                    className={cx('dialog-content')}
                    style={{
                        padding: sizeX < 500 ? '20px' : '',
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <p
                        className={cx('dialog-title')}
                        style={{
                            fontSize: sizeX < 500 ? '16px' : '',
                            textAlign: 'center',
                        }}
                    >
                        Xác nhận thông tin đơn hàng?
                    </p>
                    <div
                        className={'flex justify-between my-2'}
                        style={{
                            flexDirection: sizeX < 500 ? 'column' : 'row',
                        }}
                    >
                        <div style={{ width: sizeX < 500 ? '100%' : '50%' }}>
                            <p className={cx('dialog-title')}>Thông tin giao hàng</p>
                            <p className={cx('dialog-info')}>
                                <span>Tên: </span>
                                <span>{formData.name}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Email: </span>
                                <span>{formData.email}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Số điện thoại: </span>
                                <span>{formData.phone}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Địa chỉ: </span>
                                <span>{formData.address}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Thành phố: </span>
                                <span>{formData.city}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Quận/Huyện: </span>
                                <span>{formData.district}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Phường/Xã: </span>
                                <span>{formData.ward}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Thông điệp: </span>
                                <span>{formData.message}</span>
                            </p>
                        </div>
                        <div style={{ width: sizeX < 500 ? '100%' : '50%' }}>
                            <p className={cx('dialog-title')}>Thông tin đơn hàng</p>
                            {cart.map((item: any, index: number) => (
                                <div key={index} className={cx('dialog-info')}>
                                    <span>{item.quantity}</span>
                                    <span> x </span>
                                    <span>{item.title}</span>
                                </div>
                            ))}
                            <b>Tổng : {totalAllPrice ? formatter.format(+totalAllPrice) : 0}</b>
                        </div>
                    </div>
                    <div className={cx('dialog-button')}>
                        <Button
                            variant="outlined"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '600',
                                outline: '2px solid',
                                width: '50%',
                            }}
                            onClick={handleClose}
                        >
                            {sizeX < 580 ? 'Back' : 'Quay lại thông tin'}
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '600',
                                width: '50%',
                            }}
                            onClick={handleConfirm}
                        >
                            {sizeX < 580 ? 'Confirm' : 'Xác nhận'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
