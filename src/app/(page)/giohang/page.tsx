'use client';

import classNames from 'classnames/bind';
import Cart from '~/components/Cart/Cart';
import CheckoutPanel from '~/components/Cart/CheckoutPanel';
import useSize from '~/libs/hooks/useSize';
import styles from '../../../components/Cart/cart.module.scss';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, updateCart } from '~/redux/actions';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function CartPage(props: IAppProps) {
    const { sizeX } = useSize();
    const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const [cart, setCart] = useState<any>([]);
    const { data: session } = useSession();
    const reduxCart = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        //Get cart
        if (session) {
            //Get cart from server when session
            dispatch(getCart(session.user.id));
        } else {
            //Get cart from local storage when no session
            const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
            setCart(localStorageCart);
        }
    }, [session]);

    useEffect(() => {
        //Get cart from redux
        if (session && reduxCart && reduxCart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(reduxCart)); //Save to local storage
            setCart(reduxCart);
        } else {
            //Get cart from local storage when no reduxCart
            setCart(localStorageCart);
        }

        return () => {
            //Send cart to server when unmount
            if (session && cart.length > 0) {
                //Logic here
                //Should use data from localStorage to avoid missing data
            }
        };
    }, [reduxCart]);

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
            <CheckoutPanel cart={cart} />
        </div>
    );
}
