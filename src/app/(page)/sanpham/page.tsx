'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllProduct from '~/components/Product/Main/AllProduct';
import BannerProduct from '~/components/Product/Main/Banner';
import CategoryIconProduct from '~/components/Product/Main/CategoryIcon';
import FilterProduct from '~/components/Product/Main/FilterProduct';
import ProductStatus from '~/components/Product/Main/ProductStatus';
import useSize from '~/libs/hooks/useSize';
import { RootState } from '~/redux/provider/store';
import styles from '~/components/Product/product.module.scss';
import productBannerFooter from '../../../../public/img/productBannerFooter.jpg';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ProductPage(props: IAppProps) {
    const { sizeX } = useSize();
    const [openFilter, setOpenFilter] = useState<boolean>(true);
    const allProducts = useSelector((state: RootState) => state.main.allProducts);
    const saleProducts = allProducts.filter((product: any) => product.status === 'SALE');
    const hotProducts = allProducts.filter((product: any) => product.status === 'HOT');
    const [products, setProducts] = useState<any>(allProducts);
    const [selectedCategory, setSelectedCategory] = useState<any>([]);
    const [checkedFilter, setCheckedFilter] = useState<any>([]);

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
                <FilterProduct
                    openFilter={openFilter}
                    setOpenFilter={setOpenFilter}
                    setProducts={setProducts}
                    allProducts={allProducts}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    checkedFilter={checkedFilter}
                    setCheckedFilter={setCheckedFilter}
                />
                <div
                    className={cx('product-main')}
                    style={{
                        width: sizeX < 1024 ? '100%' : !openFilter ? '100%' : '',
                        transition: 'all ease .5s',
                    }}
                >
                    <BannerProduct />
                    {/* <CategoryIconProduct openFilter={openFilter} /> */}
                    <ProductStatus openFilter={openFilter} products={saleProducts} status="Đang giảm giá" />
                    <ProductStatus openFilter={openFilter} products={hotProducts} status="Đang bán chạy" />
                    <AllProduct
                        setOpenFilter={setOpenFilter}
                        openFilter={openFilter}
                        products={products}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        checkedFilter={checkedFilter}
                        setCheckedFilter={setCheckedFilter}
                    />
                </div>
            </div>
            <div className={cx('banner-auto')}>
                <Image
                    src={productBannerFooter}
                    alt={'product banner footer'}
                    width={1980}
                    height={1000}
                    className={'h-full w-full object-cover'}
                />
            </div>
        </div>
    );
}
