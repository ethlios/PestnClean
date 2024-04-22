'use client';

import classNames from 'classnames/bind';
import styles from './service.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function TextImageImage(props: IAppProps) {
    const pathname = usePathname();

    return (
        <div className="my-10">
            <div className={'grid grid-cols-2 gap-8'}>
                <div className={'col-span-2 md:col-span-1'}>
                    <Image
                        src=""
                        alt={''}
                        width={500}
                        height={300}
                        style={{
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                    <Link
                        href={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? '/dichvu/ve-sinh-cong-nghiep'
                                : '/dichvu/giai-phap-ve-sinh-pestnclean-hieu-qua'
                        }
                    >
                        <p className={cx('bg-text')}>
                            {pathname === '/dichvu/dich-vu-ve-sinh'
                                ? 'Vệ sinh công nghiệp'
                                : 'Giải pháp vệ sinh'}
                        </p>
                    </Link>
                </div>
                <div className={'col-span-2 md:col-span-1'}>
                    <Image
                        src={''}
                        alt={''}
                        width={500}
                        height={300}
                        style={{
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                    <Link
                        href={
                            pathname === '/dichvu/dich-vu-ve-sinh'
                                ? '/dichvu/dich-vu-ve-sinh-nha-o'
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
