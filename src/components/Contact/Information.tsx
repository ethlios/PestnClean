import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './contact.module.scss';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function InformationContactPage(props: IAppProps) {
    return (
        <div className={cx('information')}>
            {/* Content 1 */}
            <div className={cx('information-1')}>
                <p>LIÊN HỆ</p>
                <Link href="mailto:sales@pestnclean.vn" target="_blank" rel="noopener noreferrer">
                    sales@pestnclean.vn
                </Link>
                <Link href="tel:0868363600" target="_blank" rel="noopener noreferrer">
                    0868 36 36 00
                </Link>
            </div>
            <div className={cx('information-2')}>
                <p>MẠNG XÃ HỘI</p>
                <div className={cx('social-icon')}>
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

            {/* Map */}
            <div className={cx('map')}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3198192504315!2d106.68233077473832!3d10.786798789362605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2c53afffff%3A0xf831d8aaee883f90!2zTmjDoCBIw6BuZyBUaeG7h2MgQ8aw4bubaSBDYWxsYXJ5!5e0!3m2!1svi!2s!4v1712913812701!5m2!1svi!2s"
                    width="100%"
                    height="300px"
                    loading="lazy"
                ></iframe>
            </div>
            <p className={cx('description')}>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.`}
            </p>
            <p className={cx('watermark')}>© PESTNCLEAN 2024</p>
        </div>
    );
}
