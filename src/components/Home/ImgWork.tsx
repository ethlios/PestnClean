'use client';

import classNames from 'classnames/bind';
import { useState } from 'react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonCommon from '../Orther/Button';
import styles from './home.module.scss';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useDispatch, useSelector } from 'react-redux';
import useSize from '~/libs/hooks/useSize';
import { RootState } from '~/redux/provider/store';
import { ImageZoom } from '../Orther/Zoom';

const cx = classNames.bind(styles);

export interface IAppProps {}

const imgTypes = ['All', 'Vệ sinh', 'Diệt côn trùng', 'Đào tạo'];

export interface propsImgWork {
    url: string;
}

export default function ImageWork(props: IAppProps) {
    const [defaultListValue, setDefaultListValue] = useState<number>(0);
    const [defaultList, setDefaultList] = useState<string>('Tất cả');
    const { sizeX } = useSize();
    let imageWork = useSelector((state: RootState) => state.main.imageWork);

    if (defaultListValue === 1) {
        imageWork = imageWork.filter((img: any) => {
            return img.type === 'Vệ sinh';
        });
    }
    if (defaultListValue === 2) {
        imageWork = imageWork.filter((img: any) => {
            return img.type === 'Diệt côn trùng';
        });
    }
    if (defaultListValue === 3) {
        imageWork = imageWork.filter((img: any) => {
            return img.type === 'Đào tạo';
        });
    }

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
                loop={true}
                slidesPerView={sizeX < 500 ? 1 : sizeX < 700 ? 2 : 3}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                style={{
                    padding: '30px 0',
                }}
            >
                {imageWork.length > 0 ? (
                    imageWork.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={cx('img-item')}>
                                    <ImageZoom
                                        src={item.img}
                                        alt="Hình ảnh làm việc của Pestnclean"
                                        width={1000}
                                        height={1000}
                                        className={cx('img-item-main')}
                                        options={{
                                            background: '#2f292f',
                                        }}
                                    ></ImageZoom>
                                </div>
                            </SwiperSlide>
                        );
                    })
                ) : (
                    <p
                        style={{
                            fontSize: '14.5px',
                            fontWeight: 600,
                            letterSpacing: '-.2px',
                        }}
                    >
                        Không có hình ảnh nào
                    </p>
                )}
            </Swiper>
        </div>
    );
}
