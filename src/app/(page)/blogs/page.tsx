'use client';

import classNames from 'classnames/bind';
import styles from '../../../components/Blogs/blogs.module.scss';
import Link from 'next/link';
import BlogsAds from '~/components/Blogs/BlogsAds';
import BlogsList from '~/components/Blogs/BlogsList';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function BlogsPage(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={'cpmount'}
             style={{ padding: sizeX < 768 ? '0 20px' : sizeX < 1100 ? '0 50px' : sizeX < 1280 ? '0 80px' : '0 100px' }}>
            <div className={cx('link')}>
                <Link href="/">Trang chủ</Link>
                <p>|</p>
                <Link href="/blogs">Blogs</Link>
            </div>
            <div className={cx('decoration')}></div>
            <BlogsAds />
            <BlogsList />
        </div>
    );
}
