'use client';

import classNames from 'classnames/bind';
import CheckoutPanel from '~/components/Cart/Payment/CheckoutPanel';
import PaymentForm from '~/components/Cart/Payment/PaymentForm';
import styles from '../../../../components/Cart/Payment/payment.module.scss';
import Tippy from '@tippyjs/react';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function PaymentPage(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={'cpmount'}
             style={{ padding: sizeX < 768 ? '0 20px' : sizeX < 1100 ? '0 50px' : sizeX < 1280 ? '0 80px' : '0 100px' }}>
            {/*Main*/}
            <div className={cx('progress-wrapper')}>
                <div className={cx('progress')}>
                    <div className={cx('progress-complete')}></div>
                    <Tippy content="Giỏ hàng">
                        <div className={cx('dot-1')}></div>
                    </Tippy>

                    <Tippy content="Thanh toán">
                        <div className={cx('dot-2')}>
                            <div className={cx('dot-current')}></div>
                        </div>
                    </Tippy>
                    <Tippy content="Hoàn thành">
                        <div className={cx('dot-3')}></div>
                    </Tippy>
                </div>
            </div>
            <div
                className={'grid grid-cols-12 gap-6 mb-10'}
                style={{
                    padding: sizeX < 768 && sizeX > 640 ? '0 60px' : sizeX < 1050 ? '' : '0 100px',
                }}
            >
                {/*Visual Content*/}
                <div className={'col-span-12 md:col-span-7 lg:col-span-8 flex flex-col'}>
                    {/*Form*/}
                    <PaymentForm />
                </div>
                <div className={'col-span-12 md:col-span-5 lg:col-span-4'}>
                    {/*Checkout panel*/}
                    <CheckoutPanel />
                </div>
            </div>
        </div>
    );
}
