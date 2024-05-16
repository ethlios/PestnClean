'use client';

import classNames from 'classnames/bind';
import ButtonCommon from '../Orther/Button';
import OwlCarouselCP from '../Orther/Carousel';
import styles from './home.module.scss';
import useSize from '~/libs/hooks/useSize';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import ProductItem from '~/components/Product/Main/ProductItem';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ProductOthers(props: IAppProps) {
    const { sizeX } = useSize();
    const allProducts = useSelector((state: RootState) => state.main.allProducts);
    const randomProducts = [...allProducts].sort(() => 0.5 - Math.random()).slice(0, 10);

    return (
        <div className={cx('blog-wrapper')}>
            <div
                className={cx('blog-header')}
                style={{
                    marginBottom: '30px',
                }}
            >
                <h1
                    className={'font-bold underline underline-offset-2 uppercase decoration-2'}
                    style={{
                        fontSize: sizeX < 550 ? '18px' : '24px',
                    }}
                >
                    Có thể bạn thích
                </h1>
                <ButtonCommon text="Xem thêm" path="sanpham" />
            </div>

            <OwlCarouselCP>
                <>
                    {randomProducts.map((product, index) => {
                        return <ProductItem item={product} key={index} />;
                    })}
                </>
            </OwlCarouselCP>
        </div>
    );
}
