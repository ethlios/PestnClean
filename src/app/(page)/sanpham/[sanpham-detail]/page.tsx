'use client';

import classNames from 'classnames/bind';
import styles from '~/components/Product/Detail/product_detail.module.scss';
import Link from 'next/link';
import ProductSingle from '~/components/Product/Detail/ProductSingle';
import ProductDescript from '~/components/Product/Detail/ProductDescript';
import ProductRelated from '~/components/Product/Detail/ProductRelated';
import useSize from '~/libs/hooks/useSize';
import { nameToLink } from '~/libs/orthers/nameToLink';
import { useEffect, useState } from 'react';
import { notFound, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { getFeedback } from '~/redux/actions';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ProductDetailPage(props: IAppProps) {
    const { sizeX } = useSize();
    const pathname = usePathname();
    const [product, setProduct] = useState<any[]>([]);
    const products = useSelector((state: RootState) => state.main.allProducts);
    const [comments, setComments] = useState<any[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (products.length > 0) {
            const productFilter = products.filter((product: any) => {
                return `/sanpham/${nameToLink(product.title)}` === pathname;
            });

            if (productFilter.length > 0) {
                setProduct(productFilter);
            } else {
                return notFound();
            }
        }
    }, [pathname, products]);

    useEffect(() => {
        const getComment = async () => {
            if (product.length > 0) {
                const cmts = await fetch(`/api/product/name/${product[0].code}`).then((res) => res.json());

                dispatch(getFeedback(cmts[0].comments));
            }
        };

        getComment();
    }, [dispatch, product]);

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
                <p>|</p>
                <p>Chi tiết sản phẩm</p>
            </div>
            <div className={cx('wrapper')}>
                <ProductSingle product={product} />
            </div>
            <ProductDescript product={product} />
            <ProductRelated product={product} />
        </div>
    );
}
