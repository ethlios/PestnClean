'use client';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import classNames from 'classnames/bind';
import Link from 'next/link';
import DiscountCode from '~/components/Cart/DiscountCode';
import ButtonCommon from '../Orther/Button';
import styles from './cart.module.scss';
import useSize from '~/libs/hooks/useSize';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function CheckoutPanel(props: IAppProps) {
    const { sizeX } = useSize();

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
                <div
                    className="my-5"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
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

            {sizeX <= 800 && (
                <hr
                    style={{
                        border: 'solid 1px rgba(0,0,0,0.5)',
                        margin: '20px 0 0 0',
                    }}
                ></hr>
            )}
        </div>
    );
}
