import classNames from 'classnames/bind';
import Link from 'next/link';
import BlogsBanner from '~/components/Blogs/BlogsDetail/BlogsBanner';
import BlogDetails from '~/components/Blogs/BlogsDetail/BlogsDetail';
import styles from '~/components/Blogs/BlogsDetail/blogDetail.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogsDetailPage(props: IAppProps) {
    return (
        <div className={'container'}>
            <div className={cx('link')}>
                <Link href="/">Trang chủ</Link>
                <p>|</p>
                <Link href="/blogs">Blogs</Link>
                <p>|</p>
                <p>Chi tiết</p>
            </div>
            <div className={cx('decoration')}></div>
            <BlogsBanner />
            <BlogDetails />
        </div>
    );
}
