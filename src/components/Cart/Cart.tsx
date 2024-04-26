'use client';

import classNames from 'classnames/bind';
import useSize from '~/libs/hooks/useSize';
import styles from './cart.module.scss';
import CartItem from '~/components/Cart/CartItem';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
    priceDefault: number | null;
    currency: string;
    category: string;
    src: string;
}

const tempCartItem: CartItem[] = [
    {
        id: 1,
        name: 'Bả bẫy mối XTERM',
        quantity: 1,
        price: 945000,
        priceDefault: 1000000,
        currency: 'đ',
        category: 'Sản phẩm kiểm soát côn trùng',
        src: '',
    },
    {
        id: 2,
        name: 'Tinh dầu Chanh Viet Oils',
        quantity: 1,
        price: 1062500,
        priceDefault: 1997500,
        currency: 'đ',
        category: 'Sản phẩm giải pháp vệ sinh',
        src: '',
    },
    {
        id: 3,
        name: 'Hóa chất tẩy kính',
        quantity: 2,
        price: 315000,
        priceDefault: null,
        currency: 'đ',
        category: 'Sản phẩm dịch vụ vệ sinh',
        src: '',
    },
    {
        id: 4,
        name: 'Thuốc diệt kiến',
        quantity: 2,
        price: 300000,
        priceDefault: null,
        currency: 'đ',
        category: 'Sản phẩm kiểm soát côn trùng',
        src: '',
    },
];

export interface IAppProps {
}

export default function Cart(props: IAppProps) {
    const { sizeX } = useSize();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        setCartItems(tempCartItem);
    }, []);

    return (
        <div className={'flex flex-col'}
             style={{
                 height: sizeX <= 800 ? '480px' : 'calc(100vh - 60px)',
                 width: sizeX <= 800 ? '100vw' : 'calc(100% - 350px)',
                 padding: sizeX <= 600 ? '0 0 1px 0' : '',
                 justifyContent: cartItems.length === 0 ? 'center' : 'normal',
                 alignItems: cartItems.length === 0 ? 'center' : 'normal',
             }}
        >
            {cartItems.length === 0 ? (
                <div
                    style={{
                        fontWeight: '500',
                    }}
                >
                    Giỏ hàng trống!
                </div>
            ) : (
                <div className={'w-full h-full flex flex-col overflow-scroll'}>
                    {cartItems.map((item) => {
                        return (
                            <CartItem key={item.id} item={item} />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
