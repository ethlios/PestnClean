'use client';

import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { IconButton } from '@mui/material';
import Slider from 'react-slick';

const cx = classNames.bind(styles);

export interface IAppProps {}

const settings = {
    infinite: true,
    slidesToShow: 4,
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

const arrayTest = ['', '', '', '', '', '', ''];

export default function ProductRelated(props: IAppProps) {
    return (
        <div className={cx('product-related')}>
            <p className={cx('related-title')}>Sản phẩm liên quan</p>
            <div className={cx('horizontal-decor')} />
            <div className="slider-container">
                <Slider {...settings}>
                    {arrayTest.map((_, index) => {
                        return (
                            <div className={cx('content-item')} key={index}>
                                <div className={cx('item-img')}>
                                    <div className={cx('item-event-hot')}>
                                        <p>Hot</p>
                                    </div>
                                </div>
                                <p className={cx('item-category')}>SẢN PHẨM GIẢI PHÁP VỆ SINH</p>
                                <p className={cx('item-name')}>Tinh dầu Chanh Viet Oils</p>
                                <p className={cx('item-price')}>
                                    1.100.000 <u>đ</u>
                                </p>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}
