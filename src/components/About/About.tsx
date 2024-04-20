'use client';

import classNames from 'classnames/bind';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import AboutBanner from './Banner';
import styles from './about.module.scss';
import { animation, animation2 } from '~/libs/orthers/animation';
import Content3 from './Content3';

const cx = classNames.bind(styles);

gsap.registerPlugin(ScrollTrigger);

export interface IAppProps {}

export default function AboutCPPage(props: IAppProps) {
    const titleRef = useRef<any>();
    const about1Ref = useRef<any>();
    const about2Ref = useRef<any>();
    const imgAbout1 = useRef<any>();
    const imgAbout2 = useRef<any>();
    const textAbout1 = useRef<any>();
    const textAbout2 = useRef<any>();
    const videoRef = useRef<any>();

    useEffect(() => {
        const tl = titleRef.current;

        gsap.fromTo(
            imgAbout1.current,
            animation(imgAbout1.current, -500)[0],
            animation(imgAbout1.current, -500)[1],
        );
        gsap.fromTo(
            textAbout2.current,
            animation(textAbout2.current, -500)[0],
            animation(textAbout2.current, -500)[1],
        );
        gsap.fromTo(
            textAbout1.current,
            animation(textAbout1.current, 2000)[0],
            animation(textAbout1.current, 2000)[1],
        );
        gsap.fromTo(
            imgAbout2.current,
            animation(imgAbout2.current, 2000)[0],
            animation(imgAbout2.current, 2000)[1],
        );
        gsap.fromTo(about1Ref.current, animation(-500)[0], animation()[1]);
        gsap.fromTo(about2Ref.current, animation(2000)[0], animation()[1]);

        gsap.fromTo(videoRef.current, animation2(videoRef.current)[0], animation2(videoRef.current)[1]);

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
    }, []);

    return (
        <div
            className={'container cpmount'}
            style={{
                overflowX: 'hidden',
            }}
        >
            <AboutBanner />

            {/*Header title*/}
            <div className={'my-14'}>
                <div className={''} ref={titleRef}>
                    <h1
                        className={cx('head-title')}
                        style={{
                            width: '60%',
                        }}
                    >
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

            <div
                style={{
                    width: '100%',
                    height: '450px',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    marginBottom: '70px',
                }}
                ref={videoRef}
            >
                <video
                    style={{ width: '100%', height: '100%' }}
                    controls
                    preload="none"
                    draggable={false}
                    title="Dịch vụ vệ sinh công nghiệp tại PetnClean."
                >
                    <source
                        src="https://res.cloudinary.com/dj2jarcxk/video/upload/v1713531630/Ve%CC%A3%CC%82_Sinh_Co%CC%82ng_Nghie%CC%A3%CC%82p_yqfytu.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            {/*1st scope*/}
            <div className={'company-wrapper'}>
                <div className={cx('main-content')}>
                    <div className={cx('bg-decor')}></div>
                    <Image
                        src={
                            'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713627833/sean-pollock-PhYq704ffdA-unsplash_tdg5pg.jpg'
                        }
                        alt="Hình ảnh tầm nhìn của Pestnclean"
                        key="pestnclean about page "
                        width={3000}
                        height={1000}
                        style={{
                            width: '80%',
                            height: '550px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        ref={imgAbout1}
                    />
                    <div className={cx('text-content')} ref={textAbout1}>
                        <p>2024</p>
                        <h1 className={cx('title')}>1. TẦM NHÌN</h1>
                        <p className={cx('text-common')}>
                            PestnClean khát vọng trở thành đối tác đáng tin cậy, đồng hành cùng quá trình phát
                            triển của các doanh nghiệp trong ngành Hotels & Resorts, F&B Retail và Nhà máy.
                            Phấn đấu đạt mục tiêu xây dựng thương hiệu hàng đầu trong ngành Dịch vụ vệ sinh và
                            Kiểm soát côn trùng – Đem lại hệ sinh thái toàn diện, bền vững.
                        </p>
                    </div>
                </div>

                {/*2nd scope*/}
                <div className={cx('main-content-2')}>
                    <div className={cx('bg-decor-2')}></div>
                    <div className={cx('text-content-2')} ref={textAbout2}>
                        <p>2024</p>
                        <h1 className={cx('title')}>2. SỨ MỆNH</h1>
                        <p className={cx('text-common')}>
                            “ Nâng cao chất lượng môi trường làm việc, đảm bảo giá trị kinh doanh hiệu quả bền
                            vững ”. PestnClean tin rằng việc cung cấp mô hình dịch vụ giải pháp toàn diện về
                            vệ sinh và kiểm soát côn trùng sẽ mang lại những giá trị tốt đẹp cho công việc
                            kinh doanh của khách hàng, đối tác và xã hội.
                        </p>
                    </div>
                    <Image
                        src={
                            'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713627832/hunters-race-MYbhN8KaaEc-unsplash_qxi4nb.jpg'
                        }
                        alt="Hình ảnh sứ mệnh của Pestnclean"
                        key="pestnclean about page "
                        width={3000}
                        height={1000}
                        style={{
                            width: '80%',
                            height: '550px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            position: 'absolute',
                            right: '0px',
                            zIndex: -1,
                        }}
                        ref={imgAbout2}
                    />
                </div>

                {/*  */}
                <Content3 />
            </div>
        </div>
    );
}
