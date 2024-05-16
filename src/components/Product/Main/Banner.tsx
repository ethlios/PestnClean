'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import Slider from 'react-slick';
import { productBanner } from '~/constants/banner';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {}

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
                {productBanner.map((item, index) => {
                    return (
                        <div key={index} className={cx('img-fix-size')}>
                            <Image src={item.img} alt={item.alt} width={1980} height={1000} />
                            {/*{index + 1}*/}
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
