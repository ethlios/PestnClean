'use client';

import React, { useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './blogDetail.module.scss';
import { blogsTest } from '~/constants/blogs';
import dynamic from 'next/dynamic';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import smoothScroll from '~/libs/orthers/smoothScroll';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogDetails(props: IAppProps) {
    const QuillEditor = useMemo(() => {
        return dynamic(() => import('react-quill'), {
            loading: () => <p>LOADING...</p>,

            ssr: false,
        });
    }, []);

    return (
        <div className={cx('blogs-detail')}>
            <div className={cx('blogs-decor')}></div>
            <div className={cx('main-content')}>
                <div className={cx('menu')}>
                    <h1>MỤC LỤC</h1>
                    <p onClick={() => smoothScroll('#header1')}>
                        01. Những tác dụng bất ngờ của gel rửa tay khô.
                    </p>
                    <p onClick={() => smoothScroll('#header2')}>02. Mua sản phẩm gel rửa tay khô ở đâu?</p>
                    <div className={cx('hr-decor')}></div>
                    <div className={cx('list-icon')}>
                        <FavoriteBorderIcon />
                        <ChatOutlinedIcon />
                        <FacebookIcon />
                        <XIcon />
                    </div>
                </div>
                <div className={cx('detail')}>
                    <p className={cx('detail-category')}>{blogsTest[0].category}</p>
                    <p className={cx('detail-title')}>{blogsTest[0].title}</p>
                    <p className={cx('detail-create')}>
                        <AccessTimeIcon />
                        {blogsTest[0].createdAt}
                    </p>
                    <p className={cx('detail-description')}>{blogsTest[0].description}</p>
                    {/* <QuillEditor theme="bubble" value={blogsTest[0].detail} readOnly /> */}
                    <div
                        dangerouslySetInnerHTML={{ __html: blogsTest[0].detail }}
                        className="ql-editor"
                    ></div>
                </div>
            </div>
        </div>
    );
}
