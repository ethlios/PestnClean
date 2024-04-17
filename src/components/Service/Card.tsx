'use client';

import classNames from 'classnames/bind';
import styles from './service.module.scss';
import Image from 'next/image';
import { Button } from '@mui/material';
import ButtonCommon from '../Orther/Button';

const cx = classNames.bind(styles);

export interface IAppProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    title?: string;
    path?: string;
}

export default function Card({ src, alt, width = 1680, height = 1050, title, path }: IAppProps) {
    return (
        <div className={cx('card')}>
            {/* <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={'w-full rounded-xl bg-white mb-2'}
            /> */}
            <div className={cx('card-img')}></div>
            <p
                style={{
                    margin: '10px 0',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '-.5px',
                    fontSize: '15px',
                }}
            >
                {title}
            </p>
            <ButtonCommon text="XEM THÊM" path={path}></ButtonCommon>
        </div>
    );
}
