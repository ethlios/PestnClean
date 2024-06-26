'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '~/components/Service/Detail/ServiceDetail.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import ServiceDetails from '~/components/Service/Detail/ServiceDetail';
import ServiceComment from '~/components/Service/Detail/ServiceComment';
import ServiceSuggest from '~/components/Service/Detail/ServiceSuggest';
import { notFound, usePathname } from 'next/navigation';
import { allServices } from '~/constants/service';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Script from 'next/script';
import useSize from '~/libs/hooks/useSize';
import { useDispatch } from 'react-redux';
import { getBlogComment } from '~/redux/actions';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ServiceDetail(props: IAppProps) {
    const [blog, setBlog] = useState<any[]>([]);
    const pathname = usePathname();
    const { sizeX } = useSize();
    const dispatch = useDispatch();

    useEffect(() => {
        const blogFilter = allServices.filter((blog) => {
            return `/${nameToLink(blog.title)}` === pathname;
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

    useEffect(() => {
        const getComment = async () => {
            if (blog.length > 0) {
                const cmts = await fetch(`/api/cmtblog/blog/${blog[0].title}`).then((res) => res.json());

                dispatch(getBlogComment(cmts));
            }
        };

        getComment();
    }, [blog, dispatch]);

    return (
        <section>
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
                    <p>Dịch vụ</p>
                    <p>|</p>
                    <p>Chi tiết</p>
                </div>
                <div className={cx('decoration')}></div>
                {blog.length > 0 && <ServiceBanner src={blog[0].img} alt={blog[0].title} />}
                {blog.length > 0 && <ServiceDetails blog={blog} />}

                {/* comment & suggest */}
                <div
                    className={cx('blogs-last')}
                    style={{
                        flexDirection: sizeX < 810 ? 'column' : 'row',
                        marginTop: sizeX < 810 ? '30px' : '',
                    }}
                >
                    <ServiceComment blog={blog} />
                    <ServiceSuggest />
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
    );
}
