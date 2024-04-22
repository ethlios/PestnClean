'use client';

import React, { useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './blogDetail.module.scss';
import dynamic from 'next/dynamic';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import smoothScroll from '~/libs/orthers/smoothScroll';
import Image from 'next/image';
import logo from '../../../../public/img/logo.png';

const cx = classNames.bind(styles);

export interface IAppProps {
    blogs: any[];
}

export default function BlogDetails({ blogs }: IAppProps) {
    return blogs.length > 0 ? (
        <div className={cx('blogs-detail')}>
            <div className={cx('blogs-decor')}></div>
            <div className={cx('main-content')}>
                <div className={cx('menu')}>
                    <h1>MỤC LỤC</h1>
                    {blogs[0].menu.map((item: any, index: number) => {
                        return (
                            <p key={index} onClick={() => smoothScroll(`#header${index + 1}`)}>
                                {`0${index + 1}. ${item}`}
                            </p>
                        );
                    })}
                    <div className={cx('hr-decor')}></div>
                    <div className={cx('list-icon')}>
                        <FavoriteBorderIcon />
                        <ChatOutlinedIcon onClick={() => smoothScroll('#comment-blogs')} />
                        <FacebookIcon />
                        <XIcon />
                    </div>
                </div>
                <div className={cx('detail')}>
                    <p className={cx('detail-category')}>{blogs[0].category}</p>
                    <p className={cx('detail-title')}>{blogs[0].title}</p>
                    <p className={cx('detail-create')}>
                        <AccessTimeIcon />
                        {blogs[0].createdAt}
                    </p>
                    <p className={cx('detail-description')}>{blogs[0].description}</p>
                    <div dangerouslySetInnerHTML={{ __html: blogs[0].detail }} className="ql-editor"></div>
                </div>
            </div>
        </div>
    ) : (
        <div className="loader cpmount">
            <Image src={logo.src} alt="logo pestnclean png" width={200} height={200} />
        </div>
    );
}
