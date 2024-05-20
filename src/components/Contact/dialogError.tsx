import React, { useEffect } from 'react';
import sendEmailImg from '../../../public/img/Asset 1.png';
import Image from 'next/image';
import { Button } from '@mui/material';
import styles from './contact.module.scss';
import classNames from 'classnames/bind';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
    setIsConfirm: any;
    setData: any;
}

export default function DialogError({ setIsConfirm, setData }: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className="cpmount">
            <div className={cx('dialog-wrapper')}>
                <div
                    className={cx('dialog-content')}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        padding: sizeX < 500 ? '20px' : '',
                    }}
                >
                    <Image
                        src={sendEmailImg.src}
                        alt="email pestnclean"
                        width={sizeX < 500 ? 180 : 230}
                        height={230}
                    />
                    <p
                        className={cx('dialog-title')}
                        style={{
                            fontSize: sizeX < 500 ? '16px' : '',
                            textAlign: 'center',
                        }}
                    >
                        Yêu cầu của bạn chưa được gửi thành công!
                    </p>
                    <p
                        className={cx('dialog-text')}
                        style={{
                            fontSize: sizeX < 500 ? '13px' : '',
                        }}
                    >
                        Lỗi được phát sinh từ một vài sự cố nào đó, có thể là trục trặc bên phía máy chủ. Xin
                        vui lòng thử lại sau. Nếu có sự bất tiện nào hãy gọi ngay đến số{' '}
                        <a
                            href="tel:0868363600"
                            style={{
                                textDecoration: '1px underline',
                            }}
                        >
                            0868 36 36 00
                        </a>
                        . Chân thành cảm ơn thái độ làm việc chăm chỉ của bạn!
                    </p>
                    <div className={cx('dialog-button')}>
                        <Button
                            variant="contained"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '600',
                                width: '50%',
                            }}
                            onClick={() => {
                                setData('');
                                setIsConfirm(false);
                            }}
                        >
                            quay Trở lại
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
