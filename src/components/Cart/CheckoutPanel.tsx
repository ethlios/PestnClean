import classNames from 'classnames/bind';
import styles from './cart.module.scss';
import Link from 'next/link';
import { Button } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import Shipping from '~/components/Cart/Shipping';
import DiscountCode from '~/components/Cart/DiscountCode';

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
                <Shipping />
                {/*Summary*/}
                <div className={'my-3'}>
                    <h3 className={cx('title')}>Tóm tắt đơn hàng</h3>
                    <div className="flex justify-between items center mt-2">
                        <span>
                            <b>4</b> Sản phẩm
                        </span>
                        <b>
                            4.400.000 <span className={cx('currency')}>đ</span>
                        </b>
                    </div>
                    <div className="flex justify-between items center">
                        <span>Phí vận chuyển</span>
                        <b>
                            0 <span className={cx('currency')}>đ</span>
                        </b>
                    </div>
                    <div className="flex justify-between items center">
                        <span>Mã giảm giá</span>
                        <b>
                            0 <span className={cx('currency')}>đ</span>
                        </b>
                    </div>
                </div>
                {/*Payment*/}
                <div className={'my-3 pt-2 border-t-2'}>
                    <div className="flex justify-between items center">
                        <span>Tổng cộng</span>
                        <b>
                            4.400.000 <span className={cx('currency')}>đ</span>
                        </b>
                    </div>
                    <div className="my-2">
                        <Link href={'/giohang/thanhtoan'}>
                            <Button variant="contained" fullWidth>
                                Thanh toán
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <div className="flex items-center my-1">
                            <CreditCardIcon />
                            <b className={'underline ml-2'}>Thanh toán an toàn</b>
                        </div>
                        <div className="flex items-center my-1">
                            <PublishedWithChangesIcon />
                            <b className={'underline ml-2'}>Đổi trả dễ dàng</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}