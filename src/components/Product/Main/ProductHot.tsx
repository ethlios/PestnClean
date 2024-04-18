import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ProductHot(props: IAppProps) {
    return (
        <div className={cx('product-event')}>
            <h1>Đang bán chạy</h1>
            <div className={cx('horizontal-decor')}></div>
            <div className={cx('product-item')}>
                {Array.from({ length: 3 }).map((_, index) => {
                    return (
                        <Link href="/sanpham/detail" className={cx('content-item')} key={index}>
                            <div className={cx('item-img')}>
                                <div className={cx('item-event-hot')}>
                                    <p>Hot</p>
                                </div>
                            </div>
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
