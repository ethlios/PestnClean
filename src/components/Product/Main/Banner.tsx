'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';
import banner1 from '../../../../public/img/banner 1.jpg';

const cx = classNames.bind(styles);

export interface IAppProps {}

const bannerImg = [
    {
        id: 1,
        img: '',
        alt: '',
    },
    {
        id: 2,
        img: '',
        alt: '',
    },
    {
        id: 3,
        img: '',
        alt: '',
    },
];

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
};

export default function BannerProduct(props: IAppProps) {
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {bannerImg.map((item, index) => {
                    return (
                        <div key={index} className={cx('img-fix-size')}>
                            {/* <Image src={banner1.src} alt={item.alt} width={1980} height={1000} /> */}
                            {index + 1}
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
