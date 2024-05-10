'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './order.module.scss';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import ProductOrder from './ProductOrder';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';

const cx = classNames.bind(styles);

interface IAppProps {
    setOpenAddOrder?: any;
    allOrders?: any;
    isUpdate?: any;
    order?: any;
    handleUpdate?: any;
    handleDelete?: any;
    handleAdd?: any;
}

export default function AdminAddOrder({
    setOpenAddOrder,
    isUpdate,
    order,
    handleUpdate,
    handleDelete,
    handleAdd,
}: IAppProps) {
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
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const isPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const [products, setProducts] = useState<any>([]);
    const [newOrderData, setNewOrderData] = useState<any>(null);
    const { data: session } = useSession();
    const province = useSelector((state: RootState) => state.main.province);

    useEffect(() => {
        if (isUpdate) {
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
        }
    }, []);

    useEffect(() => {
        if (isUpdate) {
            setNewOrderData({
                id: order?.id,
                name: name,
                email: email,
                phone: phone,
                address: address,
                city: city,
                district: district,
                ward: ward,
                message: message,
                product: JSON.stringify(products),
                status: status,
                payment: payment,
                paymentStatus: paymentStatus,
            });
        } else {
            setNewOrderData({
                authorID: session?.user.id,
                name: name,
                email: email,
                phone: phone,
                address: address,
                city: city,
                district: district,
                ward: ward,
                message: message,
                product: JSON.stringify(products),
                status: status,
                payment: String(
                    products.reduce((acc: number, item: any) => acc + +item.price * +item.quantity, 0),
                ),
                paymentStatus: paymentStatus,
            });
        }
    }, [name, email, phone, address, city, district, ward, message, products, status, paymentStatus]);

    return (
        <div className={`${cx('add-wrapper')} cpmount`}>
            <div className={cx('add-content')} onClick={(e) => e.stopPropagation()} style={{ zIndex: 100 }}>
                <div className={cx('add-header')}>
                    <p>{isUpdate ? 'Cập nhật đơn hàng' : 'Thêm đơn hàng'}</p>
                    <button className={cx('commom-button')} onClick={() => setOpenAddOrder(false)}>
                        EXIT
                    </button>
                </div>
                <div className={cx('add-body')}>
                    <div className={'grid grid-cols-12 gap-3 w-full'}>
                        <div className={'col-span-12 md:col-span-4'}>
                            <div className={'flex flex-col gap-2 w-full'}>
                                <TextField
                                    label="Tên..."
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                                <TextField
                                    label="Email..."
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={email !== null && email !== '' && !validateEmailRegex.test(email)}
                                    type={'email'}
                                    value={email}
                                />
                                <TextField
                                    label="Số điện thoại..."
                                    onChange={(e) => setPhone(e.target.value)}
                                    error={phone !== null && phone !== '' && !isPhone.test(phone)}
                                    type={'tel'}
                                    value={phone}
                                />
                                <TextField
                                    label="Địa chỉ..."
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                />
                                <FormControl sx={{ mb: 1 }}>
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
                                    >
                                        {province.map((item: any, index: number) => (
                                            <MenuItem key={index} value={item.Name}>
                                                {item.Name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ mb: 1 }}>
                                    <InputLabel>Quận huyện</InputLabel>
                                    <Select
                                        label="Quận huyện"
                                        onChange={(e) => {
                                            setDistrict(e.target.value);
                                            setWard('');
                                        }}
                                        defaultValue={''}
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
                                <FormControl sx={{ mb: 1 }}>
                                    <InputLabel>Phường xã</InputLabel>
                                    <Select
                                        label="Phường xã"
                                        onChange={(e) => setWard(e.target.value)}
                                        defaultValue={''}
                                        value={ward}
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
                                        onChange={(e) => setStatus(e.target.value)}
                                        defaultValue={''}
                                        value={status}
                                    >
                                        <MenuItem value={'Đang xử lý'}>Đang xử lý</MenuItem>
                                        <MenuItem value={'Đã xác nhận'}>Đã xác nhận</MenuItem>
                                        <MenuItem value={'Đã giao'}>Đã giao</MenuItem>
                                        <MenuItem value={'Đã hủy'}>Đã hủy</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ mb: 1 }}>
                                    <InputLabel>Phương thức thanh toán</InputLabel>
                                    <Select
                                        label="Phương thức thanh toán"
                                        onChange={(e) => setPaymentStatus(e.target.value)}
                                        defaultValue={''}
                                        value={paymentStatus}
                                    >
                                        <MenuItem value={'Thanh toán khi nhận hàng'}>
                                            Thanh toán khi nhận hàng
                                        </MenuItem>
                                        <MenuItem value={'Thanh toán qua chuyển khoản'}>
                                            Thanh toán qua chuyển khoản
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <textarea
                                    spellCheck="false"
                                    placeholder="Ghi chú thêm"
                                    className={cx('textarea')}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                />
                            </div>
                        </div>
                        <div className={'col-span-12 md:col-span-4'}>
                            <ProductOrder products={products} setProducts={setProducts} />
                        </div>
                    </div>
                </div>
                <div className={'m-2.5 flex justify-end gap-2'}>
                    {isUpdate ? (
                        <>
                            <Button
                                variant={'outlined'}
                                onClick={() => {
                                    handleDelete(order);
                                    setOpenAddOrder(false);
                                }}
                            >
                                Xóa đơn hàng
                            </Button>
                            <Button
                                variant={'contained'}
                                onClick={() => {
                                    handleUpdate(newOrderData);
                                    setOpenAddOrder(false);
                                }}
                            >
                                Cập nhật đơn hàng
                            </Button>
                        </>
                    ) : (
                        <Button
                            variant={'contained'}
                            onClick={() => {
                                handleAdd(newOrderData);
                                setOpenAddOrder(false);
                            }}
                        >
                            Thêm đơn hàng
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
