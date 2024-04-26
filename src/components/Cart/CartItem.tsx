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

const cx = classNames.bind(styles);

export interface IAppProps {
    item: string[];
    setCart: (cart: string[]) => void;
}

export default function CartItem({ item, setCart }: IAppProps) {
    const [amount, setAmount] = useState(item.quantity);
    const { sizeX } = useSize();

    const onchangeAmount = (id: number, quantity: number) => {
        setAmount(quantity);
        const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
        localStorageCart.find((item: any) => item.id === id).quantity = quantity;
        setCart(localStorageCart);
    };

    const onchangeDelete = (id: number) => {
        const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const newCart = localStorageCart.filter((item: any) => item.id !== id);
        setCart(newCart);
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
                <Link href={``}>
                    <div
                        style={{
                            backgroundImage: item.src,
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
                    ></div>
                </Link>
                <div className={'flex flex-col justify-between'}
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
                        <p className={cx('product-category')}>
                            {item.category}
                        </p>
                        <p className={cx('product-name')}>{item.name}</p>
                        <ul className={cx('cart-list')}>
                            <li>
                                <p>Dung tích:</p>
                            </li>
                            <li>
                                <p>Thành phần:</p>
                            </li>
                            <li>
                                <p>Xuất sứ:</p>
                            </li>
                        </ul>
                    </div>
                    <div className={'w-full flex justify-between items-center'}
                         style={{
                             height: '15px',
                         }}
                    >
                        <div className={'flex gap-3'}>
                            <p className={cx('price')}>
                                <b>Giá: </b>
                                {item.price * amount} <u>{item.currency}</u>
                            </p>
                            {amount > 1 && (
                                <p className={cx('price-default')}>
                                    ({item.price} <u>{item.currency}</u>)
                                </p>
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
                <div className={'flex justify-center items-center'}
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