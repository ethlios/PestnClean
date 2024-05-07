'use client';

import classNames from 'classnames/bind';
import CheckoutPanel from '~/components/Cart/Payment/CheckoutPanel';
import PaymentForm from '~/components/Cart/Payment/PaymentForm';
import styles from '../../../../components/Cart/Payment/payment.module.scss';
import Tippy from '@tippyjs/react';
import useSize from '~/libs/hooks/useSize';
import React, { useRef, useState } from 'react';
import DialogConfirm from '~/components/Cart/Payment/DialogConfirm';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function PaymentPage(props: IAppProps) {
    const { sizeX } = useSize();
    const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const [totalAllPrice, setTotalAllPrice] = useState<number>(0);
    const [cart, setCart] = useState<any>(localStorageCart);
    const [formData, setFormData] = useState<any>();
    const formInfoRef = useRef<any>('');
    const [showDialog, setShowDialog] = useState<boolean>(false);

    const handleSubmit = () => {
        if (formInfoRef.current.checkValidity() && cart.length > 0) {
            setShowDialog(true);
        } else {
            formInfoRef.current.reportValidity();
        }
    };

    return (
        <div
            className={'cpmount'}
            style={{
                padding:
                    sizeX < 768 ? '0 20px' : sizeX < 1100 ? '0 50px' : sizeX < 1280 ? '0 80px' : '0 100px',
            }}
        >
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
            {/*Dialog*/}
            {showDialog && (
                <DialogConfirm
                    setShowDialog={setShowDialog}
                    formData={formData}
                    cart={cart}
                    totalAllPrice={totalAllPrice}
                    formInfoRef={formInfoRef}
                />
            )}
            {/*Content*/}
            <div
                className={'grid grid-cols-12 gap-6 mb-10'}
                style={{
                    padding: sizeX < 768 && sizeX > 640 ? '0 60px' : sizeX < 1050 ? '' : '0 100px',
                }}
            >
                {/*Visual Content*/}
                <div className={'col-span-12 md:col-span-7 lg:col-span-8 flex flex-col'}>
                    {/*Form*/}
                    <PaymentForm formInfoRef={formInfoRef} setFormData={setFormData} />
                </div>
                <div className={'col-span-12 md:col-span-5 lg:col-span-4'}>
                    {/*Checkout panel*/}
                    <CheckoutPanel
                        cart={cart}
                        handleSubmit={handleSubmit}
                        setTotalAllPrice={setTotalAllPrice}
                    />
                </div>
            </div>
        </div>
    );
}
