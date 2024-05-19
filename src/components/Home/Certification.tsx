'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import useSize from '~/libs/hooks/useSize';
import Image from 'next/image';
import { ImageZoom } from '../Orther/Zoom';

const cx = classNames.bind(styles);

const certi = [
    {
        id: 1,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716108276/z5455549697986_00688594b88681be9baa6b86a5483aa5_dd9tit.jpg',
    },
    {
        id: 2,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716108265/z5455549697928_cb6f1ff6074be72de57aaf039413ecd8_yhiwob.jpg',
    },
    {
        id: 3,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1716108246/z5455549785603_6aa41394e9efc2cf8e9e040c0f680f08_tgu3uz.jpg',
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
                    marginBottom: '20px',
                }}
            >
                Giải thưởng và chứng nhận
            </h1>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '30px',
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
            </div>
        </div>
    );
}
