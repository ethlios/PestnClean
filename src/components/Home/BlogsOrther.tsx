'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import ButtonCommon from '../Orther/Button';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Link from 'next/link';

const cx = classNames.bind(styles);

export interface IAppProps {}

const otherBlogs = [
    {
        id: 1,
        img: '',
        title: 'Bảng giá vệ sinh công nghiệp PestnClean',
        created: '09 tháng 4, 2024',
    },
    {
        id: 2,
        img: '',
        title: '6 Cách khử mùi hôi nhà vệ sinh mới nhất 2024',
        created: '09 tháng 4, 2024',
    },
    {
        id: 3,
        img: '',
        title: '3 cách tạo mùi thơm cho xe ô tô bạn nên biết',
        created: '09 tháng 4, 2024',
    },
];

export default function BlogOthers(props: IAppProps) {
    return (
        <div className={cx('blog-wrapper')}>
            <div className={cx('blog-header')}>
                <h1 className={'font-bold underline underline-offset-2 text-2xl uppercase'}>
                    BàI VIẾT Tham KHẢO
                </h1>
                <ButtonCommon text="Xem thêm" path="blogs" />
            </div>
            <div className={cx('other-wrapper')}>
                {otherBlogs.map((item, index) => {
                    return (
                        <div key={index} className={cx('blog-item')}>
                            {/* <Image
                                src={item.img}
                                alt={''}
                                // alt={item.title}
                                width={1000}
                                height={1000}
                                className={cx('blogs-img')}
                            /> */}
                            <div className={cx('blogs-img')}></div>
                            <Link href={`/blogs/${nameToLink(item.title)}`} className={cx('blog-content')}>
                                <p className={cx('blog-title')}>{item.title}</p>
                                <p className={cx('blog-createdAt')}>
                                    <AccessTimeIcon />
                                    {item.created}
                                </p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
