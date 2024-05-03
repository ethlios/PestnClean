import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Link from 'next/link';
import TuneIcon from '@mui/icons-material/Tune';
import useSize from '~/libs/hooks/useSize';
import { nameToLink } from '~/libs/orthers/nameToLink';
import formatter from '~/libs/orthers/formatMoney';
import { useState } from 'react';
import smoothScroll from '~/libs/orthers/smoothScroll';

const cx = classNames.bind(styles);

export interface IAppProps {
    setOpenFilter: any;
    openFilter: boolean;
    products: any;
}

export default function AllProduct({ setOpenFilter, openFilter, products }: IAppProps) {
    const { sizeX } = useSize();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const totalPages = Math.ceil(products.length / productsPerPage);

    const displayedProducts = products.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage,
    );

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
            <div className={cx('filter-list')} id={'listAllProduct'}>
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
                {displayedProducts.map((item: any) => {
                    const path = nameToLink(item ? item.title : '');

                    return (
                        <Link
                            href={`/sanpham/${path}`}
                            className={cx('content-item2')}
                            key={item.id}
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
                            <p className={cx('item-name')}>{item.title}</p>
                            <p className={cx('item-price')}>{formatter.format(+item.price)}</p>
                        </Link>
                    );
                })}
            </div>
            <div className={cx('number-page')}>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <p
                        className={'cursor-pointer'}
                        key={index}
                        onClick={() => {
                            setCurrentPage(index + 1);
                            smoothScroll('div#listAllProduct');
                        }}
                    >
                        {index + 1}
                    </p>
                ))}
            </div>
        </div>
    );
}
