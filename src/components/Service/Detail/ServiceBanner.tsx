import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './ServiceDetail.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ServiceBanner(props: IAppProps) {
    return (
        <div className={cx('banner')}>
            <div className={cx('img')}></div>
            <div className={cx('img-thumbnail')}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
