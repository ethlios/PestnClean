'use client';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import classNames from 'classnames/bind';
import Link from 'next/link';
import DiscountCode from '~/components/Cart/DiscountCode';
import SummaryProduct from '~/components/Cart/Payment/SummaryProduct';
import ButtonCommon from '~/components/Orther/Button';
import styles from './payment.module.scss';
import formatter from '~/libs/orthers/formatMoney';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);

export interface IAppProps {
    cart?: any;
    handleSubmit?: any;
}

export default function CheckoutPanel({ cart, handleSubmit }: IAppProps) {
    const totalAmount = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

    return (
        <div className={cx('panel')}>
            {/*Discount code*/}
            <DiscountCode />
            {/*Summary*/}
            <div className={'my-5'}>
                <p className={cx('title')}>Tóm tắt đơn hàng</p>
                {cart.map((item: any, index: number) => (
                    <SummaryProduct key={index} item={item} />
                ))}
                <div className={cx('hr-decor')}></div>
                <div className={'*:flex *:justify-between *:items center'}>
                    <div className={cx('total-price')}>
                        <span>{totalAmount} Sản phẩm</span>
                        <p>{formatter.format(+totalPrice)}</p>
                    </div>
                    <div className={cx('total-price')}>
                        <span>Phí vận chuyển</span>
                        <p>{formatter.format(0)}</p>
                    </div>
                    <div className={cx('total-price')}>
                        <span>Mã giảm giá</span>
                        <p>{formatter.format(0)}</p>
                    </div>
                </div>
            </div>
            {/*Payment*/}
            <div className={cx('hr-decor')}></div>
            <div className={`${cx('total-price')} flex justify-between items center`}>
                <span>Tổng cộng</span>
                <p>{formatter.format(+totalPrice)}</p>
            </div>
            <div className="my-5">
                {/*<ButtonCommon text="ĐẶT HÀNG" fullWidth />*/}
                <Button color="primary" variant="contained" fullWidth onClick={handleSubmit}>
                    ĐẶT HÀNG
                </Button>
            </div>

            {/*Back to cart*/}
            <div className={'my-3'}>
                <Link href={'/giohang'} className={`${cx('back-cart')} inline-flex items-center`}>
                    <ArrowBackIosIcon />
                    <p
                        style={{
                            fontSize: '15px',
                            fontWeight: '600',
                            letterSpacing: '-.5px',
                        }}
                    >
                        Trở lại giỏ hàng
                    </p>
                </Link>
            </div>
        </div>
    );
}
