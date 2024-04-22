'use client';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import classNames from 'classnames/bind';
import Link from 'next/link';
import DiscountCode from '~/components/Cart/DiscountCode';
import ButtonCommon from '../Orther/Button';
import styles from './cart.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function CheckoutPanel(props: IAppProps) {
    return (
        <div className="shadow-lg rounded-md p-3">
            <div className={cx('panel')}>
                {/*Discount code*/}
                <DiscountCode />
                {/* Shipping method */}
                {/* <Shipping /> */}
                {/*Summary*/}
                <div className={'my-5'}>
                    <p className={`${cx('title')} mb-3`}>Tóm tắt đơn hàng</p>
                    <div className={'*:flex *:justify-between *:items center'}>
                        <div className={cx('total-price')}>
                            <span>4 Sản phẩm</span>
                            <p>
                                4.400.000 <u>đ</u>
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
                        4.400.000 <u>đ</u>
                    </p>
                </div>
                <div className="my-5">
                    <Link href={'/giohang/thanhtoan'}>
                        <ButtonCommon text="THANH TOÁN" fullWidth />
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
