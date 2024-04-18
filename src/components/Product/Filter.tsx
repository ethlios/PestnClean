'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './product.module.scss';
import useScroll from '~/libs/hooks/useScroll';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function FilterProduct(props: IAppProps) {
    const wheel: boolean = useScroll();

    return (
        <div
            className={cx('product-filter')}
            style={{
                top: wheel ? '10px' : '70px',
            }}
        ></div>
    );
}
