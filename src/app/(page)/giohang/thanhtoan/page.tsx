import classNames from 'classnames/bind';
import styles from '../../../../components/Cart/Payment/payment.module.scss';
import Link from 'next/link';
import CheckoutPanel from '~/components/Cart/Payment/CheckoutPanel';
import PaymentForm from '~/components/Cart/Payment/PaymentForm';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function PaymentPage(props: IAppProps) {
    return (
        <div className={'container'}>
            {/*Main*/}
            <div className={cx('progress')}></div>
            <div className={cx('checkout-wrapper')}>
                {/*Visual Content*/}
                <div className={cx('checkout-form')}>
                    {/*Form*/}
                    <PaymentForm />
                </div>
                <div className={cx('checkout-detail')}>
                    {/*Checkout panel*/}
                    <CheckoutPanel />
                </div>
            </div>
        </div>
    );
}
