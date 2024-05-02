'use client';

import classNames from 'classnames/bind';
import Cart from '~/components/Cart/Cart';
import CheckoutPanel from '~/components/Cart/CheckoutPanel';
import useSize from '~/libs/hooks/useSize';
import styles from '../../../components/Cart/cart.module.scss';
import { useEffect, useState } from 'react';
import { tempCart } from '~/constants/cart';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function CartPage(props: IAppProps) {
    const { sizeX } = useSize();
    const [cart, setCart] = useState<any>([]);

    useEffect(() => {
        const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(localStorageCart);
    }, [cart]);

    return (
        <div className={'w-full flex mb-5'}
             style={{
                 flexDirection: sizeX <= 800 ? 'column' : 'row',
                 borderBottom: sizeX <= 800 ? '' : 'solid 1.5px rgba(0,0,0,0.4)',
                 borderTop: 'solid 1.5px rgba(0,0,0,0.4)',
             }}
        >
            <Cart cart={cart} setCart={setCart} />
            <CheckoutPanel cart={cart} />
        </div>
    );
}
