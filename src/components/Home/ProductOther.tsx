'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import ButtonCommon from '../Orther/Button';
import OwlCarouselCP from '../Orther/Carousel';
import styles from './home.module.scss';
import Image from 'next/image';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ProductOthers(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={cx('blog-wrapper')}>
            <div
                className={cx('blog-header')}
                style={{
                    marginBottom: '30px',
                }}
            >
                <h1
                    className={'font-bold underline underline-offset-2 uppercase decoration-2'}
                    style={{
                        fontSize: sizeX < 550 ? '18px' : '24px',
                    }}
                >
                    Có thể bạn thích
                </h1>
                <ButtonCommon text="Xem thêm" path="sanpham" />
            </div>

            <OwlCarouselCP>
                <>
                    {Array.from({ length: 10 }).map((_, index) => {
                        return (
                            <Link href="/sanpham/detail" className={cx('content-item')} key={index}>
                                <Image
                                    src={
                                        'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713752119/tinh-dau-sweet-dream-viet-oils_rj89xg.jpg'
                                    }
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className={cx('item-img')}
                                    draggable={false}
                                ></Image>
                                <p className={cx('item-category')}>SẢN PHẨM GIẢI PHÁP VỆ SINH</p>
                                <p className={cx('item-name')}>Tinh dầu Chanh Viet Oils</p>
                                <p className={cx('item-price')}>
                                    1.100.000 <u>đ</u>
                                </p>
                            </Link>
                        );
                    })}
                </>
            </OwlCarouselCP>
        </div>
    );
}
