'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './service.module.scss';
import Image from 'next/image';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function CardHover(props: IAppProps) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className={cx('card-hover')}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            {/* <Image src={''} alt={''} width={1000} height={1000} className={cx('img-wrapper')} /> */}
            <div className={cx('img-wrapper')} />

            <div
                className={cx('card-content')}
                style={{ background: isHover ? 'rgba(0, 0, 0, 0.2)' : 'initial' }}
            >
                <div className={'grid content-end h-full overflow-hidden'}>
                    <h1 className={cx('card-number')}>01.</h1>
                    <div className={cx('decoration')} />
                    <p className={cx('card-title')}>Nhà hàng và chuỗi bán lẻ</p>
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
                                color: 'var(--text-black)',
                            }}
                        >
                            Cung cấp giải pháp kiểm soát côn trùng toàn diện cho các nhà hàng, cơ sở dịch vụ
                            ăn uống, chuỗi bán lẻ, siêu thị … đảm bảo nâng cao sự hài lòng của khách hàng và
                            danh tiếng thương hiệu
                        </p>
                        <Button variant="contained" className={'mt-3'}>
                            Xem thêm
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
