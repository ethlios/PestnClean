'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
    openFilter: boolean;
}

export default function CategoryIconProduct({ openFilter }: IAppProps) {
    const { sizeX } = useSize();

    return (
        <Swiper
            slidesPerView={sizeX < 500 ? 2 : sizeX < 768 ? 3 : sizeX < 1024 ? 4 : !openFilter ? 5 : 4}
            spaceBetween={sizeX < 768 ? 10 : sizeX < 1024 ? 20 : 20}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            style={{ padding: '0 3.2px 0 0' }}
            className={cx('category-icon')}
        >
            <SwiperSlide className={cx('product-icon-wrapper')}>
                <div className={cx('product-icon')}></div>
                <p>DUNG DỊCH HOÁ CHẤT</p>
            </SwiperSlide>{' '}
            <SwiperSlide className={cx('product-icon-wrapper')}>
                <div className={cx('product-icon')}></div>
                <p>DUNG DỊCH HOÁ CHẤT</p>
            </SwiperSlide>{' '}
            <SwiperSlide className={cx('product-icon-wrapper')}>
                <div className={cx('product-icon')}></div>
                <p>DUNG DỊCH HOÁ CHẤT</p>
            </SwiperSlide>{' '}
            <SwiperSlide className={cx('product-icon-wrapper')}>
                <div className={cx('product-icon')}></div>
                <p>DUNG DỊCH HOÁ CHẤT</p>
            </SwiperSlide>{' '}
            <SwiperSlide className={cx('product-icon-wrapper')}>
                <div className={cx('product-icon')}></div>
                <p>DUNG DỊCH HOÁ CHẤT</p>
            </SwiperSlide>
        </Swiper>
    );
}
