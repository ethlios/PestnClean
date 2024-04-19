'use client';

import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './about.module.scss';
import Image from 'next/image';
import AboutBanner from './Banner';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { opacity } from 'html2canvas/dist/types/css/property-descriptors/opacity';

const cx = classNames.bind(styles);

gsap.registerPlugin(ScrollTrigger);

export interface IAppProps {}

const animation = (x?: number) => {
    return [
        {
            x: x,
            display: 'none',
            opacity: 0,
            skewX: '65px',
        },
        {
            x: 0,
            opacity: 1,
            display: 'flex',
            duration: 1.2,
            skewX: '0px',
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.des-about-2',
                start: 'top bottom-=100',
                toggleActions: 'restart none none reverse',
            },
        },
    ];
};

const animation2 = (trigger: any) => {
    return [
        {
            scale: 0,
            opacity: 0,
        },
        {
            scale: 1,
            opacity: 1,
            ease: 'power3.out',
            duration: 1.2,
            scrollTrigger: {
                trigger: trigger,
                start: 'top bottom-=500px',
                toggleActions: 'restart none none reverse',
            },
        },
    ];
};

export default function AboutCPPage(props: IAppProps) {
    const titleRef = useRef<any>();
    const about1Ref = useRef<any>();
    const about2Ref = useRef<any>();
    const about1DesRef = useRef<any>();
    const about2DesRef = useRef<any>();

    useEffect(() => {
        const tl = titleRef.current;

        gsap.fromTo('.des-about-2', animation(2000)[0], animation()[1]);
        gsap.fromTo(about1Ref.current, animation(-500)[0], animation()[1]);
        gsap.fromTo(about2Ref.current, animation(2000)[0], animation()[1]);
        gsap.fromTo(
            about1DesRef.current,
            animation2(about1DesRef.current)[0],
            animation2(about1DesRef.current)[1],
        );
        gsap.fromTo(
            about2DesRef.current,
            animation2(about2DesRef.current)[0],
            animation2(about2DesRef.current)[1],
        );

        gsap.fromTo(
            tl,
            {
                x: -400,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
            },
        );

        gsap.fromTo(
            '.card-about',
            {
                opacity: 0,
                scale: 0.1,
            },
            {
                opacity: 1,
                scale: 1,
                durations: 0.8,
                delay: 0.3,
                stagger: {
                    amount: 1,
                },
                scrollTrigger: {
                    trigger: '.card-about',
                    start: 'top bottom-=300px',
                    toggleActions: 'restart none none reverse',
                },
            },
        );
    }, []);

    return (
        <div className={'container cpmount'}>
            {/*Header title*/}
            <div className={'grid grid-cols-2 mt-20 my-10'}>
                <div className={'col-span-2 md:col-span-1'} ref={titleRef}>
                    <h1 className={cx('head-title')}>
                        HỆ SINH THÁI GIẢI PHÁP VỆ SINH VÀ KIỂM SOÁT CÔN TRÙNG TOÀN DIỆN
                    </h1>
                    <p className={cx('text-common')}>
                        Đến với PestnClean, bạn sẽ được cung cấp dịch vụ vệ sinh và kiểm soát côn trùng uy tín
                        hàng đầu Việt Nam. <br />
                        <br /> Được sáng lập bởi ông Nguyễn Thanh Duy – Người với nhiều năm kinh nghiệm trong
                        lĩnh vực. PestnClean hiểu rõ những nỗi lo lắng, các vấn đề mà những người điều hành
                        các Hotels & Resorts, F&B Retail và Nhà máy gặp phải và những thách thức để xử lý
                        chúng.
                    </p>
                </div>
            </div>
            {/*Banner*/}
            <AboutBanner />

            {/*Text align right*/}
            <div className={'grid grid-cols-2 my-10'}>
                <div className={'col-span-2 md:col-start-2 md:col-span-1'}>
                    <p className={`${cx('text-common')} text-right des-about-2`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            {/*Company Scope*/}
            {/*1st scope*/}
            <div className={'grid grid-cols-12 gap-6 my-10'}>
                <div className={'col-span-12 md:col-span-5'}>
                    <div className={'mb-5'} ref={about1Ref}>
                        <Image
                            src={''}
                            alt="giới thiệu pestnclean"
                            key="pestnclean about page "
                            width={1980}
                            className={'w-full bg-gray-200 h-auto md:h-96'}
                        />
                    </div>
                    <h2 className={cx('title')}>1. TẦM NHÌN</h2>
                    <p className={cx('text-common')} ref={about1DesRef}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                    </p>
                </div>
                {/*2nd scope*/}
                <div className={'col-span-12 md:col-span-7'}>
                    <div className={'mb-5'} ref={about2Ref}>
                        <Image
                            src={''}
                            alt="giới thiệu pestnclean"
                            key="pestnclean about page "
                            width={1980}
                            className={'w-full bg-gray-200 h-auto md:h-96'}
                        />
                    </div>
                    <h2 className={cx('title')}>2. SỨ MỆNH</h2>
                    <p className={cx('text-common')} ref={about2DesRef}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            {/*3rd scope*/}
            <div className={'grid grid-cols-4 mt-20'}>
                <div className={'col-span-4 md:col-start-2 md:col-span-2 text-center'}>
                    <h2 className={cx('title') + ' mb-0'}>3. GIÁ TRỊ CỐT LÕI</h2>
                    {/* <p className={cx('text-common-plus')}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p> */}
                </div>
            </div>
            {/*Core values*/}
            <div className={'grid grid-cols-4 gap-6 my-5'}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className={'col-span-4 md:col-span-2 xl:col-span-1'}>
                        <div className={'mb-5 card-about'}>
                            <Image
                                src={''}
                                alt="giới thiệu pestnclean"
                                key="pestnclean about page "
                                width={1980}
                                className={`${cx('img')} w-full bg-gray-200 h-10 md:h-80`}
                            />
                        </div>
                        <p className={`${cx('text-common')} text-center`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
