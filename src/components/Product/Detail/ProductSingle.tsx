'use client';

import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';
import ProductImage from '~/components/Product/Detail/ProductImage';
import ProductInfo from '~/components/Product/Detail/ProductInfo';
import useSize from '~/libs/hooks/useSize';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

export interface IAppProps {
    product: any[];
}

export default function ProductSingle({ product }: IAppProps) {
    const { sizeX } = useSize();

    return (
        product.length > 0 && (
            <div
                className={cx('product-wrapper')}
                style={{
                    flexDirection: sizeX < 768 ? 'column' : 'row',
                }}
            >
                <ProductImage product={product} />
                <ProductInfo product={product} />
            </div>
        )
    );
}
