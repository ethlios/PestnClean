import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function CategoryIconProduct(props: IAppProps) {
    return (
        <div className={cx('category-icon')}>
            <div className={cx('product-icon-wrapper')}>
                <div className={cx('product-icon')}></div>
                <p>DUNG DỊCH HOÁ CHẤT</p>
            </div>
            <div className={cx('product-icon-wrapper')}>
                <div className={cx('product-icon')}></div>
                <p>DUNG DỊCH HOÁ CHẤT</p>
            </div>
            <div className={cx('product-icon-wrapper')}>
                <div className={cx('product-icon')}></div>
                <p>DUNG DỊCH HOÁ CHẤT</p>
            </div>
            <div className={cx('product-icon-wrapper')}>
                <div className={cx('product-icon')}></div>
                <p>DUNG DỊCH HOÁ CHẤT</p>
            </div>
            <div className={cx('product-icon-wrapper')}>
                <div className={cx('product-icon')}></div>
                <p>DUNG DỊCH HOÁ CHẤT</p>
            </div>
        </div>
    );
}
