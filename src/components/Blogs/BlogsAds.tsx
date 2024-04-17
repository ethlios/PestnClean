'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './blogs.module.scss';
import { blogsAds } from '~/constants/blogs';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ButtonCommon from '../Orther/Button';
import { nameToLink } from '~/libs/orthers/nameToLink';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogsAds(props: IAppProps) {
    return (
        // Blog quang cao
        <div className={cx('blogs-ads-wrapper')}>
            <div className={cx('blogs-ads-content-1')}>
                <p className={cx('timer')}>
                    <AccessTimeIcon /> {blogsAds[0].createdAt}
                </p>
                <h1>{blogsAds[0].title}</h1>
                <p>{blogsAds[0].description}</p>
                <ButtonCommon text="XEM THÊM" path={`blogs/${nameToLink(blogsAds[0].title)}`} />
            </div>
            <div className={cx('blogs-ads-content-2')}></div>
        </div>
    );
}
