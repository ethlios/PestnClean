import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../profile.module.scss';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateSessionUser } from '~/redux/actions';
import Toast from '~/components/Orther/Toast';
import { RootState } from '~/redux/provider/store';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function UserAccount(props: IAppProps) {
    const { data: session, update: sessionUpdate } = useSession();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<any>();
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState<boolean>(false);
    const [message, setShowMessage] = useState<string>('');
    const isPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const province = useSelector((state: RootState) => state.main.province);

    const onSubmit = (data: any) => {
        if (isPhone.test(data.phone)) {
            const userProfile = {
                ...session?.user,
                ...data,
            };

            dispatch(updateSessionUser(userProfile));

            sessionUpdate({
                info: { ...userProfile },
            });

            setShowMessage('Cập nhật thông tin thành công');

            setShowToast(true);
        } else {
            setShowMessage('Vui lòng nhập đúng số điện thoại');
            setShowToast(true);
        }
    };

    return (
        <>
            <Toast
                rule={message === 'Vui lòng nhập đúng số điện thoại' ? 'default' : 'normal'}
                text={message}
                setShowToast={setShowToast}
                showToast={showToast}
            />
            <div className={cx('user-account')}>
                <div className={cx('avatar')}>
                    {session?.user.image ? (
                        <Image src={session.user.image} alt={'Avatar'} width={1000} height={1000} />
                    ) : (
                        session?.user.name.charAt(0).toUpperCase()
                    )}
                </div>
                <p>
                    <b>Tên:</b> {session?.user.name}
                </p>
                <p>
                    <b>Email:</b> {session?.user.email}
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className={cx('user-form')}>
                    <TextField
                        label="Số điện thoại"
                        defaultValue={session?.user.phone}
                        className={cx('add-inp')}
                        {...register('phone')}
                    />
                    <FormControl className={cx('add-inp')}>
                        <InputLabel
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                marginBottom: '10px',
                            }}
                        >
                            Tỉnh/Thành phố:
                        </InputLabel>
                        <Select
                            defaultValue={''}
                            value={session?.user.city}
                            {...register('city')}
                            label="Tỉnh/Thành phố"
                        >
                            {province.map((item: any, index: number) => (
                                <MenuItem key={index} value={item.Name}>
                                    {item.Name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={cx('add-inp')}>
                        <InputLabel
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                marginBottom: '10px',
                            }}
                        >
                            Huyện/Thị trấn:
                        </InputLabel>
                        <Select
                            defaultValue={''}
                            value={session?.user.district}
                            {...register('district')}
                            label="Huyện/Thị trấn"
                        >
                            {province
                                .find((item: any) => item.Name === watch('city'))
                                ?.Districts.map((item: any, index: number) => (
                                    <MenuItem key={index} value={item.Name}>
                                        {item.Name}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                    <FormControl className={cx('add-inp')}>
                        <InputLabel
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                marginBottom: '10px',
                            }}
                        >
                            Phường/Xã:
                        </InputLabel>
                        <Select
                            defaultValue={''}
                            value={session?.user.ward}
                            {...register('ward')}
                            label="Phường/Xã"
                        >
                            {province
                                .find((item: any) => item.Name === watch('city'))
                                ?.Districts.find((item: any) => item.Name === watch('district'))
                                ?.Wards.map((item: any, index: number) => (
                                    <MenuItem key={index} value={item.Name}>
                                        {item.Name}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Địa chỉ"
                        defaultValue={session?.user.address}
                        className={cx('add-inp')}
                        {...register('address')}
                    />
                    <button type="submit" className={cx('commom-button')}>
                        Cập nhật
                    </button>
                </form>
            </div>
        </>
    );
}
