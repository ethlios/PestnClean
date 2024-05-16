'use client';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { FormControlLabel } from '@mui/material';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import MaterialUISwitch from '~/common/Mui/MuiSwitch';
import text2 from '../../../public/img/text-2.png';
import text1 from '../../../public/img/text.png';
import styles from './login.module.scss';
import useSize from '~/libs/hooks/useSize';
import { signIn } from 'next-auth/react';

const cx = classNames.bind(styles);

export interface IAppProps {
    theme: boolean;
    setTheme: any;
}

const textList = [text1.src, text2.src];

export default function LoginForm({ theme, setTheme }: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div
            className={cx('content-2')}
            style={{
                width:
                    sizeX < 480
                        ? '100%'
                        : sizeX < 600
                          ? '80%'
                          : sizeX < 700
                            ? '70%'
                            : sizeX < 900
                              ? '60%'
                              : sizeX < 1150
                                ? '50%'
                                : '',
                position: sizeX < 900 ? 'absolute' : 'fixed',
                right: sizeX < 900 ? 'auto' : '',
            }}
        >
            <div
                className={cx('login-wrapper')}
                style={{
                    backgroundColor: !theme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.3)',
                }}
            ></div>
            <div
                className={cx('login-form')}
                style={{
                    padding: sizeX < 480 ? '20px 30px' : sizeX < 1024 ? '20px 50px' : '',
                }}
            >
                <div className={cx('form-header')}>
                    {/* Back home */}
                    <Link href="/" className={cx('back-home')}>
                        <div
                            className={cx('back-1')}
                            style={{
                                color: !theme ? '#000' : '#fff',
                            }}
                        >
                            <KeyboardBackspaceOutlinedIcon />
                            <b>Trở lại Trang chủ</b>
                        </div>
                        <div className={cx('back-decor')}></div>
                    </Link>

                    {/* Mui theme */}
                    <div className={cx('theme')}>
                        <FormControlLabel
                            control={
                                <MaterialUISwitch
                                    sx={{ m: 1 }}
                                    value={theme}
                                    onChange={() => setTheme(!theme)}
                                />
                            }
                            label=""
                        />
                    </div>
                </div>
                <Image
                    src={!theme ? textList[0] : textList[1]}
                    alt="WELCOME TO PESTNCLEAN"
                    width={800}
                    height={800}
                    className={cx('login-title')}
                />
                <p
                    style={{
                        color: !theme ? 'var(--text-black)' : 'rgba(255,255,255,0.8)',
                        width: '100%',
                    }}
                >
                    Đăng nhập để đặt hàng trực tiếp trên Website và có cơ hội nhận nhiều ưu đãi hấp dẫn!
                </p>
                {/* <div
                    className={cx('input-list')}
                    style={{
                        color: !theme ? '' : '#fff',
                    }}
                >
                    <input
                        type="email"
                        placeholder="Email..."
                        className={cx({
                            blackTheme: !theme,
                            whiteTheme: theme,
                        })}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu..."
                        className={cx({
                            blackTheme: !theme,
                            whiteTheme: theme,
                        })}
                    />
                    <button
                        className={cx({
                            btnBlack: !theme,
                            btnWhite: theme,
                        })}
                    >
                        Đăng nhập
                    </button>
                </div>
                <div className={cx('or-decor')}>
                    <div
                        className={cx('hr-decor')}
                        style={{
                            backgroundColor: !theme ? '#000' : '#fff',
                        }}
                    ></div>
                    <p
                        style={{
                            color: !theme ? 'var(--text-black)' : 'rgba(255,255,255,0.8)',
                            transition: 'all ease .5s',
                        }}
                    >
                        HOẶC
                    </p>
                    <div
                        className={cx('hr-decor')}
                        style={{
                            backgroundColor: !theme ? '#000' : '#fff',
                        }}
                    ></div>
                </div>
                <p
                    style={{
                        color: !theme ? 'var(--text-black)' : 'rgba(255,255,255,0.8)',
                        transition: 'all ease .5s',
                    }}
                >
                    Chưa có tài khoản?{' '}
                    <b>
                        <u>
                            <i>Tạo tài khoản.</i>
                        </u>
                    </b>
                </p> */}
                <div className={cx('button-list')}>
                    <button
                        style={{
                            color: !theme ? '' : 'rgba(255,255,255,0.8)',
                        }}
                        onClick={() =>
                            signIn('google', {
                                redirect: true,
                                callbackUrl: '/',
                            })
                        }
                    >
                        <GoogleIcon />
                        Đăng nhập với Gmail
                    </button>
                    {/* <button
                        style={{
                            color: !theme ? '' : 'rgba(255,255,255,0.8)',
                        }}
                    >
                        <FacebookOutlinedIcon />
                        Đăng nhập với Facebook
                    </button> */}
                </div>
            </div>
        </div>
    );
}
