'use client';

import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useState } from 'react';
import LoginForm from '~/components/Login/LoginForm';
import { loginBanner } from '~/constants/banner';
import useSize from '~/libs/hooks/useSize';
import logo from '../../../../public/img/logo.png';
import styles from '../../../components/Login/login.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function LoginPage(props: IAppProps) {
    const [theme, setTheme] = useState<boolean>(false);
    const { sizeX } = useSize();

    return (
        <div
            className={`${cx('login-page')} cpmount`}
            style={{
                justifyContent: sizeX < 900 ? 'center' : '',
                alignItems: sizeX < 900 ? 'center' : '',
            }}
        >
            <Image
                src={!theme ? loginBanner[0] : loginBanner[1]}
                alt="ảnh wave trang đăng nhập pestnclean"
                key="wave pestnclean login page"
                width={2000}
                height={2000}
                className={cx('login-img')}
            ></Image>
            {sizeX >= 900 && (
                <div className={cx('content-1')}>
                    <Image
                        src={logo.src}
                        alt="logo pestnclean"
                        width={1000}
                        height={1000}
                        className={cx('logo')}
                    />
                    <div
                        className={cx('quote')}
                        style={{
                            color: !theme ? '#000' : '#fff',
                        }}
                    >
                        <FormatQuoteOutlinedIcon />
                        <h1>Sứ Mệnh Bảo Vệ Môi Trường, Bảo Vệ Sức Khỏe</h1>
                        <p
                            style={{
                                color: !theme ? 'var(--text-black)' : 'rgba(255,255,255,0.8)',
                            }}
                        >
                            PestnClean cam kết mang đến cho bạn không gian sống an toàn, sạch sẽ và thơm mát
                            thông qua dịch vụ mà chúng tôi cung cấp.
                        </p>
                        <div className={cx('decor')}></div>
                    </div>
                </div>
            )}
            <LoginForm theme={theme} setTheme={setTheme} />
        </div>
    );
}
