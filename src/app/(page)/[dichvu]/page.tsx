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

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ServiceDetail(props: IAppProps) {
    const [blog, setBlog] = useState<any[]>([]);
    const pathname = usePathname();

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

    return (
        <section>
            <div className={'container cpmount'}>
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
                <div className={cx('blogs-last')}>
                    <ServiceComment />
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
