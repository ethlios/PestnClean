'use client';

import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonCommon from '../Orther/Button';
import styles from './home.module.scss';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useDispatch, useSelector } from 'react-redux';
import useSize from '~/libs/hooks/useSize';
import { getImgWorkByType } from '~/redux/actions';
import { RootState } from '~/redux/provider/store';

const cx = classNames.bind(styles);

export interface IAppProps {}

const imgTypes = ['All', 'Vệ sinh', 'Diệt côn trùng', 'Đào tạo'];

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
    }, [selector.imageWork, selector.message]);

    useEffect(() => {
        if (defaultListValue !== undefined) {
            dispatch(getImgWorkByType({ id: defaultListValue }));
        }
    }, [defaultListValue, dispatch]);

    return (
        arrImgWork.length > 0 && (
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
                    slidesPerGroup={3}
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
        )
    );
}
