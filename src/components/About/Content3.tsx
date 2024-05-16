import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import classNames from 'classnames/bind';
import styles from './about.module.scss';
import { fadeIn } from '~/libs/orthers/animation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useSize from '~/libs/hooks/useSize';

export interface IAppProps {}

const cx = classNames.bind(styles);

const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
};

const content3 = [
    {
        description: `Giải quyết tất cả các vấn đề vệ sinh, côn trùng khách hàng gặp phải.`,
        icon: <HandshakeOutlinedIcon />,
    },
    {
        description: 'Dịch vụ với trang thiết bị hiện đại, chuyên gia giàu kinh nghiệm.',
        icon: <ConstructionOutlinedIcon />,
    },
    {
        description: 'Chăm sóc, hỗ trợ tư vấn khách hàng tận tâm 24/7.',
        icon: <SupportAgentOutlinedIcon />,
    },
    {
        description: 'Xây dựng hệ sinh thái toàn diện, bền vững và đảm bảo sức khỏe.',
        icon: <Diversity1OutlinedIcon />,
    },
];

gsap.registerPlugin(ScrollTrigger);

export default function Content3(props: IAppProps) {
    const about1DesRef = useRef<any>();
    const { sizeX } = useSize();

    useEffect(() => {
        setTimeout(() => {
            gsap.fromTo(
                about1DesRef.current,
                fadeIn(about1DesRef.current)[0],
                fadeIn(about1DesRef.current)[1],
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
                    durations: 0.5,
                    delay: 0.1,
                    stagger: {
                        amount: 1,
                    },
                    scrollTrigger: {
                        trigger: '.card-about',
                        start: 'top bottom-=-50px',
                    },
                },
            );
        }, 1);
    }, []);

    return (
        <div
            className={cx('content-3')}
            style={{
                flexDirection: sizeX < 768 ? 'column' : 'row',
                paddingBottom: sizeX < 768 ? '30px' : '',
                gap: '30px',
            }}
        >
            <div
                className={cx('text-content-3')}
                style={{
                    position: sizeX < 768 ? 'relative' : 'absolute',
                    top: sizeX < 768 ? '0px' : '',
                }}
            >
                <div
                    className={cx('text-content-3-main')}
                    style={{
                        backgroundColor: sizeX < 768 ? 'transparent' : '',
                        height: sizeX < 768 ? '200px' : '',
                    }}
                >
                    <div
                        className={cx('text-content-tired')}
                        style={{
                            width: sizeX < 768 ? '100%' : sizeX < 950 ? '45%' : '35%',
                            paddingLeft: sizeX < 768 ? '0' : sizeX < 800 ? '20px' : '50px',
                        }}
                    >
                        <h1 className={cx('title')}>3. GIÁ TRỊ CỐT LÕI</h1>
                        <p className={cx('text-common')} ref={about1DesRef}>
                            {
                                'Sự cam kết với khách hàng - Chất lượng của dịch vụ - Chuyên nghiệp về thái độ - Trách nhiệm với xã hội.'
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div
                className={cx('img-content-3')}
                style={{
                    width: sizeX < 768 ? '100%' : '80%',
                    bottom: sizeX < 768 ? '0' : '',
                    right: sizeX < 768 ? '0' : '-250px',
                    position: sizeX < 768 ? 'relative' : 'absolute',
                }}
            >
                <div className="slider-container">
                    <Slider {...settings} slidesToShow={sizeX > 768 ? 2 : 1}>
                        {content3.map((item, index) => {
                            return (
                                <div key={index} className={cx('img-item-wrapper')}>
                                    <div
                                        className={`${cx('img-item')} card-about`}
                                        style={{
                                            height: sizeX < 768 ? '400px' : '',
                                            width: sizeX < 768 ? '100%' : '',
                                        }}
                                    >
                                        <div className={cx('img-decor')}></div>
                                        <div className={cx('img-item-main')}>
                                            <div className={cx('img-icon')}>
                                                <p style={{}}>0{index + 1}.</p>
                                                <div className={cx('img-icon-decor')}></div>
                                            </div>
                                            <div className={cx('img-item-text')}>
                                                <p>{item.description}</p>
                                            </div>
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
