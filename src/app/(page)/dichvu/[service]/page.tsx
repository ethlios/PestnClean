import Link from 'next/link';
import React from 'react';
import classNames from 'classnames/bind';
import styles from '~/components/Service/Detail/ServiceDetail.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import ServiceDetails from '~/components/Service/Detail/ServiceDetail';
import ServiceComment from '~/components/Service/Detail/ServiceComment';
import ServiceSuggest from '~/components/Service/Detail/ServiceSuggest';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ServiceDetail(props: IAppProps) {
    return (
        <div className={'container'}>
            <div className={cx('link')}>
                <Link href="/">Trang chủ</Link>
                <p>|</p>
                <p>Dịch vụ</p>
                <p>|</p>
                <p>Chi tiết</p>
            </div>
            <div className={cx('decoration')}></div>
            <ServiceBanner />
            <ServiceDetails />

            {/* comment & suggest */}
            <div className={cx('blogs-last')}>
                <ServiceComment />
                <ServiceSuggest />
            </div>
        </div>
    );
}
