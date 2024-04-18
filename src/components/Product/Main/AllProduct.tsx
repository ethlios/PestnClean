import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Link from 'next/link';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AllProduct(props: IAppProps) {
    return (
        <div className={cx('product-event')}>
            <h1>Tất cả sản phẩm</h1>
            <div className={cx('horizontal-decor')}></div>
            <div className={cx('filter-list')}>
                <p>Bộ lọc:</p>
                <div>
                    Tất cả <ClearOutlinedIcon />
                </div>
            </div>
            <div className={cx('product-item-all')}>
                {Array.from({ length: 9 }).map((_, index) => {
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
            <div className={cx('number-page')}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
        </div>
    );
}
