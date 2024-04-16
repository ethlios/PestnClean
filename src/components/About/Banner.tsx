'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './about.module.scss';
import EastIcon from '@mui/icons-material/East';
import { aboutBanner } from '~/constants/banner';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AboutBanner(props: IAppProps) {
    const [currentImg, setCurrentImg] = useState<number>(0);

    const handlePlusImg = () => {
        if (currentImg < 2) {
            setCurrentImg(currentImg + 1);
        } else {
            setCurrentImg(0);
        }
    };

    return (
        <div className={`${cx('about-banner')} my-10 `}>
            <Image
                src={aboutBanner[currentImg].link}
                alt="giới thiệu pestnclean"
                key="pestnclean about page "
                width={1980}
                className={'w-full bg-gray-200 h-auto md:h-96'}
                height={1000}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
            <div className={cx('banner-arrow')} onClick={handlePlusImg}>
                <EastIcon />
            </div>
        </div>
    );
}
