'use client';

import classNames from 'classnames/bind';
import styles from '../../../components/Login/login.module.scss';
import Image from 'next/image';
import { loginBanner } from '~/constants/banner';
import logo from '../../../../public/img/logo.png';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import LoginForm from '~/components/Login/LoginForm';
import { useState } from 'react';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function LoginPage(props: IAppProps) {
    const [theme, setTheme] = useState<boolean>(false);

    return (
        <div className={cx('login-page')}>
            <Image
                src={!theme ? loginBanner[0] : loginBanner[1]}
                alt="ảnh wave trang đăng nhập pestnclean"
                key="wave pestnclean login page"
                width={2000}
                height={2000}
                className={cx('login-img')}
            ></Image>
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
                    <h1>Title</h1>
                    <p
                        style={{
                            color: !theme ? 'var(--text-black)' : 'rgba(255,255,255,0.8)',
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className={cx('decor')}></div>
                </div>
            </div>
            <LoginForm theme={theme} setTheme={setTheme} />
        </div>
    );
}
