'use client';

import classNames from 'classnames/bind';
import styles from './payment.module.scss';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import useSize from '~/libs/hooks/useSize';
import { useEffect, useRef, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const cx = classNames.bind(styles);

export interface IAppProps {
    setFormData?: any;
    formInfo?: any;
}

const classInput = 'w-full lg:w-5/6';

export default function PaymentForm({ setFormData, formInfo }: IAppProps) {
    const { sizeX } = useSize();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [district, setDistrict] = useState<string>('');
    const [ward, setWard] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [province, setProvince] = useState<any>([]);
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const isPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    useEffect(() => {
        const fetchProvince = async () => {
            const res = await fetch(
                'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
            ).then((res) => res.json());
            setProvince(res);
        };

        fetchProvince();
    }, []);

    useEffect(() => {
        setFormData({
            name,
            email,
            phone,
            address,
            city,
            district,
            ward,
            message,
        });
    }, [name, email, phone, address, city, district, ward, message]);

    return (
        <div>
            <div>
                <p className={cx('title')}>Phương thức thanh toán</p>
                <div className={'my-5'}>
                    <div
                        className={`${cx('payment-method')} ${classInput}`}
                        style={{
                            border: 'solid 2px var(--primary)',
                            color: 'var(--primary)',
                        }}
                    >
                        <PaymentsOutlinedIcon className={'mr-3'} />
                        <p>COD</p>
                    </div>
                    <div className={`${cx('payment-method')} ${classInput}`}>
                        <PaymentIcon className={'mr-3'} />
                        <p>CHUYỂN KHOẢN</p>
                    </div>
                </div>
            </div>
            <div className={'my-3'}>
                <p className={cx('title')}>Thông tin giao hàng</p>
                <div className={'my-5'}>
                    <form
                        ref={formInfo}
                        style={{
                            display: 'flex',
                            gap: '10px',
                            flexDirection: 'column',
                        }}
                    >
                        <TextField
                            label="Tên..."
                            className={classInput}
                            sx={{ marginBottom: '10px' }}
                            onChange={(e) => setName(e.target.value)}
                            required={true}
                        />
                        <TextField
                            label="Email..."
                            className={classInput}
                            sx={{ marginBottom: '10px' }}
                            onChange={(e) => setEmail(e.target.value)}
                            error={email !== '' && !validateEmailRegex.test(email)}
                            type={'email'}
                        />
                        <TextField
                            label="Số điện thoại..."
                            className={classInput}
                            sx={{ marginBottom: '10px' }}
                            onChange={(e) => setPhone(e.target.value)}
                            error={phone !== '' && !isPhone.test(phone)}
                            required={true}
                            type={'tel'}
                        />
                        <TextField
                            label="Địa chỉ..."
                            className={classInput}
                            sx={{ marginBottom: '10px' }}
                            onChange={(e) => setAddress(e.target.value)}
                            required={true}
                        />
                        <FormControl sx={{ mb: 1 }} className={classInput}>
                            <InputLabel>Tỉnh thành</InputLabel>
                            <Select
                                label="Tỉnh thành"
                                onChange={(e) => {
                                    setCity(e.target.value);
                                    setDistrict('');
                                    setWard('');
                                }}
                                value={city}
                            >
                                {province.map((item: any, index: number) => (
                                    <MenuItem key={index} value={item.Name}>
                                        {item.Name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ mb: 1 }} className={classInput}>
                            <InputLabel>Quận huyện</InputLabel>
                            <Select
                                label="Quận huyện"
                                onChange={(e) => {
                                    setDistrict(e.target.value);
                                    setWard('');
                                }}
                                value={district}
                            >
                                {province
                                    .find((item: any) => item.Name === city)
                                    ?.Districts.map((item: any, index: number) => (
                                        <MenuItem key={index} value={item.Name}>
                                            {item.Name}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ mb: 1 }} className={classInput}>
                            <InputLabel>Phường xã</InputLabel>
                            <Select label="Phường xã" onChange={(e) => setWard(e.target.value)} value={ward}>
                                {province
                                    .find((item: any) => item.Name === city)
                                    ?.Districts.find((item: any) => item.Name === district)
                                    ?.Wards.map((item: any, index: number) => (
                                        <MenuItem key={index} value={item.Name}>
                                            {item.Name}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                        <textarea
                            spellCheck="false"
                            placeholder="Ghi chú thêm"
                            className={`${cx('textarea')} ${classInput}`}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <FormControlLabel
                            required
                            control={<Checkbox />}
                            label="Tôi đã đọc chính sách bảo mật và quyền riêng tư."
                            sx={{
                                marginTop: '5px',
                                fontSize: '10px',
                            }}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
