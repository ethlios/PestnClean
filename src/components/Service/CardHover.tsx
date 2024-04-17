'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './service.module.scss';
import Image from 'next/image';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function CardHover(props: IAppProps) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className={cx('card-hover')}
             onMouseOver={() => setIsHover(true)}
             onMouseOut={() => setIsHover(false)}
        >
            <Image src={''} alt={''} width={1000} height={1000}
                   className={cx('img-wrapper')}
            />

            <div className={cx('card-content')}
                 style={{ background: isHover ? 'rgba(0, 0, 0, 0.2)' : 'initial' }}
            >
                <div className={'grid content-end h-full'}>
                    <h1 className={cx('card-number')}>01.</h1>
                    <div className={cx('decoration')} />

                    <h1 className={cx('card-title')}>Nhà hàng và chuỗi bán lẽ</h1>

                    {isHover && (
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the standard dummy text ever since the 1500s</p>
                            <Button variant="contained" className={'mt-3'}>Xem thêm</Button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}