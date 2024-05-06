import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../profile.module.scss';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateSessionUser } from '~/redux/actions';
import Toast from '~/components/Orther/Toast';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function UserAccount(props: IAppProps) {
    const { data: session, update: sessionUpdate } = useSession();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>();
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState<boolean>(false);
    const [message, setShowMessage] = useState<string>('');
    const isPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

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
                        <label>Phường/Xã:</label>
                        <input
                            className={cx('add-inp')}
                            defaultValue={session?.user.ward}
                            {...register('ward')}
                        />
                    </div>
                    <div className={cx('inp-wrapper')}>
                        <label>Huyện/Thị trấn:</label>
                        <input
                            className={cx('add-inp')}
                            defaultValue={session?.user.district}
                            {...register('district')}
                        />
                    </div>
                    <div className={cx('inp-wrapper')}>
                        <label>Tỉnh/Thành phố:</label>
                        <input
                            className={cx('add-inp')}
                            defaultValue={session?.user.city}
                            {...register('city')}
                        />
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
