import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../admin.module.scss';
import { RootState } from '~/redux/provider/store';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AdminDiscount(props: IAppProps) {
    let discounts: any = useSelector((state: RootState) => state.main.discount);

    return (
        <div className={cx('common-wrapper')}>
            <div className={cx('email-header')}>
                <p>Discount: {discounts.length}</p>
            </div>
            <div className={cx('common-item-wrapper')} style={{ marginTop: '20px' }}></div>
        </div>
    );
}
