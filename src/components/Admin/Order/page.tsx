import * as React from 'react';
import classNames from 'classnames/bind';
import styles from '../admin.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AdminOder(props: IAppProps) {
    return (
        <div className={cx('common-wrapper')}>
            <div className={cx('email-header')}>
                <p>Order: </p>
            </div>
            <div className={cx('common-item-wrapper')} style={{ marginTop: '20px' }}></div>
        </div>
    );
}
