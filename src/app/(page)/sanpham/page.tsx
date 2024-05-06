'use client';

import classNames from 'classnames/bind';
import styles from '../../../components/Product/product.module.scss';
import FilterProduct from '~/components/Product/Main/Filter';
import BannerProduct from '~/components/Product/Main/Banner';
import Link from 'next/link';
import CategoryIconProduct from '~/components/Product/Main/CategoryIcon';
import ProductSale from '~/components/Product/Main/ProductSale';
import ProductHot from '~/components/Product/Main/ProductHot';
import AllProduct from '~/components/Product/Main/AllProduct';
import { useEffect, useState } from 'react';
import useSize from '~/libs/hooks/useSize';
import { products as mockupProduct } from '~/constants/products';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ProductPage(props: IAppProps) {
    const { sizeX } = useSize();
    const [openFilter, setOpenFilter] = useState<boolean>(true);
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        fetch('/api/product')
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setProducts(data);
                } else {
                    setProducts(mockupProduct);
                }
            });
    }, []);

    useEffect(() => {
        if (sizeX < 1024) {
            setOpenFilter(false);
        } else {
            setOpenFilter(true);
        }
    }, [sizeX]);

    return (
        <div
            className={'cpmount'}
            style={{
                padding:
                    sizeX < 768 ? '0 20px' : sizeX < 1100 ? '0 50px' : sizeX < 1280 ? '0 80px' : '0 100px',
            }}
        >
            <div className={cx('link')}>
                <Link href="/">Trang chủ</Link>
                <p>|</p>
                <Link href="/sanpham">Sản phẩm</Link>
            </div>
            <div
                className={cx('product-wrapper')}
                style={{
                    gap: !openFilter ? '0px' : '',
                }}
            >
                <FilterProduct openFilter={openFilter} setOpenFilter={setOpenFilter} />
                <div
                    className={cx('product-main')}
                    style={{
                        width: sizeX < 1024 ? '100%' : !openFilter ? '100%' : '',
                        transition: 'all ease .5s',
                    }}
                >
                    <BannerProduct />
                    <CategoryIconProduct openFilter={openFilter} />
                    <ProductSale
                        openFilter={openFilter}
                        products={products.filter((product: any) => product.status === 'SALE')}
                    />
                    <ProductHot
                        openFilter={openFilter}
                        products={products.filter((product: any) => product.status === 'HOT')}
                    />
                    <AllProduct setOpenFilter={setOpenFilter} openFilter={openFilter} products={products} />
                </div>
            </div>
            <div className={cx('banner-auto')}></div>
        </div>
    );
}
