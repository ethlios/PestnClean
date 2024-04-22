import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';
import ProductImage from '~/components/Product/Detail/ProductImage';
import ProductInfo from '~/components/Product/Detail/ProductInfo';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function ProductSingle(props: IAppProps) {
    return (
        <div className={'grid grid-cols-12 gap-8'}>
            <ProductImage />
            <ProductInfo />
        </div>
    );
}
