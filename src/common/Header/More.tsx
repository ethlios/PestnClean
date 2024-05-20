import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import zalo from '../../../public/img/zalo.png';
import styles from './header.module.scss';
const cx = classNames.bind(styles);

export interface IAppProps {}

export default function MoreBtn(props: IAppProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true);

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
                        priority
                    />
                </Link>
            </div>

            <div
                className={cx('zalo')}
                style={{
                    bottom: isOpen ? '145px' : '15px',
                }}
            >
                <Link href={'tel:0868363600'}>
                    <PhoneIphoneOutlinedIcon />
                </Link>
            </div>

            <div
                className={cx('back-top')}
                style={{
                    bottom: isOpen ? '210px' : '15px',
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
