import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './blogDetail.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogsBanner(props: IAppProps) {
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
