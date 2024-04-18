'use client';

import React, { useEffect, useState } from 'react';
import styles from './ServiceDetail.module.scss';
import classNames from 'classnames/bind';
import randomList from '~/libs/orthers/random';
import { blogs } from '~/constants/blogs';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ButtonCommon from '~/components/Orther/Button';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Link from 'next/link';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ServiceSuggest(props: IAppProps) {
    const [currentBlog, setCurrentBlog] = useState<number>(-1);
    const [suggestBlog, setSuggestBlog] = useState<any[]>([]);

    useEffect(() => {
        if (randomList(blogs).length > 0) {
            setSuggestBlog(randomList(blogs));
        }
    }, []);

    return (
        <div className={cx('blog-suggest')}>
            <h1>CÁC BÀI VIẾT KHÁC</h1>
            <div className={cx('suggest-wrapper')}>
                {suggestBlog.map((blog, index) => {
                    return (
                        <div key={blog.id} className={cx('blog-item')}>
                            <div
                                className={cx('img-wrapper')}
                                onMouseOver={() => setCurrentBlog(index)}
                                onMouseOut={() => setCurrentBlog(-1)}
                            >
                                {/* <Image
                        src={img.src}
                        alt={blog.title}
                        width={1000}
                        height={1000}
                        className={cx('blog-img')}
                    ></Image> */}
                                <div className={cx('blog-img')}></div>
                                <div
                                    className={cx('blog-hover')}
                                    style={{
                                        backgroundColor: currentBlog === index ? 'rgba(0,0,0,0.1)' : '',
                                    }}
                                >
                                    {currentBlog === index && (
                                        <ButtonCommon text="XEM" path={`blogs/${nameToLink(blog.title)}`} />
                                    )}
                                </div>
                            </div>
                            <p>{blog.category}</p>
                            <Link href={`blogs/${nameToLink(blog.title)}`}>{blog.title}</Link>
                            <p>
                                <AccessTimeIcon />
                                {blog.createdAt}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className={cx('suggest-btn')}>
                <ButtonCommon text="CÁC BÀI VIẾT KHÁC" path="blogs" />
                <ButtonCommon text="TRỞ LẠI TRANG CHỦ" path="/" color="secondary" />
            </div>
        </div>
    );
}