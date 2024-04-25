import React, { useEffect, useRef, useState } from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo2 from '../../../public/img/logo2.png';
import Image from 'next/image';
import useSize from '~/libs/hooks/useSize';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from '@mui/material';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import RingVolumeOutlinedIcon from '@mui/icons-material/RingVolumeOutlined';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const cx = classNames.bind(styles);

export interface IAppProps {
    open: boolean;
    setOpen: any;
}

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

const link2 = [
    {
        id: 1,
        title: 'Kiểm soát côn trùng',
        pathname: '/dichvu/kiem-soat-con-trung',
    },
    {
        id: 2,
        title: 'Dịch vụ vệ sinh',
        pathname: '/dichvu/dich-vu-ve-sinh',
    },
    {
        id: 3,
        title: 'Giải pháp vệ sinh',
        pathname: '/dichvu/giai-phap-ve-sinh',
    },
];

export default function MenuMobile({ open, setOpen }: IAppProps) {
    const path = usePathname();
    const { sizeX } = useSize();
    const container = useRef<any>();
    const tl = useRef<any>();
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const router = useRouter();

    useGSAP(
        () => {
            gsap.set('.menu-link-item-hoder', { y: 75 });

            tl.current = gsap
                .timeline({ paused: true })
                .to('.menu-overlay', {
                    duration: 1.25,
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    ease: 'power4.inOut',
                })
                .to('menu-link-item-holder', {
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: 'power4.inOut',
                    delay: -0.75,
                });
        },
        { scope: container },
    );

    useEffect(() => {
        if (open) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [open]);

    const handleSubmit = () => {
        if (searchValue) {
            router.push(`search?q=${searchValue}`);
        }
    };

    return (
        <div
            className={cx('hdm-menu')}
            style={{
                height: open ? '100vh' : '0px',
                overflow: 'hidden',
            }}
            ref={container}
        >
            <div
                className="menu-overlay"
                style={{
                    width: '100%',
                    height: '100%',
                    paddingLeft: sizeX < 500 ? '40px' : '60px',
                    display: 'flex',
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                }}
            >
                {/* Link */}
                <div className={'flex flex-col justify-center'}>
                    <ul className={cx('hdm-link')}>
                        {link.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className="menu-link-item"
                                    style={{
                                        width: '100%',
                                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                                    }}
                                >
                                    <Link
                                        href={item.pathname}
                                        style={{
                                            color: path === item.pathname ? 'var(--primary)' : '',
                                            textDecoration: path === item.pathname ? '2px underline' : '',
                                            textUnderlineOffset: path === item.pathname ? '5px' : '',
                                            fontSize: sizeX < 500 ? '20px' : '',
                                        }}
                                        onClick={() => setOpen(false)}
                                        className="menu-link-item-holder"
                                    >
                                        <h1>{item.title}</h1>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className={cx('hdm-decor')}></div>

                    <div className={cx('hdm-link2')}>
                        {link2.map((item) => {
                            return (
                                <Link
                                    key={item.id}
                                    href={item.pathname}
                                    style={{
                                        color: path === item.pathname ? 'var(--primary)' : '',
                                        textDecoration: path === item.pathname ? '2px underline' : '',
                                        textUnderlineOffset: path === item.pathname ? '5px' : '',
                                        fontSize: sizeX < 500 ? '13.5px' : '',
                                    }}
                                    className="menu-link-item-holder"
                                    onClick={() => setOpen(false)}
                                >
                                    <p>{item.title}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Search */}
                <div
                    className={cx({
                        searchFill: true,
                        searchFillOpen: openSearch,
                        searchFillClose: !openSearch,
                    })}
                    style={{
                        padding: '0px',
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            style={{
                                padding: '20px',
                            }}
                        />
                    </form>
                    <div className={cx('search-btn-fill')} onClick={() => setOpenSearch(false)}>
                        <IconButton>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                </div>

                {/* IMG */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        right: '20px',
                        opacity: 0.2,
                    }}
                >
                    <Image
                        alt="Logo công ty PESTNCLEAN"
                        src={logo2.src}
                        width={sizeX < 600 ? 120 : 140}
                        height={100}
                    />
                </div>

                {/* Contact */}
                <div
                    className={cx('hdm-social')}
                    style={{
                        flexDirection: sizeX < 500 ? 'column' : 'row',
                        gap: sizeX < 500 ? '10px' : '',
                        left: sizeX < 500 ? '35px' : '',
                    }}
                >
                    <Link href="mailto:sales@pestnclean.vn" target="_blank" rel="noopener noreferrer">
                        <AttachEmailOutlinedIcon
                            className="mr-2"
                            sx={{
                                fontSize: sizeX < 500 ? '20px' : '',
                            }}
                        />
                        sales@pestnclean.vn
                    </Link>
                    <Link href="tel:0868363600" target="_blank" rel="noopener noreferrer">
                        <RingVolumeOutlinedIcon
                            className="mr-1"
                            sx={{
                                fontSize: sizeX < 500 ? '20px' : '',
                            }}
                        />{' '}
                        0868 36 36 00
                    </Link>
                </div>

                {/* Close */}
                <IconButton
                    onClick={() => setOpen(false)}
                    sx={{
                        position: 'absolute',
                        top: '20px',
                        left: sizeX < 500 ? '22.5px' : '45px',
                    }}
                >
                    <CloseOutlinedIcon sx={{ fontSize: '30px' }} />
                </IconButton>

                {/* Icon */}
                <div
                    className={'flex items-center justify-center'}
                    style={{
                        gap: '12px',
                        position: 'absolute',
                        top: '30px',
                        right: '30px',
                        color: 'var(--text-black)',
                    }}
                >
                    <SearchOutlinedIcon
                        sx={{
                            position: 'relative',
                            top: '2px',
                        }}
                        className="icon-hover"
                        onClick={() => setOpenSearch(true)}
                    />

                    <Link href="/giohang" className="icon-hover" onClick={() => setOpen(false)}>
                        <ShoppingBagOutlinedIcon />
                    </Link>
                    <Link href="/login" className="icon-hover" onClick={() => setOpen(false)}>
                        <AccountCircleOutlinedIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}