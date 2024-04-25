'use client';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useState } from 'react';
import useSize from '~/libs/hooks/useSize';
import styles from './cart.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {
}

const cart = ['', '', '', ''];

export default function BuyItem(props: IAppProps) {
    const [quantity, setQuantity] = useState(1);
    const [showToast, setShowToast] = useState(false);
    const { sizeX } = useSize();

    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        } else {
            setShowToast(true);
        }
    };

    return (
        <div className={'flex flex-col'}
             style={{
                 height: sizeX <= 800 ? '480px' : 'calc(100vh - 60px)',
                 width: sizeX <= 800 ? '100vw' : 'calc(100% - 350px)',
                 padding: sizeX <= 600 ? '0 0 1px 0' : '',
                 justifyContent: cart.length === 0 ? 'center' : 'normal',
                 alignItems: cart.length === 0 ? 'center' : 'normal',
             }}
        >
            {cart.length === 0 ? (
                <div
                    style={{
                        fontWeight: '500',
                    }}
                >
                    Giỏ hàng trống!
                </div>
            ) : (
                <div className={'w-full h-full flex flex-col overflow-scroll'}>
                    {cart.map((list, index) => {
                        return (
                            <div
                                key={index}
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
                                                backgroundImage: ``,
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
                                                Sản phẩm giải pháp vệ sinh
                                            </p>
                                            <p className={cx('product-name')}>Tinh dầu chanh Viet Oils</p>
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
                                            <p className={cx('price')}>
                                                <b>Giá: </b>
                                                1.100.000 <u>đ</u>
                                            </p>
                                            <IconButton>
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
                                        // onClick={() => handleDeleteCart(list[0].id)}
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
                                        {list.length}
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
                                        // onClick={() => handleAddProduct(list[0])}
                                    >
                                        <IconButton>
                                            <AddIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
