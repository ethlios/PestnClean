'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import Slider from 'react-slick';
import { productBanner } from '~/constants/banner';
import useSize from '~/libs/hooks/useSize';

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
    const { sizeX } = useSize();

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {productBanner.map((item, index) => {
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
