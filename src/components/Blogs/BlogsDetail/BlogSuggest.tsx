'use client';

import React, { useEffect, useState } from 'react';
import styles from './blogDetail.module.scss';
import classNames from 'classnames/bind';
import randomList from '~/libs/orthers/random';
import { blogs } from '~/constants/blogs';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ButtonCommon from '~/components/Orther/Button';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Link from 'next/link';
import Image from 'next/image';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogSuggest(props: IAppProps) {
    const [currentBlog, setCurrentBlog] = useState<number>(-1);
    const [suggestBlog, setSuggestBlog] = useState<any[]>([]);
    const { sizeX } = useSize();

    useEffect(() => {
        if (randomList(blogs, 2).length > 0) {
            setSuggestBlog(randomList(blogs, 2));
        }
    }, []);

    return (
        <div
            className={cx('blog-suggest')}
            style={{
                width: sizeX < 810 ? '100%' : sizeX < 960 ? '50%' : '',
            }}
        >
            <h1>CÁC BÀI VIẾT KHÁC</h1>
            <div
                className={cx('suggest-wrapper')}
                style={{
                    flexDirection: sizeX < 580 ? 'column' : sizeX < 810 ? 'row' : 'column',
                }}
            >
                {suggestBlog.map((blog, index) => {
                    return (
                        <div
                            key={index}
                            className={cx('blog-item')}
                            style={{
                                width: sizeX < 810 ? '100%' : '',
                            }}
                        >
                            <div
                                className={cx('img-wrapper')}
                                onMouseOver={() => setCurrentBlog(index)}
                                onMouseOut={() => setCurrentBlog(-1)}
                            >
                                <Image
                                    src={blog.img}
                                    alt={blog.title}
                                    width={1000}
                                    height={1000}
                                    className={cx('blog-img')}
                                    style={{
                                        scale: currentBlog === index ? '1.5' : 1,
                                        transition: 'all ease .5s',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                ></Image>
                                <div
                                    className={cx('blog-hover')}
                                    style={{
                                        backgroundColor: currentBlog === index ? 'rgba(0,0,0,0.1)' : '',
                                    }}
                                >
                                    {currentBlog === index && (
                                        <Link
                                            href={`blogs/${nameToLink(blog.title)}`}
                                            style={{
                                                backgroundColor: 'var(--primary)',
                                                color: '#fff',
                                                fontWeight: 600,
                                                fontSize: sizeX < 550 ? '12.5px' : '14px',
                                                padding: '8px 14px',
                                                borderRadius: '5px',
                                                border: 'solid 1.5px var(--primary)',
                                            }}
                                            className={cx('button-hover')}
                                        >
                                            XEM
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <p>{blog.category}</p>
                            <Link href={`/blogs/${nameToLink(blog.title)}`}>{blog.title}</Link>
                            <p>
                                <AccessTimeIcon />
                                {blog.createdAt}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className={cx('suggest-btn')}>
                <ButtonCommon text="CÁC BÀI VIẾT KHÁC" path="blogs" fullWidth />
                <ButtonCommon text="TRỞ LẠI TRANG CHỦ" path="/" color="secondary" fullWidth />
            </div>
        </div>
    );
}
