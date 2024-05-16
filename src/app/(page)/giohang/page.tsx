'use client';

import classNames from 'classnames/bind';
import Cart from '~/components/Cart/Cart';
import CheckoutPanel from '~/components/Cart/CheckoutPanel';
import useSize from '~/libs/hooks/useSize';
import styles from '../../../components/Cart/cart.module.scss';
import React, { useEffect, useState } from 'react';
import Toast from '~/components/Orther/Toast';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function CartPage(props: IAppProps) {
    const { sizeX } = useSize();
    const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const [cart, setCart] = useState<any>(localStorageCart);
    const [showToast, setShowToast] = useState<boolean>(false);

    return (
        <div
            className={'w-full flex mb-5'}
            style={{
                flexDirection: sizeX <= 800 ? 'column' : 'row',
                borderBottom: sizeX <= 800 ? '' : 'solid 1.5px rgba(0,0,0,0.4)',
                borderTop: 'solid 1.5px rgba(0,0,0,0.4)',
            }}
        >
            <Cart cart={cart} setCart={setCart} />
            <CheckoutPanel
                cartOrder={cart.filter((item: any) => item.checked === true)}
                setCart={setCart}
                setShowToast={setShowToast}
            />
            <Toast
                rule="error"
                text="Chọn sản phẩm để thay toán"
                showToast={showToast}
                setShowToast={setShowToast}
            />
        </div>
    );
}
