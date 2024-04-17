import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import zalo from '../../../public/img/zalo.png';
import Image from 'next/image';
import Link from 'next/link';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function MoreBtn(props: IAppProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={cx('more-wrapper')}>
            <div
                className={cx('zalo')}
                style={{
                    bottom: isOpen ? '80px' : '15px',
                }}
            >
                <Link href={'zalo://conversation?phone=0868363600'}>
                    <Image
                        src={zalo.src}
                        alt="zalo pestnclean"
                        width={30}
                        height={30}
                        style={{
                            filter: 'sepia(100%)',
                            WebkitFilter: 'sepia(100%)',
                        }}
                    />
                </Link>
            </div>

            <div
                className={cx('back-top')}
                style={{
                    bottom: isOpen ? '145px' : '15px',
                }}
                onClick={handleClick}
            >
                <NorthOutlinedIcon />
            </div>

            <div
                className={cx('more-btn')}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    backgroundColor: !isOpen ? '' : 'var(--secondary)',
                }}
            >
                {!isOpen ? <MoreHorizOutlinedIcon /> : <CloseOutlinedIcon />}
            </div>
        </div>
    );
}
