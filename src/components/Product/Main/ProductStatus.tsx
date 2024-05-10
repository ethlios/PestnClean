'use client';

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
import ProductItem from './ProductItem';

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
                {products.length === 0 ? (
                    <div className={'w-full text-center'}>Không tìm thấy sản phẩm</div>
                ) : products.length > 3 ? (
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
                            return (
                                <SwiperSlide key={item.id}>
                                    <ProductItem item={item} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                ) : (
                    <div className={'flex gap-2 w-full *:w-1/3'}>
                        {products.map((item: any) => {
                            return <ProductItem item={item} key={item.id} />;
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
