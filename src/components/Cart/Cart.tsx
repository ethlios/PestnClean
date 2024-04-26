'use client';

import classNames from 'classnames/bind';
import useSize from '~/libs/hooks/useSize';
import styles from './cart.module.scss';
import CartItem from '~/components/Cart/CartItem';
import { useState, useEffect } from 'react';
import { tempCart } from '~/constants/cart';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function Cart(props: IAppProps) {
    const { sizeX } = useSize();
    const [cart, setCart] = useState(tempCart);

    useEffect(() => {
        setCart(tempCart);
    }, []);

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
                    {cart.map((item) => {
                        return (
                            <CartItem key={item.id} item={item} />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
