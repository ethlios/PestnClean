'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import ButtonCommon from '../Orther/Button';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Link from 'next/link';

const cx = classNames.bind(styles);

export interface IAppProps {}

const otherBlogs = [
    {
        id: 1,
        category: 'Sản phẩm giải pháp vệ sinh',
        img: '',
        title: 'Bảng giá vệ sinh công nghiệp PestnClean',
        created: '09 tháng 4, 2024',
    },
    {
        id: 2,
        img: '',
        category: 'Sản phẩm giải pháp vệ sinh',
        title: '6 Cách khử mùi hôi nhà vệ sinh mới nhất 2024',
        created: '09 tháng 4, 2024',
    },
    {
        id: 3,
        category: 'Sản phẩm giải pháp vệ sinh',
        img: '',
        title: '3 cách tạo mùi thơm cho xe ô tô bạn nên biết',
        created: '09 tháng 4, 2024',
    },
];

export default function ProductOthers(props: IAppProps) {
    return (
        <div className={cx('blog-wrapper')}>
            <div className={cx('blog-header')}>
                <h1 className={'font-bold underline underline-offset-2 text-2xl uppercase'}>
                    Có thể bạn thích
                </h1>
                <ButtonCommon text="Xem thêm" path="sanpham" />
            </div>
            <div className={cx('product-item-all')}>
                {Array.from({ length: 3 }).map((_, index) => {
                    return (
                        <Link href="/sanpham/detail" className={cx('content-item')} key={index}>
                            <div className={cx('item-img')}></div>
                            <p className={cx('item-category')}>SẢN PHẨM GIẢI PHÁP VỆ SINH</p>
                            <p className={cx('item-name')}>Tinh dầu Chanh Viet Oils</p>
                            <p className={cx('item-price')}>
                                1.100.000 <u>đ</u>
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
