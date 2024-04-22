'use client';

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import ButtonCommon from '../Orther/Button';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const cx = classNames.bind(styles);

export interface IAppProps {}

const otherBlogs = [
    {
        id: 1,
        img: '',
        title: 'Bảng giá vệ sinh công nghiệp PestnClean',
        created: '09.04',
    },
    {
        id: 2,
        img: '',
        title: '6 Cách khử mùi hôi nhà vệ sinh mới nhất 2024',
        created: '09.04',
    },
    {
        id: 3,
        img: '',
        title: '3 cách tạo mùi thơm cho xe ô tô bạn nên biết',
        created: '09.04',
    },
];

export default function BlogOthers(props: IAppProps) {
    const [blogHover, setBlogHover] = useState<number>(-1);

    return (
        <div className={cx('blog-wrapper')}>
            <div className={cx('blog-header')}>
                <h1 className={`font-bold underline underline-offset-2 text-2xl uppercase decoration-2`}>
                    BàI VIẾT Tham KHẢO
                </h1>
                <ButtonCommon text="Xem thêm" path="blogs" />
            </div>
            <div className={cx('other-wrapper')}>
                {otherBlogs.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={cx('blog-item')}
                            onMouseOver={() => setBlogHover(index)}
                            onMouseOut={() => setBlogHover(-1)}
                        >
                            {/* <Image
                                src={item.img}
                                alt={''}
                                // alt={item.title}
                                width={1000}
                                height={1000}
                                className={cx('blogs-img')}
                            /> */}
                            <div className={cx('blogs-img')}></div>
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
                                        transition: 'all ease .5s',
                                        padding: blogHover === index ? '10px 0 ' : '0px',
                                        borderTop: blogHover === index ? 'solid 2px var(--secondary)' : '',
                                    }}
                                >
                                    <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}</p>
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
