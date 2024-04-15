'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import bagIcon from '../../../public/icon/bag-shopping.svg';
import searchIcon from '../../../public/icon/magnifying-glass.svg';
import logo from '../../../public/img/logo.png';
import styles from './header.module.scss';

const link = [
    {
        id: 1,
        title: 'Trang Chủ',
        pathname: '/',
    },
    {
        id: 2,
        title: 'Giới thiệu',
        pathname: '/gioithieu',
    },
    {
        id: 3,
        title: 'Dịch vụ',
        pathname: '/dichvu',
    },
    {
        id: 4,
        title: 'Sản phẩm',
        pathname: '/sanpham',
    },
    {
        id: 5,
        title: 'Blogs',
        pathname: '/blogs',
    },
    {
        id: 6,
        title: 'Liên hệ',
        pathname: '/lienhe',
    },
];

const cx = classNames.bind(styles);

export interface HeaderProps {
}

export default function Header(props: HeaderProps) {
    const path = usePathname();
    const [scrollToTop, setScrollToTop] = useState<number>(0);

    useEffect(() => {
        const scroll = () => {
            setScrollToTop(window.scrollY);
        };

        window.addEventListener('scroll', scroll);

        return () => window.removeEventListener('scroll', scroll);
    }, []);

    return (
        <div
            className={'py-4 ' + cx('header')}
            style={{
                backgroundColor: scrollToTop > 0 ? '#fff' : 'transparent',
                boxShadow: scrollToTop > 0 ? 'rgba(0, 0, 0, 0.2) 0px 5px 15px' : '',
            }}
        >
            <div className={'container'}>
                <div className={'flex justify-between items-center'}>
                    <Image alt="Logo công ty PESTNCLEAN" src={logo.src} width={176} height={100} />
                    <div className={cx('header-link')}>
                        <ul className={cx('link')}>
                            {link.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <Link
                                            href={item.pathname}
                                            style={{
                                                color: path === item.pathname ? 'var(--primary)' : '',
                                                textDecoration: path === item.pathname ? '2px underline' : '',
                                                textUnderlineOffset: path === item.pathname ? '5px' : '',
                                            }}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={cx('header-icon')}>
                        <Image
                            alt="Ảnh tìm kiếm PESTNCLEAN"
                            src={searchIcon.src}
                            width={18}
                            height={30}
                            className="opacity"
                        />
                        <Link href={'/giohang'} style={{}} className="opacity">
                            <Image alt="Ảnh giỏ hàng PESTNCLEAN" src={bagIcon.src} width={18} height={30} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
