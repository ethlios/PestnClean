'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './service.module.scss';
import Image from 'next/image';
import { Button } from '@mui/material';
import { usePathname } from 'next/navigation';
import ButtonCommon from '../Orther/Button';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
    id?: number;
    title?: string;
    description?: string;
    path?: string;
    src: string;
    alt: string;
}

export default function CardHover({ title, description, path, id, src, alt }: IAppProps) {
    const [isHover, setIsHover] = useState(false);
    const { sizeX } = useSize();

    const pathname = usePathname();

    return (
        <div
            className={cx('card-hover')}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <Image src={src} alt={alt} width={1000} height={1000} className={cx('img-wrapper')} />

            <div
                className={cx('card-content')}
                style={{ background: isHover ? 'rgba(0, 0, 0, 0.6)' : 'initial' }}
            >
                <div className={'grid content-end h-full overflow-hidden'}>
                    <h1 className={cx('card-number')}>0{id}.</h1>
                    <div className={cx('decoration')} />
                    <p className={cx('card-title')}>{title}</p>
                    <div
                        style={{
                            height: isHover ? '180px' : '0px',
                            transition: 'all ease .5s',
                        }}
                    >
                        <p
                            style={{
                                fontSize: '14.2px',
                                fontWeight: '600',
                                marginBottom: '10px',
                                color: '#fff',
                            }}
                        >
                            {description}
                        </p>
                        <div
                            style={{
                                marginLeft: '2px',
                            }}
                        >
                            {pathname !== '/dichvu/giai-phap-ve-sinh' && (
                                <ButtonCommon text="Xem thêm" path={path} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
