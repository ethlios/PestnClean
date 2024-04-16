import classNames from 'classnames/bind';
import styles from './payment.module.scss';
import { Button } from '@mui/material';
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DiscountCode from '~/components/Cart/DiscountCode';
import SummaryProduct from '~/components/Cart/Payment/SummaryProduct';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function CheckoutPanel(props: IAppProps) {
    return (
        <div className="shadow rounded p-3">
            <div className={cx('panel')}>
                {/*Discount code*/}
                <DiscountCode />
                {/*Summary*/}
                <div className={'my-3'}>
                    <h3 className={cx('title')}>Tóm tắt đơn hàng</h3>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <SummaryProduct key={index} />
                    ))}
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
                        <Button variant="contained" fullWidth>
                            Đặt hàng
                        </Button>
                    </div>
                </div>
                {/*Back to cart*/}
                <div className={'my-3'}>
                    <Link href={'/giohang'} className={'inline-flex items-center'}>
                        <ArrowBackIosIcon />
                        <h1 className={'font-bold'}>Trở lại giỏ hàng</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}