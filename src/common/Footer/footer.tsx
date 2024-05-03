'use client';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Checkbox } from '@mui/material';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo from '../../../public/img/logo.png';
import styles from './footer.module.scss';
import ButtonCommon from '~/components/Orther/Button';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import useSize from '~/libs/hooks/useSize';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import $ from 'jquery';
import { useDispatch } from 'react-redux';
import { addEmail } from '~/redux/actions';
import { useSession } from 'next-auth/react';
import Toast from '~/components/Orther/Toast';

const cx = classNames.bind(styles);

export interface FooterProps {}

export default function Footer(props: FooterProps) {
    const [checked, setChecked] = useState<boolean>(false);
    const { sizeX } = useSize();
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [showToast, setShowToast] = useState<boolean>(false);
    const { data: session } = useSession();
    const [valueEmail, setValueEmail] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        $('.sv-footer').hide();
        $('.cs-footer').hide();
        $('.other-footer').hide();
    }, []);

    // XỬ LÝ SỰ KIỆN CLICK VÀO ĐĂNG KÝ EMAIL ĐỂ NHẬN MAIL KHUYỄN MÃ
    const handleClickBtnSendEmail = () => {
        if(valueEmail !== ""){
            if(session?.user?.id){
                dispatch(addEmail({ 
                    email: valueEmail,
                    authorId: session?.user?.id 
                }));
                setShowToast(true);
            } else {
                dispatch(addEmail({ 
                    email: valueEmail
                }));
                setShowToast(true);
            }
        }
    };

    const handleShowContent1 = () => {
        setIsOpen1(!isOpen1);

        $('.sv-footer').slideToggle();
    };

    const handleShowContent2 = () => {
        setIsOpen2(!isOpen2);

        $('.cs-footer').slideToggle();
    };

    const handleShowContent3 = () => {
        setIsOpen3(!isOpen3);

        $('.other-footer').slideToggle();
    };

    return (
        <div>
            {/* Email Register */}
            <div className={cx('banner-footer')}>
                <Image
                    src={
                        'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713230969/pestnclean/21821905_OFC_3_231_12_2021-min_f7tr71.png'
                    }
                    alt="hinh anh PESTNCLEAN"
                    width={2000}
                    height={2000}
                    className={cx('banner-img')}
                />
                <div className={cx('img-black')}></div>
                {/* Toast */}
                <Toast
                    rule="normal"
                    text="Đã đăng ký thành công"
                    showToast={showToast}
                    setShowToast={setShowToast}
                />
                <div className={cx('banner-content')}>
                    <h1>CẬP NHẬT TIN TỨC</h1>
                    <div className={cx('banner-input')}>
                        <input
                            type="email"
                            placeholder="Địa chỉ email..."
                            value={valueEmail}
                            onChange={(e) => setValueEmail(e.target.value)}
                        />
                        <div className={cx('banner-btn')} onClick={handleClickBtnSendEmail}>
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
            <div
                className={cx('footer')}
                style={{
                    padding:
                        sizeX < 768
                            ? '0 20px'
                            : sizeX < 1100
                              ? '0 50px'
                              : sizeX < 1280
                                ? '0 80px'
                                : '0 100px',
                }}
            >
                <div className={cx('footer-head')}>
                    <Image
                        alt="Logo công ty PESTNCLEAN"
                        src={logo.src}
                        width={sizeX < 576 ? 150 : 176}
                        height={100}
                    />
                    <ButtonCommon text="Liên hệ" path="lienhe" />
                </div>
                <div
                    className={cx('footer-main')}
                    style={{
                        flexDirection: sizeX < 900 ? 'column' : 'row',
                    }}
                >
                    <div
                        className={cx('infor')}
                        style={{
                            width: sizeX < 900 ? '100%' : '50%',
                        }}
                    >
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
                    <div
                        className={`${cx('link')} flex justify-between`}
                        style={{
                            width: sizeX < 900 ? '100%' : '50%',
                            flexDirection: sizeX < 576 ? 'column' : 'row',
                            gap: sizeX < 576 ? '20px' : '0px',
                        }}
                    >
                        <div className={cx('dichvu')}>
                            <p className={cx('title')} onClick={handleShowContent1}>
                                DỊCH VỤ{' '}
                                {sizeX < 576 && !isOpen1 ? (
                                    <AddOutlinedIcon />
                                ) : sizeX < 576 ? (
                                    <RemoveOutlinedIcon />
                                ) : (
                                    ''
                                )}
                            </p>
                            <div
                                className={cx('decor')}
                                style={{
                                    width: sizeX < 576 ? '100%' : '',
                                }}
                            ></div>
                            {sizeX < 576 ? (
                                <div className="sv-footer flex flex-col gap-3">
                                    <Link href={'/dichvu/kiem-soat-con-trung'}>Kiểm soát côn trùng</Link>
                                    <Link href={'/dichvu/dich-vu-ve-sinh'}>Dịch vụ vệ sinh</Link>
                                    <Link href={'/dichvu/giai-phap-ve-sinh'}>Giải pháp vệ sinh</Link>
                                </div>
                            ) : (
                                <>
                                    <Link href={'/dichvu/kiem-soat-con-trung'}>Kiểm soát côn trùng</Link>
                                    <Link href={'/dichvu/dich-vu-ve-sinh'}>Dịch vụ vệ sinh</Link>
                                    <Link href={'/dichvu/giai-phap-ve-sinh'}>Giải pháp vệ sinh</Link>
                                </>
                            )}
                        </div>
                        <div className={cx('danhmuc')}>
                            <p className={cx('title')} onClick={handleShowContent2}>
                                CHÍNH SÁCH{' '}
                                {sizeX < 576 && !isOpen2 ? (
                                    <AddOutlinedIcon />
                                ) : sizeX < 576 ? (
                                    <RemoveOutlinedIcon />
                                ) : (
                                    ''
                                )}
                            </p>
                            <div
                                className={cx('decor')}
                                style={{
                                    width: sizeX < 576 ? '100%' : '',
                                }}
                            ></div>
                            {sizeX < 576 ? (
                                <div className="cs-footer flex flex-col gap-3">
                                    <Link href={'/hoidap?q=chinh-sach-bao-mat-thong-tin'}>
                                        Bảo mật, thông tin
                                    </Link>
                                    <Link href={'/hoidap?q=chinh-sach-bao-hanh-doi-tra'}>
                                        Bảo hành, đổi trả
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <Link href={'/hoidap?q=chinh-sach-bao-mat-thong-tin'}>
                                        Bảo mật, thông tin
                                    </Link>
                                    <Link href={'/hoidap?q=chinh-sach-bao-hanh-doi-tra'}>
                                        Bảo hành, đổi trả
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className={cx('khac')}>
                            <p className={cx('title')} onClick={handleShowContent3}>
                                KHÁC{' '}
                                {sizeX < 576 && !isOpen3 ? (
                                    <AddOutlinedIcon />
                                ) : sizeX < 576 ? (
                                    <RemoveOutlinedIcon />
                                ) : (
                                    ''
                                )}
                            </p>
                            <div
                                className={cx('decor')}
                                style={{
                                    width: sizeX < 576 ? '100%' : '',
                                }}
                            ></div>
                            {sizeX < 576 ? (
                                <div className="other-footer flex flex-col gap-3">
                                    <Link href={'/hoidap'}>Hỏi đáp</Link>
                                    <Link href="/lienhe">Liên hệ</Link>
                                </div>
                            ) : (
                                <>
                                    <Link href={'/hoidap'}>Hỏi đáp</Link>
                                    <Link href="/lienhe">Liên hệ</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <p className={cx('copyright')}>Copyright © 2024 Petsnclean</p>
            </div>
        </div>
    );
}
