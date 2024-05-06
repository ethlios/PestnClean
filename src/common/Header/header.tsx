'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import logo from '../../../public/img/logo.png';
import styles from './header.module.scss';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Services from './service';
import MoreBtn from './More';
import useScroll from '~/libs/hooks/useScroll';
import { IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { headerMenu } from '~/constants/menu';
import useSize from '~/libs/hooks/useSize';
import { signOut, useSession } from 'next-auth/react';
import Tippy from '@tippyjs/react/headless';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import ShoppingCart from '~/common/Header/ShoppingCart';

const cx = classNames.bind(styles);

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
    const path = usePathname();
    const [scrollToTop, setScrollToTop] = useState<number>(0);
    const [openService, setOpenService] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const router = useRouter();
    const wheel: boolean = useScroll();
    const { sizeX } = useSize();
    const { data: session } = useSession();
    const [openAcc, setOpenAcc] = useState<boolean>(false);

    useEffect(() => {
        const scroll = () => {
            setScrollToTop(window.scrollY);
        };

        window.addEventListener('scroll', scroll);

        return () => window.removeEventListener('scroll', scroll);
    }, []);

    useEffect(() => {
        if (wheel) {
            setOpenSearch(false);
            setOpenAcc(false);
        }
    }, [wheel]);

    const handleSubmit = () => {
        if (searchValue) {
            router.push(`search?q=${searchValue}`);
        }
    };

    return (
        <>
            <Services setOpenService={setOpenService} openService={openService} />
            <MoreBtn />
            <div
                style={{
                    padding:
                        sizeX < 768
                            ? '0 20px'
                            : sizeX < 1100
                              ? '0 50px'
                              : sizeX < 1280
                                ? '0 80px'
                                : '0 100px',
                    backgroundColor: scrollToTop > 0 ? '#fff' : 'transparent',
                    boxShadow: scrollToTop > 0 ? 'rgba(0, 0, 0, 0.2) 0px 5px 15px' : '',
                    opacity: scrollToTop === 0 ? 1 : !wheel ? 1 : 0,
                    height: '70px',
                }}
                className={cx('header')}
            >
                <div
                    className={cx({
                        searchFill: true,
                        searchFillOpen: openSearch,
                        searchFillClose: !openSearch,
                    })}
                >
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </form>
                    <div className={cx('search-btn-fill')} onClick={() => setOpenSearch(false)}>
                        <IconButton>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                </div>
                <Link href={'/'}>
                    <Image alt="Logo công ty PESTNCLEAN" src={logo.src} width={176} height={100} />
                </Link>
                <div className={'flex items-center'}>
                    <ul className={cx('link')}>
                        {headerMenu.map((item) => {
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
                    className={'flex items-center justify-center'}
                    style={{
                        gap: '9px',
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
                    <ShoppingCart />
                    {session ? (
                        <Tippy
                            visible={openAcc}
                            onClickOutside={() => {
                                setOpenAcc(false);
                                // setChangeColor(false);
                            }}
                            appendTo={document.body}
                            interactive
                            placement="auto"
                            offset={[-10, 10]}
                            zIndex={2000}
                            render={(attrs) => (
                                <div tabIndex={-1} {...attrs} className={cx('tippy-box')}>
                                    {session.user.rule === 'admin' ? (
                                        <div onClick={() => setOpenAcc(false)}>
                                            <Link href={'/admin'}>Dashboard</Link>
                                        </div>
                                    ) : (
                                        <div onClick={() => setOpenAcc(false)}>
                                            <Link href={`/profile/${session.user.id}`}>
                                                Quản lý tài khoản
                                            </Link>
                                        </div>
                                    )}
                                    {session.user.rule !== 'admin' && (
                                        <div onClick={() => setOpenAcc(false)}>
                                            <Link href={`/profile/${session.user.id}?q=order`}>
                                                Kiểm tra đơn hàng
                                            </Link>
                                        </div>
                                    )}
                                    <div onClick={() => signOut()}>
                                        <InputOutlinedIcon />
                                        Đăng xuất
                                    </div>
                                </div>
                            )}
                        >
                            <div className={cx('avatar')} onClick={() => setOpenAcc(!openAcc)}>
                                {session.user.image ? (
                                    <Image
                                        src={session.user.image}
                                        alt={'Avatar'}
                                        width={1000}
                                        height={1000}
                                    />
                                ) : (
                                    session.user.name.charAt(0).toUpperCase()
                                )}
                            </div>
                        </Tippy>
                    ) : (
                        <Link href="/login" className="icon-hover">
                            <AccountCircleOutlinedIcon />
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}
