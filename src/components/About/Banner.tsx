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
import useSize from '~/libs/hooks/useSize';

gsap.registerPlugin(ScrollTrigger);

const cx = classNames.bind(styles);

export interface IAppProps {}

function SampleNextArrow(props: any) {
    const btnAboutRef = useRef<any>();
    const { sizeX } = useSize();

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
        <div
            className={cx('banner-arrow')}
            onClick={onClick}
            ref={btnAboutRef}
            style={{
                width: sizeX < 768 ? '60px' : '',
                height: sizeX < 768 ? '60px' : '',
                right: sizeX < 768 ? '25px' : '',
                top: sizeX < 768 ? '-40px' : '',
            }}
        >
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
    const { sizeX } = useSize();

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
                            <div
                                key={index}
                                className={`${cx('img-fix-size')} banner-about`}
                                style={{
                                    height: '380px',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    src={item.link}
                                    alt="giới thiệu pestnclean"
                                    width={1980}
                                    className={'w-full bg-gray-200 h-auto md:h-96'}
                                    height={1000}
                                    style={{
                                        height: sizeX < 768 ? '300px' : '380px',
                                        width: '100%',
                                    }}
                                />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}
