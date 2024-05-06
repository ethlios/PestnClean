'use client';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import classNames from 'classnames/bind';
import useSize from '~/libs/hooks/useSize';
import styles from './cart.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import formatter from '~/libs/orthers/formatMoney';
import Image from 'next/image';
import * as React from 'react';
import { nameToLink } from '~/libs/orthers/nameToLink';

const cx = classNames.bind(styles);

export interface IAppProps {
    // item: { id: number; src: string; category: string; title: string; price: number; quantity: number};
    // setCart: (cart: any[]) => void;
    item: any; //Item in cart
    setCart: any;
}

export default function CartItem({ item, setCart }: IAppProps) {
    const [amount, setAmount] = useState(item.quantity);
    const { sizeX } = useSize();

    const onchangeAmount = (id: number, quantity: number) => {
        setAmount(quantity); //Update amount
        const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]'); //Get cart from local storage
        localStorageCart.find((item: any) => item.id === id).quantity = quantity; //Update quantity
        localStorage.setItem('cart', JSON.stringify(localStorageCart)); //Save to local storage
        setCart(localStorageCart); //Update cart
    };

    const onchangeDelete = (id: number) => {
        const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]'); //Get cart from local storage
        const newCart = localStorageCart.filter((item: any) => item.id !== id); //Remove item
        localStorage.setItem('cart', JSON.stringify(newCart)); //Save to local storage
        setCart(newCart); //Update cart
    };

    const handleAdd = (id: number) => {
        onchangeAmount(id, amount + 1);
    };

    const handleRemove = (id: number) => {
        if (amount > 1) {
            onchangeAmount(id, amount - 1);
        } else {
            onchangeDelete(id);
        }
    };

    const handleDelete = (id: number) => {
        onchangeDelete(id);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: sizeX <= 600 ? 'column' : 'row',
                height: '180px',
                borderBottom: 'solid 1.5px rgba(0,0,0,0.4)',
                marginBottom: sizeX <= 600 ? '50px' : '',
            }}
        >
            <div
                style={{
                    width: sizeX <= 600 ? '100vw' : 'calc(100% - 50px)',
                    padding: sizeX <= 440 ? '20px 10px' : '20px 30px',
                    display: 'flex',
                    flexDirection: 'row',
                    borderRight: sizeX <= 600 ? '' : 'solid 1.5px rgba(0,0,0,0.4)',
                }}
                className={cx({
                    productHover: sizeX > 992,
                })}
            >
                <Link href={`sanpham/${nameToLink(item.title)}`}>
                    <div
                        style={{
                            width:
                                sizeX < 500
                                    ? '100px'
                                    : sizeX < 800
                                      ? '120px'
                                      : sizeX < 950
                                        ? '100px'
                                        : '110px',
                        }}
                        className={cx({
                            imgHover: sizeX > 992,
                            productImg: true,
                        })}
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={160}
                            height={160}
                            className={'h-full w-full object-cover'}
                        />
                    </div>
                </Link>
                <div
                    className={'flex flex-col justify-between'}
                    style={{
                        marginLeft: sizeX <= 440 ? '20px' : '30px',
                        fontSize: sizeX <= 490 ? '15px' : '16px',
                        wordBreak: 'break-word',
                        width: 'calc(100% - 100px)',
                    }}
                >
                    <div
                        style={{
                            height: 'calc(100% - 15px)',
                            cursor: 'pointer',
                            display: 'flex',
                            gap: '3px',
                            flexDirection: 'column',
                        }}
                    >
                        <p className={cx('product-category')}>{item.category}</p>
                        <p className={cx('product-name')}>{item.title}</p>
                        <ul className={cx('cart-list')}>
                            {item.description &&
                                sizeX > 600 &&
                                item.description
                                    .split('\n')
                                    .map((item: string, index: number) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                    <div
                        className={'w-full flex justify-between items-center'}
                        style={{
                            height: '15px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                gap: '3px',
                                flexDirection: sizeX <= 600 ? 'column' : 'row',
                            }}
                        >
                            <p className={cx('price')}>
                                <b>Giá: </b>
                                {formatter.format(+item.price * amount)}
                            </p>
                            {amount > 1 && (
                                <p className={cx('price-default')}>({formatter.format(+item.price)})</p>
                            )}
                        </div>
                        <IconButton onClick={() => handleDelete(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: sizeX <= 600 ? 'row' : 'column',
                    width: sizeX <= 600 ? '100vw' : '50px',
                    borderBottom: sizeX <= 600 ? 'solid 1.5px rgba(0,0,0,0.4)' : '',
                }}
            >
                <div
                    style={{
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        width: sizeX <= 600 ? '50px' : '',
                    }}
                    className={cx({
                        productHover: sizeX > 992,
                    })}
                    onClick={() => handleRemove(item.id)}
                >
                    <IconButton>
                        <RemoveIcon />
                    </IconButton>
                </div>
                <div
                    className={'flex justify-center items-center'}
                    style={{
                        height: sizeX <= 600 ? '50px' : 'calc(100% - 100px)',
                        borderTop: sizeX <= 600 ? '' : 'solid 1.5px rgba(0,0,0,0.4)',
                        borderBottom: sizeX <= 600 ? '' : 'solid 1.5px rgba(0,0,0,0.4)',
                        borderLeft: sizeX <= 600 ? 'solid 1.5px rgba(0,0,0,0.4)' : '',
                        borderRight: sizeX <= 600 ? 'solid 1.5px rgba(0,0,0,0.4)' : '',
                        fontSize: '16px',
                        fontWeight: '600',
                        width: sizeX <= 600 ? 'calc(100vw - 100px)' : '',
                    }}
                >
                    {amount}
                </div>
                <div
                    style={{
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        width: sizeX <= 600 ? '50px' : '',
                    }}
                    className={cx({
                        productHover: sizeX > 992,
                    })}
                    onClick={() => handleAdd(item.id)}
                >
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
