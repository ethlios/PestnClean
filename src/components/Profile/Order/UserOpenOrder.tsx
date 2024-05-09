'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './order.module.scss';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import ProductOrder from './ProductOrder';

const cx = classNames.bind(styles);

interface IAppProps {
    setOpenAddOrder?: any;
    order?: any;
}

export default function UserOpenOrder({ setOpenAddOrder, order }: IAppProps) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [district, setDistrict] = useState<string>('');
    const [ward, setWard] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [payment, setPayment] = useState<string>('');
    const [paymentStatus, setPaymentStatus] = useState<string>('');
    const [orderAt, setOrderAt] = useState<string>('');
    const [code, setCode] = useState<string>('');
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        setName(order?.name || '');
        setEmail(order?.email || '');
        setPhone(order?.phone || '');
        setAddress(order?.address || '');
        setCity(order?.city || '');
        setDistrict(order?.district || '');
        setWard(order?.Ward || '');
        setMessage(order?.message || '');
        setProducts(JSON.parse(order?.product) || []);
        setStatus(order?.status || '');
        setPayment(order?.payment || '');
        setPaymentStatus(order?.paymentStatus || '');
        setOrderAt(order?.orderAt || '');
        setCode(order?.code || '');
    }, []);

    return (
        <div className={`${cx('add-wrapper')} cpmount`}>
            <div className={cx('add-content')} onClick={(e) => e.stopPropagation()} style={{ zIndex: 100 }}>
                <div className={cx('add-header')}>
                    <p>Xem đơn hàng</p>
                    <button className={cx('commom-button')} onClick={() => setOpenAddOrder(false)}>
                        EXIT
                    </button>
                </div>
                <div className={cx('add-body')}>
                    <div className={'grid grid-cols-12 gap-3 w-full'}>
                        <div className={'col-span-12 md:col-span-4'}>
                            <div className={'flex flex-col gap-2 w-full'}>
                                <TextField label="Tên..." value={name} disabled={true} />
                                <TextField label="Email..." type={'email'} value={email} disabled={true} />
                                <TextField
                                    label="Số điện thoại..."
                                    type={'tel'}
                                    value={phone}
                                    disabled={true}
                                />
                                <TextField label="Địa chỉ..." value={address} disabled={true} />
                                <FormControl sx={{ mb: 1 }}>
                                    <InputLabel>Tỉnh thành</InputLabel>
                                    <Select label="Tỉnh thành" defaultValue={''} value={city} disabled={true}>
                                        <MenuItem value={city}>{city}</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ mb: 1 }}>
                                    <InputLabel>Quận huyện</InputLabel>
                                    <Select
                                        label="Quận huyện"
                                        defaultValue={''}
                                        value={district}
                                        disabled={true}
                                    >
                                        <MenuItem value={district}>{district}</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ mb: 1 }}>
                                    <InputLabel>Phường xã</InputLabel>
                                    <Select label="Phường xã" defaultValue={''} value={ward} disabled={true}>
                                        <MenuItem value={ward}>{ward}</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className={'col-span-12 md:col-span-4'}>
                            <div className={'flex flex-col gap-2 w-full'}>
                                <TextField label="Tạo ngày..." value={orderAt} disabled={true} />
                                <TextField label="Code..." value={code} disabled={true} />
                                <FormControl sx={{ mb: 1 }}>
                                    <InputLabel>Trạng thái</InputLabel>
                                    <Select
                                        label="Trạng thái"
                                        defaultValue={''}
                                        value={status}
                                        disabled={true}
                                    >
                                        <MenuItem value={status}>{status}</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ mb: 1 }}>
                                    <InputLabel>Phương thức thanh toán</InputLabel>
                                    <Select
                                        label="Phương thức thanh toán"
                                        defaultValue={''}
                                        value={paymentStatus}
                                        disabled={true}
                                    >
                                        <MenuItem value={paymentStatus}>{paymentStatus}</MenuItem>
                                    </Select>
                                </FormControl>
                                <textarea
                                    spellCheck="false"
                                    placeholder="Ghi chú thêm"
                                    className={cx('textarea')}
                                    value={message}
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <div className={'col-span-12 md:col-span-4'}>
                            <ProductOrder products={products} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
