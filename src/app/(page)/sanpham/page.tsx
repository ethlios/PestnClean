import classNames from 'classnames/bind';
import styles from '../../../components/Product/product.module.scss';
import FilterProduct from '~/components/Product/Main/Filter';
import BannerProduct from '~/components/Product/Main/Banner';
import Link from 'next/link';
import CategoryIconProduct from '~/components/Product/Main/CategoryIcon';
import ProductSale from '~/components/Product/Main/ProductSale';
import ProductHot from '~/components/Product/Main/ProductHot';
import AllProduct from '~/components/Product/Main/AllProduct';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function ProductPage(props: IAppProps) {
    return (
        <div className={'container cpmount'}>
            <div className={cx('link')}>
                <Link href="/">Trang chủ</Link>
                <p>|</p>
                <Link href="/sanpham">Sản phẩm</Link>
            </div>
            <div className={cx('product-wrapper')}>
                <FilterProduct />
                <div className={cx('product-main')}>
                    <BannerProduct />
                    <CategoryIconProduct />
                    <ProductSale />
                    <ProductHot />
                    <AllProduct />
                </div>
            </div>
            <div className={cx('banner-auto')}></div>
        </div>
    );
}
