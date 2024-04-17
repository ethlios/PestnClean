import classNames from 'classnames/bind';
import styles from '~/components/Product/Detail/product_detail.module.scss';
import Link from 'next/link';
import ProductSingle from '~/components/Product/Detail/ProductSingle';
import ProductDescript from '~/components/Product/Detail/ProductDescript';
import ProductRelated from '~/components/Product/Detail/ProductRelated';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function ProductDetailPage(props: IAppProps) {
    return (
        <div className={'container'}>
            <div className={cx('link')}>
                <Link href="/">Trang chủ</Link>
                <p>|</p>
                <Link href="/sanpham">Sản phẩm</Link>
                <p>|</p>
                <p>Chi tiết sản phẩm</p>
            </div>
            <div className={cx('wrapper')}>
                <ProductSingle />
                <ProductDescript />
                <ProductRelated />
            </div>
        </div>
    );
}
