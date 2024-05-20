'use client';

import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';
import Image from 'next/image';
import smoothScroll from '~/libs/orthers/smoothScroll';
import useScroll from '~/libs/hooks/useScroll';
import Slider from 'react-slick';
import useSize from '~/libs/hooks/useSize';
import { useEffect, useState } from 'react';
import { ImageZoom } from '~/components/Orther/Zoom';

const cx = classNames.bind(styles);

export interface IAppProps {
    product: any[];
}

export default function ProductImage({ product }: IAppProps) {
    const wheel: boolean = useScroll();
    const { sizeX } = useSize();
    const [currentImg, setCurrentImg] = useState<number>(0);
    const [imgEffect, setImgEffect] = useState<number>(-1);
    const imgLists = product[0].Image || ['', '', ''];

    return (
        <div
            className={cx('product-img')}
            style={{
                flexDirection: sizeX < 950 ? 'column-reverse' : 'row',
                width: sizeX < 768 ? '100%' : sizeX < 950 ? '45%' : sizeX < 1300 ? '57%' : '50%',
                position: sizeX < 768 ? 'inherit' : sizeX < 950 ? 'sticky' : 'static',
                top: sizeX < 768 ? '0px' : sizeX < 950 && !wheel ? '70px' : sizeX < 950 ? '0px' : '',
                zIndex: sizeX < 950 ? 1 : '',
                transition: 'all ease .5s',
            }}
        >
            <div
                className={cx('thumbnail')}
                style={{
                    top: wheel ? '0px' : '70px',
                    flexDirection: sizeX < 950 ? 'row' : 'column',
                    width: sizeX < 950 ? '100%' : '',
                }}
            >
                {imgLists.map((img: string, index: number) => {
                    return (
                        <Image
                            key={index}
                            src={img}
                            alt={''}
                            width={150}
                            height={150}
                            className={'bg-gray-200'}
                            onClick={() => {
                                sizeX < 950 ? setCurrentImg(index) : smoothScroll(`#img-${index + 1}`);
                                sizeX < 950
                                    ? setTimeout(() => {
                                          setImgEffect(index);
                                      }, 500)
                                    : '';
                            }}
                            style={{
                                width: sizeX < 450 ? '60px' : sizeX < 950 ? '70px' : '',
                                height: sizeX < 450 ? '60px' : sizeX < 950 ? '70px' : '',
                            }}
                        />
                    );
                })}
            </div>
            {sizeX < 950 ? (
                <Image
                    src={imgLists[currentImg]}
                    alt={`${currentImg}`}
                    width={1000}
                    height={1000}
                    className={`${currentImg !== imgEffect ? 'cpmount' : ''} bg-gray-200`}
                    style={{
                        maxHeight: '510px',
                    }}
                />
            ) : (
                <div className={cx('img')}>
                    {imgLists.map((img: string, index: number) => {
                        return (
                            <ImageZoom
                                key={index}
                                src={img}
                                alt={`${index}`}
                                width={1000}
                                height={1000}
                                className={'bg-gray-200'}
                                id={`img-${index + 1}`}
                                options={{
                                    background: '#2f292f',
                                }}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
