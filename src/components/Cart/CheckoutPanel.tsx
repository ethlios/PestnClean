'use client';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import classNames from 'classnames/bind';
import Link from 'next/link';
import DiscountCode from '~/components/Cart/DiscountCode';
import ButtonCommon from '../Orther/Button';
import styles from './cart.module.scss';
import useSize from '~/libs/hooks/useSize';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

export interface IAppProps {
    cart: string[];
}

export default function CheckoutPanel({ cart }: IAppProps) {
    const { sizeX } = useSize();
    const [totalItem, setTotalItem] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [shipping, setShipping] = useState(0);

    useEffect(() => {
        setTotalItem(cart.reduce((acc, item) => acc + item.quantity, 0));
        setTotalPrice(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    }, [cart]);

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
                {/*Discount code*/}
                <DiscountCode />
                {/*Summary*/}
                <div className={'my-5'}>
                    <p className={`${cx('title')} mb-3`}>Tóm tắt đơn hàng</p>
                    <div className={'*:flex *:justify-between *:items center'}>
                        <div className={cx('total-price')}>
                            <span>{totalItem} Sản phẩm</span>
                            <p>
                                {totalPrice} <u>đ</u>
                            </p>
                        </div>
                        <div className={cx('total-price')}>
                            <span>Phí vận chuyển</span>
                            <p>
                                0 <u>đ</u>
                            </p>
                        </div>
                        <div className={cx('total-price')}>
                            <span>Mã giảm giá</span>
                            <p>
                                0 <u>đ</u>
                            </p>
                        </div>
                    </div>
                </div>
                {/*Payment*/}
                <div className={cx('hr-decor')}></div>

                <div className={`${cx('total-price')} flex justify-between items center`}>
                    <span>Tổng cộng</span>
                    <p>
                        {totalPrice + shipping - discount} <u>đ</u>
                    </p>
                </div>
                <div className={'my-5 flex flex-col gap-3'}>
                    <Link href={'/giohang/thanhtoan'}>
                        <ButtonCommon text="THANH TOÁN" fullWidth />
                    </Link>
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
