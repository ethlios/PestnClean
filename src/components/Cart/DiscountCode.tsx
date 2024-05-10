'use client';

import classNames from 'classnames/bind';
import styles from './cart.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { useState } from 'react';

const cx = classNames.bind(styles);

export interface IAppProps {
    setDiscount: any;
}

export default function DiscountCode({ setDiscount }: IAppProps) {
    const allDiscount = useSelector((state: RootState) => state.main.discount);
    const [discountCode, setDiscountCode] = useState<string>('');

    const handleSendCode = () => {
        const discountItem = allDiscount.find((item) => item.code === discountCode);
        if (discountItem) return setDiscount(discountItem.percent);
        return setDiscount(0);
    };

    return (
        <div>
            <p className={cx('title')}>Mã khuyến mãi</p>
            <p className={cx('description')}>Nhập mã khuyến mãi để được giảm giá!</p>
            <div className={cx('input-code')}>
                <input type="text" onChange={(e: any) => setDiscountCode(e.target.value)}></input>
                <button onClick={handleSendCode}>Gửi</button>
            </div>
        </div>
    );
}
