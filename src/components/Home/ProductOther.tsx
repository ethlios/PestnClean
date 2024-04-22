'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import ButtonCommon from '../Orther/Button';
import OwlCarouselCP from '../Orther/Carousel';
import styles from './home.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {}

const otherBlogs = [
    {
        id: 1,
        category: 'Sản phẩm giải pháp vệ sinh',
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713752119/tinh-dau-sweet-dream-viet-oils_rj89xg.jpg',
        title: 'Bảng giá vệ sinh công nghiệp PestnClean',
        created: '09 tháng 4, 2024',
    },
    {
        id: 2,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713752119/tinh-dau-sweet-dream-viet-oils_rj89xg.jpg',
        category: 'Sản phẩm giải pháp vệ sinh',
        title: '6 Cách khử mùi hôi nhà vệ sinh mới nhất 2024',
        created: '09 tháng 4, 2024',
    },
    {
        id: 3,
        category: 'Sản phẩm giải pháp vệ sinh',
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713752119/tinh-dau-sweet-dream-viet-oils_rj89xg.jpg',
        title: '3 cách tạo mùi thơm cho xe ô tô bạn nên biết',
        created: '09 tháng 4, 2024',
    },
];

export default function ProductOthers(props: IAppProps) {
    return (
        <div className={cx('blog-wrapper')}>
            <div className={cx('blog-header')}>
                <h1 className={'font-bold underline underline-offset-2 text-2xl uppercase decoration-2'}>
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
