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
import MenuItem from '@mui/material/MenuItem';

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
                    <div className={cx('inp-wrapper')}>
                        <label>Số điện thoại:</label>
                        <input
                            className={cx('add-inp')}
                            defaultValue={session?.user.phone}
                            {...register('phone')}
                        />
                    </div>
                    <div className={cx('inp-wrapper')}>
                        <label>Tỉnh/Thành phố:</label>
                        <select
                            className={cx('add-inp')}
                            defaultValue={''}
                            value={session?.user.city}
                            {...register('city')}
                        >
                            {province.map((item: any, index: number) => (
                                <option key={index} value={item.Name}>
                                    {item.Name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('inp-wrapper')}>
                        <label>Huyện/Thị trấn:</label>
                        <select
                            className={cx('add-inp')}
                            defaultValue={''}
                            value={session?.user.district}
                            {...register('district')}
                        >
                            {province
                                .find((item: any) => item.Name === watch('city'))
                                ?.Districts.map((item: any, index: number) => (
                                    <option key={index} value={item.Name}>
                                        {item.Name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className={cx('inp-wrapper')}>
                        <label>Phường/Xã:</label>
                        <select
                            className={cx('add-inp')}
                            defaultValue={''}
                            value={session?.user.ward}
                            {...register('ward')}
                        >
                            {province
                                .find((item: any) => item.Name === watch('city'))
                                ?.Districts.find((item: any) => item.Name === watch('district'))
                                ?.Wards.map((item: any, index: number) => (
                                    <option key={index} value={item.Name}>
                                        {item.Name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className={cx('inp-wrapper')}>
                        <label>Địa chỉ:</label>
                        <input
                            className={cx('add-inp')}
                            defaultValue={session?.user.address}
                            {...register('address')}
                        />
                    </div>
                    <button type="submit" className={cx('commom-button')}>
                        Cập nhật
                    </button>
                </form>
            </div>
        </>
    );
}
