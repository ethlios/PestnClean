import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BannerProduct(props: IAppProps) {
    return <div className={cx('banner-product')}></div>;
}
