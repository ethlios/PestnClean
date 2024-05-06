'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import ButtonCommon from '../Orther/Button';
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

import img1 from '../../../public/img/img_1.jpg';
import img2 from '../../../public/img/img_2.jpg';
import img3 from '../../../public/img/img_3.jpg';
import img4 from '../../../public/img/img_4.jpg';
import img5 from '../../../public/img/img_5.jpg';
import img6 from '../../../public/img/img_6.jpg';
import img7 from '../../../public/img/img_3.jpg';
import useSize from '~/libs/hooks/useSize';
import { useDispatch, useSelector } from 'react-redux';
import { getImgWorkByType } from '~/redux/actions';
import { RootState } from '~/redux/provider/store';

const listImg = [img1.src, img2.src, img3.src, img4.src, img5.src, img6.src, img7.src];

const cx = classNames.bind(styles);

export interface IAppProps {}

const imgTypes = ['All', 'Vệ sinh', 'Diệt côn trùng', 'Đào tạo'];

const settings = {
    className: 'center',
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    slidesToScroll: 4,
    // centerMode: true,
    // centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
};

export interface propsImgWork {
    url: string;
}

export default function ImageWork(props: IAppProps) {
    const [defaultListValue, setDefaultListValue] = useState<number>(0);
    const [defaultList, setDefaultList] = useState<string>('Tất cả');
    const [arrImgWork, setValueImgWork] = useState<string[]>([]);
    const { sizeX } = useSize();
    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.main);

    useEffect(() => {
        if (selector.message === 'Lấy ra thành công' && selector.imageWork.length > 0) {
            const arrayOfUrls = selector.imageWork.map((obj) => obj.img);
            setValueImgWork(arrayOfUrls);
        }
    }, [selector.message]);

    useEffect(() => {
        console.log(defaultListValue);
        if (defaultListValue !== undefined) {
            dispatch(getImgWorkByType({ id: defaultListValue }));
        }
    }, [defaultListValue]);
    return (
        <div className={cx('work-wrapper')}>
            <h1
                className={
                    'pb-5 text-center font-bold underline underline-offset-2 text-2xl uppercase mt-14 decoration-2'
                }
                style={{
                    fontSize: sizeX < 550 ? '18px' : '24px',
                }}
            >
                Hình ảnh làm việc
            </h1>

            <div
                className={cx('btn-lists')}
                style={{
                    flexWrap: sizeX < 500 ? 'wrap' : 'nowrap',
                }}
            >
                {imgTypes.map((btn, index) => {
                    return (
                        <ButtonCommon
                            key={index}
                            text={btn}
                            setDefaultListValue={setDefaultListValue}
                            rule2={defaultListValue === index ? 'rule-1' : 'rule-2'}
                            index2={index}
                            setDefaultList={setDefaultList}
                        />
                    );
                })}
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={sizeX < 500 ? 1 : sizeX < 700 ? 2 : 3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                style={{
                    padding: '30px 0',
                }}
            >
                {arrImgWork.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={cx('img-item')}>
                                <Image
                                    src={item}
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className={cx('img-item-main')}
                                ></Image>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
