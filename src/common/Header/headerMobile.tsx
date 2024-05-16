'use client';

import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import useScroll from '~/libs/hooks/useScroll';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/img/logo.png';
import useSize from '~/libs/hooks/useSize';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import MenuMobile from './MenuMobile';
import MoreBtn from './More';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function HeaderMobile(props: IAppProps) {
    const wheel: boolean = useScroll();
    const [scrollToTop, setScrollToTop] = useState<number>(0);
    const { sizeX } = useSize();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    useEffect(() => {
        const scroll = () => {
            setScrollToTop(window.scrollY);
        };

        window.addEventListener('scroll', scroll);

        return () => window.removeEventListener('scroll', scroll);
    }, []);

    return (
        <>
            <MoreBtn />
            <div
                className={cx('hdm-wrapper')}
                style={{
                    backgroundColor: scrollToTop > 0 ? '#fff' : 'transparent',
                    boxShadow: scrollToTop > 0 ? 'rgba(0, 0, 0, 0.2) 0px 5px 15px' : '',
                    opacity: scrollToTop === 0 ? 1 : !wheel ? 1 : 0,
                }}
            >
                <div
                    style={{
                        width: '100%',
                        paddingLeft: '10px',
                    }}
                >
                    <IconButton className={cx('hdm-bar')} onClick={() => setOpenMenu(true)}>
                        <MenuOutlinedIcon />
                    </IconButton>
                </div>

                <Link
                    href={'/'}
                    style={{
                        position: 'absolute',
                    }}
                >
                    <Image
                        alt="Logo công ty PESTNCLEAN"
                        src={logo.src}
                        width={sizeX < 600 ? 150 : 176}
                        height={100}
                        priority
                    />
                </Link>
            </div>

            <MenuMobile open={openMenu} setOpen={setOpenMenu} />
        </>
    );
}
