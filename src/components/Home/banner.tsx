'use client';

import classNames from 'classnames/bind';
import Slider from 'react-slick';
import ButtonCommon from '../Orther/Button';
import styles from './home.module.scss';
import useSize from '~/libs/hooks/useSize';
import { homeBanner } from '~/constants/banner';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {}

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
};

export default function BannerHomePage(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={'w-full'}>
            <div className="slider-container">
                <Slider {...settings}>
                    {homeBanner.map((item, index) => {
                        return (
                            <div key={index}>
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={2000}
                                    height={900}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                                {/* <div
                                    style={{
                                        backgroundImage: `url('${item.src}')`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        backgroundColor: 'rgba(0,0,0,0.05)',
                                        height: sizeX < 500 ? '200px' : sizeX < 900 ? '350px' : '500px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: sizeX < 640 ? 'center' : '',
                                        // color: index === 3 || index === 0 ? '#fff' : '',
                                        padding:
                                            sizeX < 768
                                                ? '0 20px'
                                                : sizeX < 1100
                                                  ? '0 50px'
                                                  : sizeX < 1280
                                                    ? '0 80px'
                                                    : '0 100px',
                                    }}
                                > */}
                                {/* <h1
                                        style={{
                                            width: sizeX < 640 ? '100%' : '450px',
                                            fontSize: sizeX < 550 ? '28px' : '34px',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            marginBottom: '5px',
                                            letterSpacing: '-.5px',
                                            textAlign: sizeX < 640 ? 'center' : 'left',
                                        }}
                                    >
                                        {item.title}
                                    </h1>
                                    <p
                                        style={{
                                            width: sizeX < 640 ? '100%' : item.id === 1 ? '450px' : '380px',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            letterSpacing: '-.5px',
                                            marginBottom: '10px',
                                            textAlign: sizeX < 640 ? 'center' : 'left',
                                            // color: index === 3 || index === 0 ? '#fff' : 'var(--text-black)',
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                    <div>
                                        <ButtonCommon
                                            text={'XEM THÊM'}
                                            path={item.path}
                                            rule="rule-1"
                                        ></ButtonCommon>
                                    </div> */}
                                {/* </div> */}
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}
