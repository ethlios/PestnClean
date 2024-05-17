'use client';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import classNames from 'classnames/bind';
import Link from 'next/link';
import ButtonCommon from '../Orther/Button';
import styles from './cart.module.scss';
import useSize from '~/libs/hooks/useSize';
import { useEffect, useState } from 'react';
import formatter from '~/libs/orthers/formatMoney';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const cx = classNames.bind(styles);

export interface IAppProps {
    cartOrder: any;
    setCart: any;
    setShowToast: any;
}

export default function CheckoutPanel({ cartOrder, setCart, setShowToast }: IAppProps) {
    const { sizeX } = useSize();
    const router = useRouter();
    const [totalItem, setTotalItem] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalItem(cartOrder.reduce((acc: any, item: any) => acc + item.quantity, 0));
        setTotalPrice(
            cartOrder.reduce(
                (acc: any, item: any) => acc + item.price * (1 - item.priceSales / 100) * item.quantity,
                0,
            ),
        );
    }, [cartOrder]);

    const handlePayment = () => {
        if (cartOrder.length === 0) {
            setShowToast(true);
        } else {
            localStorage.setItem('cartOrder', JSON.stringify(cartOrder));
            router.push('/giohang/thanhtoan');
        }
    };

    const handleCheckAll = (checked: boolean) => {
        const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const newCart = localStorageCart.map((item: any) => {
            return { ...item, checked: checked };
        });
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart);
    };

    return (
        <div
            style={{
                height: sizeX <= 800 ? 'auto' : 'auto',
                width: sizeX <= 800 ? '100vw' : '350px',
                borderLeft: sizeX <= 800 ? 'none' : 'solid 1.5px rgba(0,0,0,0.4)',
                padding: '25px 20px',
                fontSize: '14px',
                fontWeight: '500',
                marginTop: sizeX <= 800 ? '-10px' : '',
                userSelect: 'none',
            }}
        >
            <div className={cx('panel')}>
                {/*Summary*/}
                <div className={'mb-5'}>
                    <div
                        className={
                            'flex justify-between gap-1 my-2 *:underline *:text-primaryColor *:cursor-pointer'
                        }
                    >
                        <p
                            onClick={() => handleCheckAll(true)}
                            style={{
                                fontWeight: 600,
                                textDecoration: '2px underline',
                                textUnderlineOffset: '4px',
                            }}
                        >
                            Chọn tất cả
                        </p>
                        <p
                            onClick={() => handleCheckAll(false)}
                            style={{
                                fontWeight: 600,
                                textDecoration: '2px underline',
                                textUnderlineOffset: '4px',
                            }}
                        >
                            Bỏ tất cả
                        </p>
                    </div>
                    {cartOrder.length > 0 ? (
                        <>
                            <p className={`${cx('title')} mb-3 mt-6`}>Tóm tắt đơn hàng</p>
                            <div className={'*:flex *:justify-between *:items center'}>
                                <div className={cx('total-price')}>
                                    <span>{totalItem} Sản phẩm</span>
                                    <p>{formatter.format(+totalPrice)}</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p
                            style={{
                                fontWeight: 600,
                            }}
                        >
                            Chọn sản phẩm để thanh toán
                        </p>
                    )}
                </div>
                {/*Payment*/}
                <div className={cx('hr-decor')}></div>

                <div className={`${cx('total-price')} flex justify-between items center`}>
                    <span>Tổng cộng</span>
                    <p>{formatter.format(totalPrice)}</p>
                </div>
                <div className={'my-5 flex flex-col gap-3'}>
                    <button
                        onClick={handlePayment}
                        style={{
                            backgroundColor: 'var(--primary)',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: sizeX < 550 ? '12.5px' : '14px',
                            padding: '8px 14px',
                            borderRadius: '5px',
                            border: 'solid 1.5px var(--primary)',
                            width: '100%',
                            textTransform: 'uppercase',
                        }}
                        className={cx('button-hover')}
                    >
                        Thanh toán
                    </button>
                    <Link href={'/sanpham'}>
                        <ButtonCommon text="TIẾP TỤC MUA SẮM" fullWidth color="secondary" />
                    </Link>
                </div>
                <div className={`${cx('promise')} *:flex *:items-center *:my-1`}>
                    <div>
                        <CreditCardIcon />
                        <p>Thanh toán an toàn</p>
                    </div>
                    <div>
                        <PublishedWithChangesIcon />
                        <p>Đổi trả dễ dàng</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
