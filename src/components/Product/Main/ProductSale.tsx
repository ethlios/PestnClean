'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import Link from 'next/link';
import useSize from '~/libs/hooks/useSize';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const cx = classNames.bind(styles);

export interface IAppProps {
    openFilter: boolean;
}

export default function ProductSale({ openFilter }: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={cx('product-event')}>
            <h1>Đang giảm giá</h1>
            <div className={cx('horizontal-decor')}></div>
            <div className={cx('product-item')}>
                <Swiper
                    slidesPerView={sizeX < 740 ? 2 : sizeX < 1024 ? 3 : !openFilter ? 4 : 3}
                    spaceBetween={sizeX < 768 ? 10 : sizeX < 1024 ? 20 : 30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay]}
                    style={{ padding: '0 3.2px 0 0' }}
                >
                    {Array.from({ length: 6 }).map((_, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Link href="/sanpham/detail" className={cx('content-item')}>
                                    <div
                                        className={cx('item-img')}
                                        style={{
                                            height: sizeX < 430 ? '160px' : '',
                                        }}
                                    >
                                        <div className={cx('item-event-sale')}>
                                            <p>14%</p>
                                        </div>
                                    </div>
                                    <p
                                        className={cx('item-category')}
                                        style={{
                                            fontSize: sizeX < 400 ? '10.5px' : '',
                                        }}
                                    >
                                        SẢN PHẨM GIẢI PHÁP VỆ SINH
                                    </p>
                                    <p className={cx('item-name')}>Tinh dầu Chanh Viet Oils</p>
                                    <p className={cx('item-sale-price')}>
                                        1.100.000 <u>đ</u>
                                    </p>
                                    <p className={cx('item-sale')}>
                                        1.000.000 <u>đ</u>
                                    </p>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}
