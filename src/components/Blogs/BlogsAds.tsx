'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './blogs.module.scss';
import { blogsAds } from '~/constants/blogs';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ButtonCommon from '../Orther/Button';
import { nameToLink } from '~/libs/orthers/nameToLink';
import useSize from '~/libs/hooks/useSize';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogsAds(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        // Blog quang cao
        <div
            className={cx('blogs-ads-wrapper')}
            style={{
                flexDirection: sizeX < 800 ? 'column-reverse' : 'row',
                gap: sizeX < 800 ? '15px' : sizeX < 1000 ? '25px' : '',
            }}
        >
            <div
                className={cx('blogs-ads-content-1')}
                style={{
                    width: sizeX < 800 ? '100%' : '',
                }}
            >
                <p className={cx('timer')}>
                    <AccessTimeIcon /> {blogsAds[0].createdAt}
                </p>
                <h1
                    style={{
                        fontSize: sizeX < 550 ? '22px' : '',
                    }}
                >
                    {blogsAds[0].title}
                </h1>
                <p
                    style={{
                        fontSize: sizeX < 550 ? '14px' : '',
                    }}
                >
                    {blogsAds[0].description}
                </p>
                <ButtonCommon
                    text="XEM THÊM"
                    path={`blogs/${nameToLink(blogsAds[0].title)}`}
                    fullWidth={sizeX < 800 ? true : false}
                    rule="rule-1"
                />
            </div>
            <div
                className={cx('blogs-ads-content-2')}
                style={{
                    width: sizeX < 800 ? '100%' : '',
                    height: sizeX < 550 ? '250px' : '',
                }}
            >
                <Image
                    src={blogsAds[0].img}
                    alt={blogsAds[0].title}
                    width={1000}
                    height={1000}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    draggable={false}
                />
            </div>
        </div>
    );
}
