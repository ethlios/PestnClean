'use client';

import classNames from 'classnames/bind';
import styles from './payment.module.scss';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';

const cx = classNames.bind(styles);

export interface IAppProps {
    setFormData?: any;
    formInfoRef?: any;
}

const classInput = 'w-full lg:w-5/6';

export default function PaymentForm({ setFormData, formInfoRef }: IAppProps) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [district, setDistrict] = useState<string>('');
    const [ward, setWard] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const isPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const { data: session } = useSession();
    const province = useSelector((state: RootState) => state.main.province);

    useEffect(() => {
        if (session?.user) {
            setName(session.user.name || '');
            setEmail(session.user.email || '');
            setPhone(session.user.phone || '');
            setAddress(session.user.address || '');
            setCity(session.user.city || '');
            setDistrict(session.user.district || '');
            setWard(session.user.ward || '');
        }
    }, [session?.user]);

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
    }, [name, email, phone, address, city, district, ward, message, setFormData]);

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
                        ref={formInfoRef}
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
                            value={name}
                        />
                        <TextField
                            label="Email..."
                            className={classInput}
                            sx={{ marginBottom: '10px' }}
                            onChange={(e) => setEmail(e.target.value)}
                            error={email !== null && email !== '' && !validateEmailRegex.test(email)}
                            type={'email'}
                            required={true}
                            value={email}
                        />
                        <TextField
                            label="Số điện thoại..."
                            className={classInput}
                            sx={{ marginBottom: '10px' }}
                            onChange={(e) => setPhone(e.target.value)}
                            error={phone !== null && phone !== '' && !isPhone.test(phone)}
                            required={true}
                            type={'tel'}
                            value={phone}
                        />
                        <TextField
                            label="Địa chỉ..."
                            className={classInput}
                            sx={{ marginBottom: '10px' }}
                            onChange={(e) => setAddress(e.target.value)}
                            required={true}
                            value={address}
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
                                defaultValue={''}
                                value={city}
                                required={true}
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
                                defaultValue={''}
                                value={district}
                                required={true}
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
                            <Select
                                label="Phường xã"
                                onChange={(e) => setWard(e.target.value)}
                                defaultValue={''}
                                value={ward}
                                required={true}
                            >
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
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: '10px',
                                gap: '10px',
                                alignItems: 'center',
                            }}
                        >
                            <input
                                type="checkbox"
                                required
                                style={{ accentColor: 'var(--primary)', width: '16px', height: '16px' }}
                                id="checkboxid"
                            />
                            <label
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    color: 'var(--text-black)',
                                }}
                                htmlFor="checkboxid"
                            >
                                Tôi đã đọc{' '}
                                <Link
                                    href="/hoidap?q=chinh-sach-bao-mat-thong-tin"
                                    style={{ color: 'var(--primary)' }}
                                >
                                    chính sách bảo mật và quyền riêng tư
                                </Link>
                                .
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
