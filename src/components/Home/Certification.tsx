'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import useSize from '~/libs/hooks/useSize';
import Image from 'next/image';
import { ImageZoom } from '../Orther/Zoom';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const cx = classNames.bind(styles);

const certi = [
    {
        id: 1,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716427279/cn11.png',
    },
    {
        id: 2,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716427278/cn10.png',
    },
    {
        id: 3,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716427275/cn9.png',
    },
    {
        id: 4,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716427275/cn8.png',
    },
    {
        id: 5,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716427273/cn7.png',
    },
    {
        id: 6,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716427271/cn6.png',
    },
    {
        id: 7,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716427270/cn4.png',
    },
    {
        id: 8,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716427268/cn2.png',
    },
    {
        id: 9,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716427267/cn.png',
    },
    {
        id: 10,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716427267/cn1.png',
    },
];

export interface IAppProps {}

export default function Certification(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={cx('certi-wrapper')}>
            <h1
                className={
                    'pb-5 text-center font-bold underline underline-offset-2 text-2xl uppercase decoration-2'
                }
                style={{
                    fontSize: sizeX < 550 ? '18px' : '24px',
                    marginBottom: sizeX < 500 ? '10px' : '20px',
                }}
            >
                Giải thưởng và chứng nhận
            </h1>
            {/* <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: sizeX < 500 ? '10px' : '30px',
                }}
            >
                {certi.map((item, index) => {
                    return (
                        <ImageZoom
                            src={item.src}
                            alt="Hinh anh chung nhan cua Pestnclean"
                            key={index}
                            // className={cx('certi-item')}
                            width={1000}
                            height={1000}
                            hello={{
                                width: 'calc(100% / 3)',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                            options={{
                                background: '#2f292f',
                            }}
                        ></ImageZoom>
                    );
                })}
            </div> */}
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                slidesPerView={sizeX < 500 ? 1 : sizeX < 700 ? 2 : 3}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                spaceBetween={15}
            >
                {certi.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={cx('img-item')} style={{ height: '100%' }}>
                                <ImageZoom
                                    src={item.src}
                                    alt="Hình ảnh làm việc của Pestnclean"
                                    width={1000}
                                    height={1000}
                                    className={cx('certi-item')}
                                    options={{
                                        background: '#2f292f',
                                    }}
                                    hello={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                ></ImageZoom>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
