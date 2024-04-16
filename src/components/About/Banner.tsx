import * as React from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './about.module.scss';
import EastIcon from '@mui/icons-material/East';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AboutBanner(props: IAppProps) {
    return (
        <div className={`${cx('about-banner')} my-10`}>
            <Image
                src={''}
                alt="giới thiệu pestnclean"
                key="pestnclean about page "
                width={1980}
                className={'w-full bg-gray-200 h-auto md:h-96'}
            />

            <div className={cx('banner-arrow')}>
                <EastIcon />
            </div>
        </div>
    );
}
