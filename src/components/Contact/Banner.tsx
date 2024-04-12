import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './contact.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BannerContactPage(props: IAppProps) {
    return <div className={cx('banner')}></div>;
}
