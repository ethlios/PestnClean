import React from 'react';
import classNames from 'classnames/bind';
import styles from '../profile.module.scss';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function UserAccount(props: IAppProps) {
    const { data: session } = useSession();

    console.log(session?.user);

    return (
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
            <div className={cx('inp-wrapper')}>
                <label>Phone:</label>
                <input className={cx('add-inp')} />
            </div>
            <div>
                <label>Phone:</label>
                <input className={cx('add-inp')} />
            </div>{' '}
            <div>
                <label>Phone:</label>
                <input className={cx('add-inp')} />
            </div>{' '}
            <div>
                <label>Phone:</label>
                <input className={cx('add-inp')} />
            </div>{' '}
            <div>
                <label>Phone:</label>
                <input className={cx('add-inp')} />
            </div>{' '}
            <div>
                <label>Phone:</label>
                <input className={cx('add-inp')} />
            </div>{' '}
            <div>
                <label>Phone:</label>
                <input className={cx('add-inp')} />
            </div>{' '}
            <div>
                <label>Phone:</label>
                <input className={cx('add-inp')} />
            </div>
        </div>
    );
}
