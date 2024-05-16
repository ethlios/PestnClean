'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import { notFound, usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogComment from '~/components/Blogs/BlogsDetail/BlogComment';
import BlogSuggest from '~/components/Blogs/BlogsDetail/BlogSuggest';
import BlogsBanner from '~/components/Blogs/BlogsDetail/BlogsBanner';
import BlogDetails from '~/components/Blogs/BlogsDetail/BlogsDetail';
import styles from '~/components/Blogs/BlogsDetail/blogDetail.module.scss';
import useSize from '~/libs/hooks/useSize';
import { getBlogComment } from '~/redux/actions';
import { RootState } from '~/redux/provider/store';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogsDetailPage(props: IAppProps) {
    const [blog, setBlog] = useState<any[]>([]);
    const pathname = usePathname();
    const { sizeX } = useSize();
    const dispatch = useDispatch();
    let allBlogs: any = useSelector((state: RootState) => state.main.allBlogs);

    useEffect(() => {
        const blogFilter = allBlogs.filter((blog: any) => {
            return `/blogs/${blog.path}` === pathname;
        });

        if (blogFilter.length > 0) {
            setBlog(blogFilter);
        } else {
            return notFound();
        }
    }, [allBlogs, pathname]);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: blog.length > 0 ? blog[0].title : '',
        image: blog.length > 0 ? blog[0].img : '',
        description: blog.length > 0 ? blog[0].desHead : '',
    };

    useEffect(() => {
        const getComment = async () => {
            if (blog.length > 0) {
                const cmts = await fetch(`/api/cmtblog/blog/${blog[0].path}`).then((res) => res.json());

                dispatch(getBlogComment(cmts));
            }
        };

        getComment();
    }, [blog, dispatch]);

    return (
        <>
            <section>
                {/* Main */}
                <div
                    className={'cpmount'}
                    style={{
                        padding:
                            sizeX < 768
                                ? '0 20px'
                                : sizeX < 1100
                                  ? '0 50px'
                                  : sizeX < 1280
                                    ? '0 80px'
                                    : '0 100px',
                    }}
                >
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
                    <div
                        className={cx('blogs-last')}
                        style={{
                            flexDirection: sizeX < 810 ? 'column' : 'row',
                            marginTop: sizeX < 810 ? '30px' : '',
                        }}
                    >
                        <BlogComment blog={blog} />
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
