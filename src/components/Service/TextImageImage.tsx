'use client';

import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './service.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { slideFromX } from '~/libs/orthers/animation';
import useSize from '~/libs/hooks/useSize';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function TextImageImage(props: IAppProps) {
    const { sizeX } = useSize();
    const pathname = usePathname();
    const imageLeft = useRef<any>();
    const imageRight = useRef<any>();

    useEffect(() => {
        gsap.fromTo(
            imageLeft.current,
            slideFromX(imageLeft.current, -500)[0],
            slideFromX(imageLeft.current, -500)[1],
        );
        gsap.fromTo(
            imageRight.current,
            slideFromX(imageRight.current, 2000)[0],
            slideFromX(imageRight.current, 2000)[1],
        );
    }, []);

    return (
        <div className="my-10">
            <div className={'grid grid-cols-2 gap-8'}>
                <div
                    className={'col-span-2 md:col-span-1 shadow-lg'}
                    style={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                    }}
                    ref={imageLeft}
                >
                    <Image
                        src={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713844619/xyzcharlize-7b49gfsgQZY-unsplash_pjjzlf.jpg'
                                : 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713879102/2150700358_1_tzqpqe.jpg'
                        }
                        alt={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? 'Vệ sinh công nghiệp tại Pestnclean'
                                : 'Giải pháp vệ sinh tại Pestnclean'
                        }
                        width={500}
                        height={300}
                        style={{
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            height: sizeX < 768 ? '250px' : '',
                        }}
                        draggable={false}
                    />
                    <Link
                        href={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? '/dich-vu-ve-sinh-cong-nghiep'
                                : '/giai-phap-ve-sinh-pestnclean-hieu-qua'
                        }
                    >
                        <p className={cx('bg-text')}>
                            {pathname === '/dichvu/dich-vu-ve-sinh'
                                ? 'Vệ sinh công nghiệp'
                                : 'Giải pháp vệ sinh'}
                        </p>
                    </Link>
                </div>
                <div
                    className={'col-span-2 md:col-span-1 shadow-lg'}
                    style={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                    }}
                    ref={imageRight}
                >
                    <Image
                        src={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713844611/naomi-hebert-MP0bgaS_d1c-unsplash_qcp4ej.jpg'
                                : 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713879088/still-life-with-aroma-diffuser-humidify-air-interior-decor-details-scandinavian-style_qgnsf1.jpg'
                        }
                        alt={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? 'Vệ sinh nhà ở tại Pestnclean'
                                : 'Giải pháp mùi hương tại Pestnclean'
                        }
                        width={500}
                        height={300}
                        style={{
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            height: sizeX < 768 ? '250px' : '',
                        }}
                        draggable={false}
                    />
                    <Link
                        href={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? '/dich-vu-ve-sinh-nha-o'
                                : '/giai-phap-mui-huong-cho-doanh-nghiep'
                        }
                    >
                        <p className={cx('bg-text')}>
                            {pathname === '/dichvu/dich-vu-ve-sinh' ? 'Vệ sinh nhà ở' : 'Giải pháp mùi hương'}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
