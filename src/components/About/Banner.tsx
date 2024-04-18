'use client';

import EastIcon from '@mui/icons-material/East';
import { IconButton } from '@mui/material';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Slider from 'react-slick';
import { aboutBanner } from '~/constants/banner';
import styles from './about.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

function SampleNextArrow(props: any) {
    const { className, style, onClick, cb } = props;
    return (
        <div className={cx('banner-arrow')} onClick={onClick}>
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
    return (
        <div className={`${cx('about-banner')} my-10 `}>
            <div className="slider-container">
                <Slider {...settings}>
                    {aboutBanner.map((item, index) => {
                        return (
                            <div key={index} className={cx('img-fix-size')}>
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
