'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import ButtonCommon from '../Orther/Button';
import Image from 'next/image';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import randomList from '~/libs/orthers/random';
import { blogs } from '~/constants/blogs';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function BlogOthers(props: IAppProps) {
    const [blogHover, setBlogHover] = useState<number>(-1);
    const [blogSuggest, setSuggestBlog] = useState<any[]>([]);
    const { sizeX } = useSize();

    useEffect(() => {
        if (randomList(blogs, 3).length > 0) {
            setSuggestBlog(randomList(blogs, 3));
        }
    }, []);

    return (
        <div className={cx('blog-wrapper')}>
            <div className={cx('blog-header')}>
                <h1
                    className={`font-bold underline underline-offset-2 uppercase decoration-2`}
                    style={{
                        fontSize: sizeX < 550 ? '18px' : '24px',
                    }}
                >
                    BàI VIẾT Tham KHẢO
                </h1>
                <ButtonCommon text="Xem thêm" path="blogs" />
            </div>
            <div
                className={cx('other-wrapper')}
                style={{
                    flexDirection: sizeX < 600 ? 'column' : 'row',
                }}
            >
                {blogSuggest.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={cx('blog-item')}
                            onMouseOver={() => setBlogHover(index)}
                            onMouseOut={() => setBlogHover(-1)}
                            style={{
                                display: sizeX < 850 && index === 2 ? 'none' : '',
                                width: sizeX < 850 ? '100%' : '',
                            }}
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={1000}
                                height={1000}
                                className={cx('blogs-img')}
                            />
                            <div className={cx('blog-content')}>
                                <div
                                    className={cx('blog-time')}
                                    style={{
                                        marginBottom: blogHover === index ? '10px' : '0',
                                    }}
                                >
                                    <p>
                                        {item.created} <br />
                                        <u>2024</u>
                                    </p>
                                    <div className={cx('time-decor')}></div>
                                    <p className={cx('blog-title')}>{item.title}</p>
                                </div>
                                <div
                                    className={cx('content-hover')}
                                    style={{
                                        height: blogHover === index ? '100%' : '0px',
                                        padding: blogHover === index ? '10px 0 ' : '0px',
                                        borderTop: blogHover === index ? 'solid 2px var(--secondary)' : '',
                                    }}
                                >
                                    <p>{item.description}</p>
                                    <Link href={`/blogs/${nameToLink(item.title)}`}>
                                        <IconButton
                                            sx={{
                                                backgroundColor: 'var(--secondary)',
                                                marginTop: '10px',
                                                transition: 'all ease .5s',
                                                ':hover': {
                                                    backgroundColor: 'var(--secondary)',
                                                    marginLeft: '10px',
                                                },
                                            }}
                                        >
                                            <EastOutlinedIcon />
                                        </IconButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
