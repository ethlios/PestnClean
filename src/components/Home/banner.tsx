'use client';

import classNames from 'classnames/bind';
import Slider from 'react-slick';
import ButtonCommon from '../Orther/Button';
import styles from './home.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

const imgList = [
    {
        id: 1,
        src: '',
        alt: 'Các dịch vụ của pestnclean',
        color: 'var(--primary)',
        title: 'Nâng cao chất lượng cuộc sống',
        path: 'blogs',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    },
    {
        id: 2,
        src: '',
        alt: 'Dịch vụ kiểm soát côn trùng của PESTNCLEAN',
        color: 'var(--primary)',
        title: 'Dịch vụ kiểm soát côn trùng',
        path: 'dichvu/kiem-soat-con-trung',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    },
    {
        id: 3,
        src: '',
        alt: 'Dịch vụ vệ sinh côn trùng',
        color: 'var(--secondary)',
        title: 'Dịch vụ vệ sinh côn trùng',
        path: 'dichvu/dich-vu-ve-sinh',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    },
    {
        id: 4,
        src: '',
        alt: 'Dịch vụ Giải pháp vệ sinh',
        color: 'var(--secondary-dark)',
        title: 'Dịch vụ Giải pháp vệ sinh',
        path: 'dichvu/giai-phap-ve-sinh',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    },
];

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
    return (
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    {imgList.map((item, index) => {
                        return (
                            <div key={index}>
                                <div
                                    style={{
                                        // backgroundImage: `url('${banner1.src}')`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        backgroundColor: 'rgba(0,0,0,0.05)',
                                        height: '500px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        padding: '0 100px',
                                    }}
                                >
                                    <h1
                                        style={{
                                            width: item.id === 1 ? '450px' : '380px',
                                            fontSize: '34px',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            marginBottom: '5px',
                                            letterSpacing: '-.5px',
                                        }}
                                    >
                                        {item.title}
                                    </h1>
                                    <p
                                        style={{
                                            width: item.id === 1 ? '450px' : '380px',
                                            fontSize: '14.6px',
                                            fontWeight: '600',
                                            letterSpacing: '-.5px',
                                            color: 'var(--text-black)',
                                            marginBottom: '10px',
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
