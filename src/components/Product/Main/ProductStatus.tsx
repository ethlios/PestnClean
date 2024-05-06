'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import Link from 'next/link';
import useSize from '~/libs/hooks/useSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import formatter from '~/libs/orthers/formatMoney';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Image from 'next/image';
import { width } from '@mui/system';

const cx = classNames.bind(styles);

export interface IAppProps {
    openFilter: boolean;
    products: any;
    status: string;
}

export default function ProductStatus({ openFilter, products, status }: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={cx('product-event')}>
            <h1>{status}</h1>
            <div className={cx('horizontal-decor')}></div>
            <div className={cx('product-item')}>
                {products.length > 3 ? (
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
                        {products.map((item: any) => {
                            const path = nameToLink(item ? item.title : '');

                            return (
                                <SwiperSlide key={item.id}>
                                    <Link
                                        href={`/sanpham/${path}`}
                                        key={item.id}
                                        className={cx('content-item')}
                                    >
                                        <div
                                            className={cx('item-img')}
                                            style={{
                                                height: sizeX < 430 ? '160px' : '',
                                            }}
                                        >
                                            {item.status === 'SALE' && (
                                                <div className={cx('item-event-sale')}>
                                                    <p>14%</p>
                                                </div>
                                            )}
                                            {item.status === 'HOT' && (
                                                <div className={cx('item-event-hot')}>
                                                    <p>Hot</p>
                                                </div>
                                            )}
                                            <Image
                                                src={item.Image[0]}
                                                alt={item.title}
                                                width={160}
                                                height={160}
                                                className={'h-full w-full object-cover'}
                                            />
                                        </div>
                                        <p
                                            className={cx('item-category')}
                                            style={{
                                                fontSize: sizeX < 400 ? '10.5px' : '',
                                            }}
                                        >
                                            {item.category || 'SẢN PHẨM GIẢI PHÁP VỆ SINH'}
                                        </p>
                                        <p className={cx('item-name')}>{item.title}</p>
                                        {item.status === 'SALE' && (
                                            <>
                                                <p className={cx('item-sale-price')}>
                                                    {formatter.format(+item.price)}
                                                </p>
                                                <p className={cx('item-sale')}>
                                                    {formatter.format(+item.priceSales)}
                                                </p>
                                            </>
                                        )}
                                        {item.status === 'HOT' && (
                                            <p className={cx('item-price')}>
                                                {formatter.format(+item.price)}
                                            </p>
                                        )}
                                    </Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                ) : (
                    products.map((item: any) => {
                        const path = nameToLink(item ? item.title : '');

                        return (
                            <Link href={`/sanpham/${path}`} key={item.id} className={cx('content-item2')}>
                                <div
                                    className={cx('item-img')}
                                    style={{
                                        height: sizeX < 430 ? '160px' : '',
                                    }}
                                >
                                    {item.status === 'SALE' && (
                                        <div className={cx('item-event-sale')}>
                                            <p>14%</p>
                                        </div>
                                    )}
                                    {item.status === 'HOT' && (
                                        <div className={cx('item-event-hot')}>
                                            <p>Hot</p>
                                        </div>
                                    )}
                                    <Image
                                        src={item.Image[0]}
                                        alt={item.title}
                                        width={160}
                                        height={160}
                                        className={'h-full w-full object-cover'}
                                    />
                                </div>
                                <p
                                    className={cx('item-category')}
                                    style={{
                                        fontSize: sizeX < 400 ? '10.5px' : '',
                                    }}
                                >
                                    {item.category || 'SẢN PHẨM GIẢI PHÁP VỆ SINH'}
                                </p>
                                <p className={cx('item-name')}>{item.title}</p>
                                {item.status === 'SALE' && (
                                    <>
                                        <p className={cx('item-sale-price')}>
                                            {formatter.format(+item.price)}
                                        </p>
                                        <p className={cx('item-sale')}>
                                            {formatter.format(+item.priceSales)}
                                        </p>
                                    </>
                                )}
                                {item.status === 'HOT' && (
                                    <p className={cx('item-price')}>{formatter.format(+item.price)}</p>
                                )}
                            </Link>
                        );
                    })
                )}
            </div>
        </div>
    );
}
