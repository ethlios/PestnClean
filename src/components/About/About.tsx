'use client';

import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './about.module.scss';
import Image from 'next/image';
import AboutBanner from './Banner';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const cx = classNames.bind(styles);

gsap.registerPlugin(ScrollTrigger);

export interface IAppProps {
}

export default function AboutCPPage(props: IAppProps) {
    useEffect(() => {
        const sectionColor = document.querySelectorAll('section[data-bgcolor]');
        sectionColor.forEach((section, i) => {
            const prevBgColor = i === 0 ? '' : sectionColor[i - 1].getAttribute('data-bgcolor');

            ScrollTrigger.create({
                trigger: section,
                scroller: 'body',
                start: 'top 50%',
                onEnter: () => {
                    gsap.to('body', {
                        backgroundColor: `${section.getAttribute('data-bgcolor')}`,
                        overwrite: 'auto',
                    });
                },
                onLeaveBack: () => {
                    gsap.to('body', {
                        backgroundColor: `${prevBgColor}`,
                        overwrite: 'auto',
                    });
                },
            });
        });

    }, []);

    return (
        <div className={'container'}>
            <section data-bgcolor={'#c5ebcf'}>
                {/*Header title*/}
                <div className={'grid grid-cols-2 mt-20 my-10'}>
                    <div className={'col-span-2 md:col-span-1'}>
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
                        <p className={`${cx('text-common')} text-right`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </section>
            <section data-bgcolor={'#c5e9eb'}>
                {/*Company Scope*/}
                {/*1st scope*/}
                <div className={'grid grid-cols-12 gap-6 my-10'}>
                    <div className={'col-span-12 md:col-span-5'}>
                        <div className={'mb-5'}>
                            <Image
                                src={''}
                                alt="giới thiệu pestnclean"
                                key="pestnclean about page "
                                width={1980}
                                className={'w-full bg-gray-200 h-auto md:h-96'}
                            />
                        </div>
                        <h2 className={cx('title')}>1. TẦM NHÌN</h2>
                        <p className={cx('text-common')}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    {/*2nd scope*/}
                    <div className={'col-span-12 md:col-span-7'}>
                        <div className={'mb-5'}>
                            <Image
                                src={''}
                                alt="giới thiệu pestnclean"
                                key="pestnclean about page "
                                width={1980}
                                className={'w-full bg-gray-200 h-auto md:h-96'}
                            />
                        </div>
                        <h2 className={cx('title')}>2. SỨ MỆNH</h2>
                        <p className={cx('text-common')}>
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
                            <div className={'mb-5'}>
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
            </section>
        </div>
    );
}
