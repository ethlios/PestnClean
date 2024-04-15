import classNames from 'classnames/bind';
import styles from '../../../components/Blogs/blogs.module.scss';
import Link from 'next/link';
import BlogsAds from '~/components/Blogs/BlogsAds';
import BlogsList from '~/components/Blogs/BlogsList';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogsPage(props: IAppProps) {
    return (
        <div className={'container'}>
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
