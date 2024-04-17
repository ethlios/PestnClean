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

export interface IAppProps {}

export default function ServiceDetails(props: IAppProps) {
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
                        01. Lý do bạn nên chọn dịch vụ vệ sinh công nghiệp định kỳ.
                    </p>
                    <p onClick={() => smoothScroll('#header2')}>
                        02. Thiết bị, máy móc vệ sinh công nghiệp gồm những gì?
                    </p>
                    <p onClick={() => smoothScroll('#header3')}>
                        03. Vệ sinh công nghiệp PestnClean được tin tưởng.
                    </p>
                    <p onClick={() => smoothScroll('#header4')}>
                        04. Mẹo chọn đơn vị uy tín giữa các loại dịch vụ vệ sinh công nghiệp.
                    </p>
                    <div className={cx('hr-decor')}></div>
                    <div className={cx('list-icon')}>
                        <FavoriteBorderIcon />
                        <ChatOutlinedIcon onClick={() => smoothScroll('#comment-blogs')} />
                        <FacebookIcon />
                        <XIcon />
                    </div>
                </div>
                <div className={cx('detail')}>
                    <p className={cx('detail-title')}>{serviceTest[0].title}</p>
                    <p className={cx('detail-create')}>
                        <AccessTimeIcon />
                        {serviceTest[0].createdAt}
                    </p>
                    <p className={cx('detail-description')}>{serviceTest[0].description}</p>
                    {/* <QuillEditor theme="bubble" value={serviceTest[0].detail} readOnly /> */}
                    <div
                        dangerouslySetInnerHTML={{ __html: serviceTest[0].detail }}
                        className="ql-editor"
                    ></div>
                </div>
            </div>
        </div>
    );
}
