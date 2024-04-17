'use client';

import classNames from 'classnames/bind';
import styles from './payment.module.scss';
import { Button } from '@mui/material';
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DiscountCode from '~/components/Cart/DiscountCode';
import SummaryProduct from '~/components/Cart/Payment/SummaryProduct';
import ButtonCommon from '~/components/Orther/Button';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function CheckoutPanel(props: IAppProps) {
    return (
        <div className={cx('panel')}>
            {/*Discount code*/}
            <DiscountCode />
            {/*Summary*/}
            <div className={'my-5'}>
                <p className={cx('title')}>Tóm tắt đơn hàng</p>
                {Array.from({ length: 3 }).map((_, index) => (
                    <SummaryProduct key={index} />
                ))}
                <div className={cx('hr-decor')}></div>
                <div className={`${cx('total-price')} flex justify-between items center`}>
                    <span>6 Sản phẩm</span>
                    <p>
                        4.400.000 <u>đ</u>
                    </p>
                </div>
                <div className={`${cx('total-price')} flex justify-between items center`}>
                    <span>Phí vận chuyển</span>
                    <p>
                        0 <u>đ</u>
                    </p>
                </div>
                <div className={`${cx('total-price')} flex justify-between items center`}>
                    <span>Mã giảm giá</span>
                    <p>
                        0 <u>đ</u>
                    </p>
                </div>
            </div>
            {/*Payment*/}
            <div className={cx('hr-decor')}></div>
            <div className={`${cx('total-price')} flex justify-between items center`}>
                <span>Tổng cộng</span>
                <p>
                    4.400.000 <u>đ</u>
                </p>
            </div>
            <div className="my-5">
                <ButtonCommon text="ĐẶT HÀNG" fullWidth />
            </div>

            {/*Back to cart*/}
            <div className={'my-3'}>
                <Link href={'/giohang'} className={`${cx('back-cart')} inline-flex items-center`}>
                    <ArrowBackIosIcon />
                    <h1 className={'font-500'}>Trở lại giỏ hàng</h1>
                </Link>
            </div>
        </div>
    );
}
