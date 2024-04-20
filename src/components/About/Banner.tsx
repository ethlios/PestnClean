'use client';

import EastIcon from '@mui/icons-material/East';
import { IconButton } from '@mui/material';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Slider from 'react-slick';
import { aboutBanner } from '~/constants/banner';
import styles from './about.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cx = classNames.bind(styles);

export interface IAppProps {}

function SampleNextArrow(props: any) {
    const btnAboutRef = useRef<any>();

    const { className, style, onClick, cb } = props;

    useEffect(() => {
        gsap.fromTo(
            btnAboutRef.current,
            { x: 2000, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
            },
        );
    }, []);

    return (
        <div className={cx('banner-arrow')} onClick={onClick} ref={btnAboutRef}>
            <IconButton
                style={{
                    width: '100%',
                    height: '100%',
                    color: '#000',
                }}
            >
                <EastIcon />
            </IconButton>
        </div>
    );
}

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
    nextArrow: <SampleNextArrow />,
};

export default function AboutBanner(props: IAppProps) {
    useEffect(() => {
        gsap.fromTo(
            '.banner-about',
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
            },
        );
    }, []);

    return (
        <div className={`${cx('about-banner')} mt-16 `}>
            <div className="slider-container">
                <Slider {...settings}>
                    {aboutBanner.map((item, index) => {
                        return (
                            <div key={index} className={`${cx('img-fix-size')} banner-about`}>
                                <Image
                                    src={item.link}
                                    alt="giới thiệu pestnclean"
                                    width={1980}
                                    className={'w-full bg-gray-200 h-auto md:h-96'}
                                    height={1000}
                                />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}
