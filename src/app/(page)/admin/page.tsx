'use client';

import React, { useState } from 'react';
import useSize from '~/libs/hooks/useSize';
import classNames from 'classnames/bind';
import styles from '~/components/Admin/admin.module.scss';
import { admins } from '~/constants/other';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/img/logo.png';
import { useRouter } from 'next/navigation';
import UserCP from '~/components/Admin/User/user';
import AdminProduct from '~/components/Admin/Product/page';
import AdminNotification from '~/components/Admin/Notification/page';
import AdminOder from '~/components/Admin/Order/page';
import AdminEmail from '~/components/Admin/Email/page';
import AdminImage from '~/components/Admin/Image/page';
import AdminDiscount from '~/components/Admin/Discount/page';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ReorderIcon from '@mui/icons-material/Reorder';
import AdminBlog from '~/components/Admin/Blog/page';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function Admin(props: IAppProps) {
    const { sizeX } = useSize();
    const [currentContent, setCurrentContent] = useState<number>(0);
    const router = useRouter();
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    return (
        <div className={cx('admin-wrapper')}>
            <div className={cx('admin-panel', { open: isOpenMenu })}>
                <div className={cx('panel-header')}>
                    <Link href={'/'}>
                        <Image alt="Logo công ty PESTNCLEAN" src={logo.src} width={140} height={100} />
                    </Link>
                    {isOpenMenu && (
                        <IconButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
                            <CloseIcon />
                        </IconButton>
                    )}
                </div>
                <div className={cx('panel-wrapper')}>
                    {admins.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={cx('panel-item')}
                                style={{
                                    backgroundColor: currentContent === index ? 'rgba(0,0,0,0.1)' : '',
                                }}
                                onClick={() => {
                                    setCurrentContent(index);
                                    sizeX <= 768 && setIsOpenMenu(!isOpenMenu);
                                }}
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
                    {sizeX <= 768 && (
                        <IconButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
                            <ReorderIcon />
                        </IconButton>
                    )}
                    <button onClick={() => router.back()} className={cx('commom-button')}>
                        Exit
                    </button>
                </div>
                <div className={cx('content-wrapper')}>
                    {currentContent === 0 ? (
                        <UserCP />
                    ) : currentContent === 1 ? (
                        <AdminProduct />
                    ) : currentContent === 2 ? (
                        <AdminDiscount />
                    ) : currentContent === 3 ? (
                        <AdminNotification />
                    ) : currentContent === 4 ? (
                        <AdminOder />
                    ) : currentContent === 5 ? (
                        <AdminEmail />
                    ) : currentContent === 6 ? (
                        <AdminImage />
                    ) : (
                        <AdminBlog />
                    )}
                </div>
            </div>
        </div>
    );
}
