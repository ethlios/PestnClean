'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '~/components/Admin/admin.module.scss';
import UserAccount from '~/components/Profile/Account/page';
import UserNotification from '~/components/Profile/Notification/page';
import UserOrder from '~/components/Profile/Order/page';
import { profiles } from '~/constants/other';
import useSize from '~/libs/hooks/useSize';
import logo from '../../../../../public/img/logo.png';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function Admin(props: IAppProps) {
    const { sizeX } = useSize();
    const [currentContent, setCurrentContent] = useState<number>(0);
    const router = useRouter();

    return (
        <div className={cx('admin-wrapper')}>
            <div className={cx('admin-panel')}>
                <div className={cx('panel-header')}>
                    <Link href={'/'}>
                        <Image alt="Logo công ty PESTNCLEAN" src={logo.src} width={140} height={100} />
                    </Link>
                </div>
                <div className={cx('panel-wrapper')}>
                    {profiles.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={cx('panel-item')}
                                style={{
                                    backgroundColor: currentContent === index ? 'rgba(0,0,0,0.1)' : '',
                                }}
                                onClick={() => setCurrentContent(index)}
                            >
                                <item.icon />
                                {item.title}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={cx('admin-content')}>
                <div className={cx('content-header')}>
                    <button onClick={() => router.back()} className={cx('commom-button')}>
                        Exit
                    </button>
                </div>
                <div className={cx('content-wrapper')}>
                    {currentContent === 0 ? (
                        <UserAccount />
                    ) : currentContent === 1 ? (
                        <UserNotification />
                    ) : currentContent === 2 ? (
                        <UserOrder />
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
}
