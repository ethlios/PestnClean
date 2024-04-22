import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import classNames from 'classnames/bind';
import styles from './about.module.scss';
import { animation2 } from '~/libs/orthers/animation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useSize from '~/libs/hooks/useSize';

export interface IAppProps {
}

const cx = classNames.bind(styles);

const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
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
        gsap.fromTo(
            about1DesRef.current,
            animation2(about1DesRef.current)[0],
            animation2(about1DesRef.current)[1],
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
    }, []);

    return (
        <div className={cx('content-3')}>
            <div className={cx('text-content-3')}>
                <div className={cx('text-content-3-main')}>
                    <div className={cx('text-content-tired')}
                         style={sizeX < 768 ? { width: '100%' } : { width: '35%' }}>
                        <p>2024</p>
                        <h1 className={cx('title')}>3. GIÁ TRỊ CỐT LÕI</h1>
                        <p className={cx('text-common')} ref={about1DesRef}>
                            {
                                'Sự cam kết với khách hàng - Chất lượng của dịch vụ - Chuyên nghiệp về thái độ - Trách nhiệm với xã hội.'
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('img-content-3')}
                 style={
                     sizeX < 768 ?
                         { width: '100%', bottom: '0' }
                         : { width: '80%', right: '-200px' }
                 }>
                <div className="slider-container">
                    <Slider {...settings} slidesToShow={sizeX > 768 ? 2 : 1}>
                        {content3.map((item, index) => {
                            return (
                                <div key={index} className={cx('img-item-wrapper')}>
                                    <div className={`${cx('img-item')} card-about`}>
                                        <div className={cx('img-decor')}></div>
                                        <div className={cx('img-item-main')}>
                                            <div className={cx('img-icon')}>
                                                <p>0{index + 1}.</p>
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
