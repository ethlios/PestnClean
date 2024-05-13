'use client';

import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import useSize from '~/libs/hooks/useSize';
import Link from 'next/link';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Image from 'next/image';
import formatter from '~/libs/orthers/formatMoney';

const cx = classNames.bind(styles);

export interface ProductItemProps {
    item: any;
    className?: string;
}

export default function ProductItem({ item }: ProductItemProps) {
    const { sizeX } = useSize();
    return (
        <div
            className={cx('content-item')}
            style={{
                marginRight: '15px',
            }}
        >
            <div className={cx('item-img')}>
                {item.status === 'SALE' && (
                    <div className={cx('item-event-sale')}>
                        <p>{((1 - item.priceSales / item.price) * 100).toFixed(1)}%</p>
                    </div>
                )}
                {item.status === 'HOT' && (
                    <div className={cx('item-event-hot')}>
                        <p>Hot</p>
                    </div>
                )}
                <Image
                    src={item.Image[0]}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className={'h-full w-full object-cover'}
                />
            </div>
            <p className={cx('item-category')}>{item.category1}</p>
            <Link href={`/sanpham/${nameToLink(item.title)}`}>
                <p className={cx('item-name')}>{item.title}</p>
            </Link>
            {item.priceSales ? (
                <>
                    <p className={cx('item-sale-price')}>{formatter.format(+item.price)}</p>
                    <p className={cx('item-sale')}>{formatter.format(+item.priceSales)}</p>
                </>
            ) : (
                <p className={cx('item-price')}>{formatter.format(+item.price)}</p>
            )}
        </div>
    );
}
