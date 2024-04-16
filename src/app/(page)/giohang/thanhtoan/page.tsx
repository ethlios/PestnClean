import classNames from 'classnames/bind';
import styles from '../../../../components/Cart/Payment/payment.module.scss';
import Link from 'next/link';
import CheckoutPanel from '~/components/Cart/Payment/CheckoutPanel';
import PaymentForm from '~/components/Cart/Payment/PaymentForm';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function PaymentPage(props: IAppProps) {
    return (
        <div className={'container'}>
            {/*Header title*/}
            <div className={cx('link')}>
                <Link href="/">Trang chủ</Link>
                <p>|</p>
                <Link href="/cart">Giỏ hàng</Link>
                <p>|</p>
                <Link href="/thanhtoan">Thanh toán</Link>
            </div>
            <div className={cx('decoration')}></div>
            {/*Main*/}
            <div className={'grid grid-cols-12 gap-6 mb-20'}>
                {/*Visual Content*/}
                <div className={'col-span-12 md:col-span-8'}>
                    {/*Form*/}
                    <PaymentForm />
                </div>
                <div className={'col-span-12 md:col-span-4'}>
                    {/*Checkout panel*/}
                    <CheckoutPanel />
                </div>
            </div>
        </div>
    );
}