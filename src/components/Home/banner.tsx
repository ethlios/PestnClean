'use client';

import classNames from 'classnames/bind';
import Slider from 'react-slick';
import ButtonCommon from '../Orther/Button';
import styles from './home.module.scss';
import useSize from '~/libs/hooks/useSize';
import { homeBanner } from '~/constants/banner';

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
                                <div
                                    className={'container'}
                                    style={{
                                        backgroundImage: `url('${item.src}')`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        backgroundColor: 'rgba(0,0,0,0.05)',
                                        height: '500px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: sizeX < 640 ? 'center' : '',
                                        color: index === 3 || index === 0 ? '#fff' : '',
                                    }}
                                >
                                    <h1
                                        style={{
                                            width: sizeX < 640 ? '100%' : item.id === 1 ? '450px' : '380px',
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
                                            fontSize: '14.6px',
                                            fontWeight: '600',
                                            letterSpacing: '-.5px',
                                            marginBottom: '10px',
                                            textAlign: sizeX < 640 ? 'center' : 'left',
                                            color: index === 3 || index === 0 ? '#fff' : 'var(--text-black)',
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                    <div>
                                        <ButtonCommon text={'XEM THÊM'} path={item.path}></ButtonCommon>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}
