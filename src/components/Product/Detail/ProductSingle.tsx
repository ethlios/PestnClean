'use client';

import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';
import ProductImage from '~/components/Product/Detail/ProductImage';
import ProductInfo from '~/components/Product/Detail/ProductInfo';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ProductSingle(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div
            className={cx('product-wrapper')}
            style={{
                flexDirection: sizeX < 768 ? 'column' : 'row',
            }}
        >
            <ProductImage />
            <ProductInfo />
        </div>
    );
}
