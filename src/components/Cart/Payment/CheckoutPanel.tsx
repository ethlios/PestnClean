'use client';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import classNames from 'classnames/bind';
import Link from 'next/link';
import DiscountCode from '~/components/Cart/DiscountCode';
import SummaryProduct from '~/components/Cart/Payment/SummaryProduct';
import styles from './payment.module.scss';
import formatter from '~/libs/orthers/formatMoney';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';
import { addOrder, orderBehavior } from '~/redux/actions';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
    cart?: any;
    formData?: any;
    formInfoRef?: any;
    setShowDialog?: any;
    setShowToast?: any;
}

export default function CheckoutPanel({
    cart,
    formData,
    formInfoRef,
    setShowDialog,
    setShowToast,
}: IAppProps) {
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const [admin, setAdmin] = useState<any>(); // admin info
    const [discount, setDiscount] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const totalAmount = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);
    const totalProductPrice = cart.reduce(
        (acc: number, item: any) => acc + (item.priceSales || item.price) * item.quantity,
        0,
    );
    const { sizeX } = useSize();

    useEffect(() => {
        setTotalPrice(totalProductPrice * (1 - discount / 100));
    }, [discount, totalProductPrice]);

    useEffect(() => {
        const fetchAdmin = async () => {
            await fetch('/api/user/all/ruleAdmin')
                .then((res) => res.json())
                .then((data) => setAdmin(data[0]));
        };
        fetchAdmin();
    }, []);

    const order = {
        authorId: admin?.id,
        userId: session?.user.id,
        name: formData?.name,
        email: formData?.email,
        phone: formData?.phone,
        address: formData?.address,
        city: formData?.city,
        district: formData?.district,
        ward: formData?.ward,
        message: formData?.message,
        payment: String(totalPrice),
        paymentMethod: 'Thanh toán khi nhận hàng',
        product: JSON.stringify(cart),
        discount: discount,
    };

    const handleSubmit = () => {
        if (formInfoRef.current.reportValidity()) {
            if (cart.length > 0) {
                dispatch(orderBehavior('0'));
                dispatch(addOrder(order));
                setShowDialog(true);
            } else {
                setShowToast(true);
            }
        } else {
            formInfoRef.current.reportValidity();
        }
    };

    return (
        <div className={cx('panel')}>
            {/*Discount code*/}
            <DiscountCode setDiscount={setDiscount} />
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
                        <p>{formatter.format(+totalProductPrice)}</p>
                    </div>
                    <div className={cx('total-price')}>
                        <span>Phí vận chuyển</span>
                        <p>{formatter.format(0)}</p>
                    </div>
                    <div className={cx('total-price')}>
                        <span>Mã giảm giá</span>
                        <p>{formatter.format(+(totalProductPrice * (discount / 100)))}</p>
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
                <button
                    onClick={handleSubmit}
                    style={{
                        backgroundColor: 'var(--primary)',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: sizeX < 550 ? '12.5px' : '14px',
                        padding: '8px 14px',
                        borderRadius: '5px',
                        border: 'solid 1.5px var(--primary)',
                        width: '100%',
                    }}
                    className={cx('button-hover')}
                >
                    ĐẶT HÀNG
                </button>
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
