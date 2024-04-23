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
    description?: string;
}

export default function Card({ src, alt, width = 1680, height = 1050, title, path, description }: IAppProps) {
    return (
        <div className={cx('card')}>
            <div className={cx('card-img-wrapper')}>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={`${cx('card-img')} w-full rounded-xl bg-white mb-2`}
                    draggable={false}
                />
            </div>

            <p
                style={{
                    margin: '10px 0 5px 0',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '-.5px',
                    fontSize: '16px',
                }}
            >
                {title}
            </p>
            <p
                style={{
                    margin: '5px 0 10px 0',
                    fontWeight: 600,
                    letterSpacing: '-.5px',
                    fontSize: '14.5px',
                    color: 'var(--text-black)',
                }}
            >
                {description}
            </p>
            <ButtonCommon text="XEM THÊM" path={path}></ButtonCommon>
        </div>
    );
}
