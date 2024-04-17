'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import logo from '../../../public/img/logo.png';
import styles from './header.module.scss';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Services from './service';

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
        // pathname: '/dichvu',
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

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
    const path = usePathname();
    const [scrollToTop, setScrollToTop] = useState<number>(0);
    const [openService, setOpenService] = useState<boolean>(false);

    useEffect(() => {
        const scroll = () => {
            setScrollToTop(window.scrollY);
        };

        window.addEventListener('scroll', scroll);

        return () => window.removeEventListener('scroll', scroll);
    }, []);

    return (
        <>
            <Services setOpenService={setOpenService} openService={openService} />
            <div
                className={'container'}
                style={{
                    width: '100vw',
                    height: '70px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                    backgroundColor: scrollToTop > 0 ? '#fff' : 'transparent',
                    boxShadow: scrollToTop > 0 ? 'rgba(0, 0, 0, 0.2) 0px 5px 15px' : '',
                }}
            >
                <Link href={'/'}>
                    <Image alt="Logo công ty PESTNCLEAN" src={logo.src} width={176} height={100} />
                </Link>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '30px',
                    }}
                >
                    <ul
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '20px',
                            fontSize: '15px',
                            transition: ' all ease 0.5s',
                        }}
                        className={cx('link')}
                    >
                        {link.map((item) => {
                            return (
                                <li key={item.id}>
                                    {!!item.pathname ? (
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
                                    ) : (
                                        <p onClick={() => setOpenService(true)}>{item.title}</p>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '12px',
                        justifyContent: 'center',
                    }}
                >
                    <SearchOutlinedIcon
                        sx={{
                            position: 'relative',
                            top: '2px',
                        }}
                        className="icon-hover"
                    />
                    <Link href={'/giohang'} className="icon-hover">
                        <ShoppingBagOutlinedIcon />
                    </Link>
                    <Link href="/login" className="icon-hover">
                        <AccountCircleOutlinedIcon />
                    </Link>
                </div>
            </div>
        </>
    );
}
