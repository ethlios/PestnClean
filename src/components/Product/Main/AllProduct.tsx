import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Link from 'next/link';
import TuneIcon from '@mui/icons-material/Tune';
import useSize from '~/libs/hooks/useSize';
import products from '~/constants/products';
import { nameToLink } from '~/libs/orthers/nameToLink';

const cx = classNames.bind(styles);

export interface IAppProps {
    setOpenFilter: any;
    openFilter: boolean;
}

export default function AllProduct({ setOpenFilter, openFilter }: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={cx('product-event')}>
            <div className={`${cx('title-filter')}`}>
                <div
                    style={{
                        width: '60%',
                    }}
                >
                    <h1
                        style={{
                            width: '100%',
                        }}
                    >
                        Tất cả sản phẩm
                    </h1>
                    <div className={cx('horizontal-decor')}></div>
                </div>
                <p className="opacity" onClick={() => setOpenFilter(!openFilter)}>
                    {openFilter ? 'Đóng' : 'Mở'}
                    <TuneIcon />
                </p>
            </div>
            <div className={cx('filter-list')}>
                <p
                    style={{
                        width: '55px',
                    }}
                >
                    Bộ lọc:
                </p>
                <div>
                    Tất cả <ClearOutlinedIcon />
                </div>
            </div>
            <div
                className={cx('product-item-all2')}
                style={{
                    gap: sizeX < 740 ? '8px' : '',
                }}
            >
                {products.map((item) => {
                    const path = nameToLink(item ? item.name : '');

                    return (
                        <Link
                            href={`/sanpham/${path}`}
                            className={cx('content-item2')}
                            key={path}
                            style={{
                                width:
                                    sizeX < 740
                                        ? 'calc(100% /2 - 5px)'
                                        : sizeX < 1024
                                            ? ''
                                            : !openFilter
                                                ? 'calc(100% /4 - 19px)'
                                                : '',
                            }}
                        >
                            <div
                                className={cx('item-img')}
                                style={{
                                    height: sizeX < 430 ? '160px' : '',
                                }}
                            ></div>
                            <p
                                className={cx('item-category')}
                                style={{
                                    fontSize: sizeX < 400 ? '10.5px' : '',
                                }}
                            >
                                {item.category}
                            </p>
                            <p className={cx('item-name')}>{item.name}</p>
                            <p className={cx('item-price')}>
                                {item.price} <u>{item.currency}</u>
                            </p>
                        </Link>
                    );
                })}
            </div>
            <div className={cx('number-page')}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
        </div>
    );
}
