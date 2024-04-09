'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import banner1 from '../../../public/img/banner 1.jpg';
import banner2 from '../../../public/img/banner 2.jpg';
import banner3 from '../../../public/img/banner 3.jpg';
import classNames from 'classnames/bind';
import styles from './banner.module.scss';
import { Button } from '@mui/material';
const cx = classNames.bind(styles);

export interface IAppProps {}

const imgList = [
    {
        id: 1,
        src: banner1.src,
        alt: 'Dịch vụ kiểm soát côn trùng của PESTNCLEAN',
        color: 'var(--primary)',
    },
    {
        id: 2,
        src: banner2.src,
        alt: 'Dịch vụ vệ sinh côn trùng của PESTNCLEAN',
        color: 'var(--secondary)',
    },
    {
        id: 3,
        src: banner3.src,
        alt: 'Giải pháp vệ sinh của PESTNCLEAN',
        color: 'var(--secondary-dark)',
    },
];

export default function BannerHomePage(props: IAppProps) {
    const [imgIndex, setImgIndex] = useState<number>(3);

    return (
        <div
            style={{
                position: 'absolute',
                top: '0',
                height: '580px',
                width: '100vw',

                display: 'flex',
                flex: 1,
                flexWrap: 'nowrap',
                alignItems: ' center',
            }}
        >
            {imgList.map((img, index) => {
                return (
                    <div
                        key={img.id}
                        style={{
                            display: 'flex',
                            flexGrow: 1,
                            flexBasis: '1px',
                            width: 'calc(100vw / 3)',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            height: '100%',
                            backgroundColor: `${img.color}`,
                            cursor: 'pointer',
                        }}
                        onMouseOver={() => setImgIndex(index)}
                        onMouseOut={() => setImgIndex(3)}
                        className={cx({
                            imgHover: imgIndex === index,
                        })}
                    >
                        {imgIndex === index && (
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={1000}
                                height={1000}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                                className="cpmount"
                            ></Image>
                        )}
                    </div>
                );
            })}
            <div
                style={{
                    position: 'absolute',
                    left:
                        imgIndex === 0
                            ? '100px'
                            : imgIndex === 1
                            ? '300px'
                            : imgIndex === 2
                            ? '550px'
                            : '100px',
                    transition: 'all ease .5s',
                    // color: imgIndex === 0 ? '#fff' : '',
                }}
                onMouseOver={() => setImgIndex(imgIndex)}
            >
                {imgIndex === 3 ? (
                    <h1
                        style={{
                            fontSize: '32px',
                            fontWeight: '600',
                        }}
                    >
                        NÂNG CAO CHẤT LƯỢNG <br /> CUỘC SỐNG
                    </h1>
                ) : (
                    <h1
                        style={{
                            fontSize: '32px',
                            fontWeight: '600',
                        }}
                    >
                        {imgIndex === 0
                            ? 'KIỂM SOÁT CÔN TRÙNG'
                            : imgIndex === 1
                            ? 'DỊCH VỤ VỆ SINH'
                            : imgIndex === 2
                            ? 'GIẢI PHÁP VỆ SINH'
                            : ''}
                    </h1>
                )}
                <p
                    style={{
                        width: '450px',
                        fontSize: '14px',
                        fontWeight: '500',
                    }}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                </p>
                {imgIndex !== 3 && (
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: 'var(--primary)',
                            marginTop: '15px',
                        }}
                        className="opacity"
                    >
                        XEM DỊCH VỤ
                    </Button>
                )}
            </div>
        </div>
    );
}
