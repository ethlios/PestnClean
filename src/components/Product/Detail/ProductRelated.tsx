'use client';

import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { IconButton } from '@mui/material';
import Slider from 'react-slick';
import useSize from '~/libs/hooks/useSize';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import ProductItem from '../Main/ProductItem';

const cx = classNames.bind(styles);

export interface ProductRelatedProps {
    product: any;
}

const settings = {
    infinite: true,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    classNames: 'fix-slick',
};

function SamplePrevArrow(props: any) {
    const { className, style, onClick, cb } = props;
    return (
        <div
            className={cx('btn-wrapper')}
            style={{
                right: '80px',
            }}
            onClick={onClick}
        >
            <IconButton className={cx('btn-click')}>
                <KeyboardBackspaceOutlinedIcon />
            </IconButton>
        </div>
    );
}

function SampleNextArrow(props: any) {
    const { className, style, onClick, cb } = props;
    return (
        <div
            className={cx('btn-wrapper')}
            style={{
                right: '13px',
            }}
            onClick={onClick}
        >
            <IconButton className={cx('btn-click')}>
                <EastOutlinedIcon />
            </IconButton>
        </div>
    );
}

export default function ProductRelated({ product }: ProductRelatedProps) {
    const { sizeX } = useSize();
    const allProducts = useSelector((state: RootState) => state.main.allProducts);
    const relatedProducts = allProducts.filter(
        (item) =>
            item.category1 === product[0]?.category1 ||
            item.category2 === product[0]?.category2 ||
            item.category3 === product[0]?.category3,
    );

    return (
        <div className={cx('product-related')}>
            <p className={cx('related-title')}>Sản phẩm liên quan</p>
            <div className={cx('horizontal-decor')} />
            <div className="slider-container">
                {relatedProducts.length > 4 ? (
                    <Slider
                        {...settings}
                        slidesToShow={sizeX > 1024 ? 4 : sizeX > 768 ? 3 : sizeX > 440 ? 2 : 1}
                    >
                        {relatedProducts.map((item, index) => {
                            return <ProductItem item={item} key={index} />;
                        })}
                    </Slider>
                ) : (
                    <div className={'flex gap-1 w-full *:w-1/4'}>
                        {relatedProducts.map((item, index) => {
                            return <ProductItem item={item} key={index} />;
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
