'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import { notFound, usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import BlogComment from '~/components/Blogs/BlogsDetail/BlogComment';
import BlogSuggest from '~/components/Blogs/BlogsDetail/BlogSuggest';
import BlogsBanner from '~/components/Blogs/BlogsDetail/BlogsBanner';
import BlogDetails from '~/components/Blogs/BlogsDetail/BlogsDetail';
import styles from '~/components/Blogs/BlogsDetail/blogDetail.module.scss';
import { blogs } from '~/constants/blogs';
import { nameToLink } from '~/libs/orthers/nameToLink';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogsDetailPage(props: IAppProps) {
    const [blog, setBlog] = useState<any[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        const blogFilter = blogs.filter((blog) => {
            return `/blogs/${nameToLink(blog.title)}` === pathname;
        });

        if (blogFilter.length > 0) {
            setBlog(blogFilter);
        } else {
            return notFound();
        }
    }, [pathname]);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: blog.length > 0 ? blog[0].title : '',
        image: blog.length > 0 ? blog[0].img : '',
        description: blog.length > 0 ? blog[0].desHead : '',
    };

    return (
        <>
            <section>
                {/* Main */}
                <div className={'container cpmount'}>
                    <div className={cx('link')}>
                        <Link href="/">Trang chủ</Link>
                        <p>|</p>
                        <Link href="/blogs">Blogs</Link>
                        <p>|</p>
                        <p>Chi tiết</p>
                    </div>
                    <div className={cx('decoration')}></div>
                    <BlogsBanner blog={blog} />
                    <BlogDetails blogs={blog} />

                    {/* comment & suggest */}
                    <div className={cx('blogs-last')}>
                        <BlogComment />
                        <BlogSuggest />
                    </div>
                </div>

                {/* Add JSON-LD to page */}
                {blog.length > 0 && (
                    <Script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                        id="jsonLd"
                    />
                )}
            </section>
        </>
    );
}
