'use client';

import classNames from 'classnames/bind';
import styles from '~/components/Product/Detail/product_detail.module.scss';
import Link from 'next/link';
import ProductSingle from '~/components/Product/Detail/ProductSingle';
import ProductDescript from '~/components/Product/Detail/ProductDescript';
import ProductRelated from '~/components/Product/Detail/ProductRelated';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function ProductDetailPage(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={'cpmount'}
             style={{ padding: sizeX < 768 ? '0 20px' : sizeX < 1100 ? '0 50px' : sizeX < 1280 ? '0 80px' : '0 100px' }}>
            <div className={cx('link')}>
                <Link href="/">Trang chủ</Link>
                <p>|</p>
                <Link href="/sanpham">Sản phẩm</Link>
                <p>|</p>
                <p>Chi tiết sản phẩm</p>
            </div>
            <div className={cx('wrapper')}>
                <ProductSingle />
            </div>
            <ProductDescript />
            <ProductRelated />
        </div>
    );
}
