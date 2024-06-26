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
import Link from 'next/link';

const cx = classNames.bind(styles);

interface ProductOrderProps {
    products?: any;
    payment?: any;
}

export default function ProductOrder({ products, payment }: ProductOrderProps) {
    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'p-2'}>
                {products.length > 0 && (
                    <>
                        {products.map((item: any) => (
                            <ProductItem item={item} key={item.id} />
                        ))}
                        <div className={'flex justify-end my-2'}>
                            <p className={cx('total-price')}>Tổng tiền: {formatter.format(+payment)}</p>
                        </div>
                    </>
                )}
            </div>
            <ul
                style={{
                    listStyleType: 'initial',
                    marginLeft: '20px',
                    borderTop: 'solid 2px var(--primary)',
                    paddingTop: '10px',
                }}
            >
                <li
                    style={{
                        fontSize: '14px',
                        fontWeight: '500',
                    }}
                >
                    Sau khi đã xác nhận, đơn hàng sẽ được giao từ 2-5 ngày!
                </li>
                <li
                    style={{
                        fontSize: '14px',
                        fontWeight: '500',
                    }}
                >
                    Hoặc gọi trực tiếp{' '}
                    <Link
                        href={'tel:0868363600'}
                        aria-label="phone"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        0868 3636 00
                    </Link>{' '}
                    nếu có bất kỳ thay đổi nào!
                </li>
            </ul>
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
                    <div
                        className="flex"
                        style={{
                            fontSize: '14px',
                            fontWeight: 500,
                        }}
                    >
                        <span>{item.quantity}</span>
                        <span className={'mx-1'}>x</span>
                        <span>{formatter.format(+item.price)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
