'use client';

import React, { useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './ServiceDetail.module.scss';
import { serviceTest } from '~/constants/service';
import dynamic from 'next/dynamic';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import smoothScroll from '~/libs/orthers/smoothScroll';

const cx = classNames.bind(styles);

export interface IAppProps {
    blog: any[];
}

export default function ServiceDetails({ blog }: IAppProps) {
    return (
        <div className={cx('blogs-detail')}>
            <div className={cx('blogs-decor')}></div>
            <div className={cx('main-content')}>
                <div className={cx('menu')}>
                    <h1>MỤC LỤC</h1>
                    {blog[0].menu.map((item: any, index: number) => {
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
                    <p className={cx('detail-title')}>{blog[0].title}</p>
                    <p className={cx('detail-create')}>
                        <AccessTimeIcon />
                        {blog[0].createdAt}
                    </p>
                    <p className={cx('detail-description')}>{blog[0].description}</p>
                    <div dangerouslySetInnerHTML={{ __html: blog[0].detail }} className="ql-editor"></div>
                </div>
            </div>
        </div>
    );
}
