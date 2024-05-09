'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './order.module.scss';
import Image from 'next/image';
import formatter from '~/libs/orthers/formatMoney';
import { useEffect, useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const cx = classNames.bind(styles);

interface ProductOrderProps {
    products?: any;
}

export default function ProductOrder({ products }: ProductOrderProps) {
    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'p-2'}>
                {products.length > 0 && (
                    <>
                        {products.map((item: any) => (
                            <ProductItem item={item} key={item.id} />
                        ))}
                        <div className={'flex justify-end my-2'}>
                            <p className={cx('total-price')}>
                                Tổng tiền:{' '}
                                {formatter.format(
                                    products.reduce(
                                        (acc: number, item: any) => acc + +item.price * +item.quantity,
                                        0,
                                    ),
                                )}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

interface ProductItemProps {
    item: any;
}

export function ProductItem({ item }: ProductItemProps) {
    return (
        <div className={'flex mt-5 justify-between'}>
            <div className={'flex'}>
                <Image src={item.img} alt={item.title} width={70} height={90} />
                <div className={`${cx('product-detail')} flex flex-col justify-center ml-2`}>
                    <p className={cx('product-name')}>{item.title}</p>
                    <div className="flex">
                        <span>{item.quantity}</span>
                        <span className={'mx-1'}>x</span>
                        <span>{formatter.format(+item.price)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
