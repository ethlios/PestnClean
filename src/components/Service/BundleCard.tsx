'use client';

import classNames from 'classnames/bind';
import { useRef } from 'react';
import useSize from '~/libs/hooks/useSize';
import styles from './service.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {
    children: React.ReactNode;
    className?: string;
}

export default function BundleCard(props: IAppProps) {
    const ref = useRef<any>();
    const { sizeX } = useSize();

    return (
        <div className={props.className} ref={ref} style={{ padding: sizeX < 500 ? '15px' : '' }}>
            <div className={cx('bundle-card')}>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 fix:grid-cols-3 gap-6'}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
