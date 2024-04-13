import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './contact.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BannerContactPage(props: IAppProps) {
    return (
        <div className={cx('banner')}>
            <Image
                src="https://res.cloudinary.com/dj2jarcxk/image/upload/v1712983101/pestnclean/customer-service-business-contact-concept-wooden-cube-block-which-print-screen-letter-telephone-email-address-message_1_fqe8ma.jpg"
                alt="liên hệ pestnclean"
                key="pestnclean contact page "
                width={2000}
                height={2000}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
            <h1>CONTACT US</h1>
        </div>
    );
}
