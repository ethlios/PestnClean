'use client';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Checkbox } from '@mui/material';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useState } from 'react';
import menImg from '../../../public/img/men.jpg';
import logo from '../../../public/img/logo.png';
import styles from './footer.module.scss';
import ButtonCommon from '~/components/Orther/Button';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const cx = classNames.bind(styles);

export interface FooterProps {
}

export default function Footer(props: FooterProps) {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div>
            {/* Email Register */}
            <div className={cx('banner-footer')}>
                <Image
                    src={menImg.src}
                    alt="hinh anh PESTNCLEAN"
                    width={2000}
                    height={2000}
                    className={cx('banner-img')}
                />
                <div className={cx('img-black')}></div>
                <div className={cx('banner-content')}>
                    <h1>CẬP NHẬT TIN TỨC</h1>
                    <div className={cx('banner-input')}>
                        <input type="email" placeholder="Địa chỉ email..."></input>
                        <div className={cx('banner-btn')}>
                            <p>ĐĂNG KÝ</p>
                            <ChevronRightIcon />
                        </div>
                    </div>
                    <div className={cx('check')}>
                        {/* <input type="checkbox" /> */}
                        <Checkbox
                            required
                            color="secondary"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            sx={{
                                color: '#fff',
                            }}
                        />
                        <p onClick={() => setChecked(!checked)}>
                            Luôn cập nhật cho tôi tin tức mới nhất về các sản phẩm và sự kiện của PETSNCLEAN.
                        </p>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className={'container ' + cx('footer')}>
                <div className={cx('footer-head')}>
                    <Image alt="Logo công ty PESTNCLEAN" src={logo.src} width={176} height={100} />
                    <ButtonCommon text="Liên hệ" path="lienhe" />
                </div>
                <div className={cx('footer-main')}>
                    <div className={cx('infor')}>
                        <Link
                            href="https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Callary/@10.7867988,106.6823308,17z/data=!4m6!3m5!1s0x31752f2c53afffff:0xf831d8aaee883f90!8m2!3d10.7867988!4d106.6849057!16s%2Fg%2F11j00srjjz?entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <b>Địa chỉ:</b> Lầu 8, 123 Lý Chính Thắng, P. Võ Thị Sáu, Q.3
                        </Link>
                        <Link href="tel:0868363600" target="_blank" rel="noopener noreferrer">
                            <b>Điện thoại:</b> 0868 36 36 00
                        </Link>
                        <Link href="mailto:sales@pestnclean.vn" target="_blank" rel="noopener noreferrer">
                            <b>Email:</b> sales@pestnclean.vn
                        </Link>
                        <div className={cx('social')}>
                            <Link href={''} className="opacity">
                                <FacebookIcon />
                            </Link>
                            <Link href={''} className="opacity">
                                <LinkedInIcon />
                            </Link>
                            <Link href={''} className="opacity">
                                <YouTubeIcon />
                            </Link>
                            <Link href={''} className="opacity">
                                <InstagramIcon />
                            </Link>
                        </div>
                    </div>
                    <div className={cx('dichvu')}>
                        <p className={cx('title')}>DỊCH VỤ</p>
                        <div className={cx('decor')}></div>
                        <Link href={'/kiemsoatcontrung'}>Kiểm soát côn trùng</Link>
                        <Link href={'/dichvuvesinh'}>Dịch vụ vệ sinh</Link>
                        <Link href={''}>Giải pháp vệ sinh</Link>
                    </div>
                    <div className={cx('danhmuc')}>
                        <p className={cx('title')}>CHÍNH SÁCH</p>
                        <div className={cx('decor')}></div>
                        <Link href={''}>Bảo mật, thông tin</Link>
                        <Link href={''}>Bảo hành, đổi trả</Link>
                    </div>
                    <div className={cx('khac')}>
                        <p className={cx('title')}>KHÁC</p>
                        <div className={cx('decor')}></div>
                        <Link href={'/hoidap'}>Hỏi đáp</Link>
                        <Link href="/lienhe">Liên hệ</Link>
                    </div>
                </div>
                <p className={cx('copyright')}>
                    Copyright © 2024 Petsnclean | Công ty TNHH Thương Mại Dịch Vụ Xuất Nhập Khẩu Nguyễn Duy
                </p>
            </div>
        </div>
    );
}
