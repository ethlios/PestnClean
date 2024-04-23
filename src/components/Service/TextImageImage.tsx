'use client';

import classNames from 'classnames/bind';
import styles from './service.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function TextImageImage(props: IAppProps) {
    const pathname = usePathname();

    return (
        <div className="my-10">
            <div className={'grid grid-cols-2 gap-8'}>
                <div
                    className={'col-span-2 md:col-span-1 shadow-lg'}
                    style={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        src={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713844619/xyzcharlize-7b49gfsgQZY-unsplash_pjjzlf.jpg'
                                : '/dichvu/giai-phap-ve-sinh-pestnclean-hieu-qua'
                        }
                        alt={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? 'Vệ sinh công nghiệp tại Pestnclean'
                                : 'Giải pháp vệ sinh tại Pestnclean'
                        }
                        width={500}
                        height={300}
                        style={{
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        draggable={false}
                    />
                    <Link
                        href={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? '/dich-vu-ve-sinh-cong-nghiep'
                                : '/giai-phap-ve-sinh-pestnclean-hieu-qua'
                        }
                    >
                        <p className={cx('bg-text')}>
                            {pathname === '/dichvu/dich-vu-ve-sinh'
                                ? 'Vệ sinh công nghiệp'
                                : 'Giải pháp vệ sinh'}
                        </p>
                    </Link>
                </div>
                <div
                    className={'col-span-2 md:col-span-1 shadow-lg'}
                    style={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        src={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713844611/naomi-hebert-MP0bgaS_d1c-unsplash_qcp4ej.jpg'
                                : ''
                        }
                        alt={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? 'Vệ sinh nhà ở tại Pestnclean'
                                : 'Giải pháp mùi hương tại Pestnclean'
                        }
                        width={500}
                        height={300}
                        style={{
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        draggable={false}
                    />
                    <Link
                        href={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? '/dich-vu-ve-sinh-nha-o'
                                : '/dichvu/giai-phap-mui-huong-cho-doanh-nghiep'
                        }
                    >
                        <p className={cx('bg-text')}>
                            {pathname === '/dichvu/dich-vu-ve-sinh' ? 'Vệ sinh nhà ở' : 'Giải pháp mùi hương'}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
