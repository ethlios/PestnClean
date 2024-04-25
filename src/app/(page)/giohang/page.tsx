'use client';

import classNames from 'classnames/bind';
import BuyItem from '~/components/Cart/BuyItem';
import CheckoutPanel from '~/components/Cart/CheckoutPanel';
import useSize from '~/libs/hooks/useSize';
import styles from '../../../components/Cart/cart.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function CartPage(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={'w-full flex mb-5'}
             style={{
                 flexDirection: sizeX <= 800 ? 'column' : 'row',
                 borderBottom: sizeX <= 800 ? '' : 'solid 1.5px rgba(0,0,0,0.4)',
                 borderTop: 'solid 1.5px rgba(0,0,0,0.4)',
             }}
        >
            <BuyItem />
            <CheckoutPanel />
        </div>
    );
}
