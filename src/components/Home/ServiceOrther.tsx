'use client';

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import ButtonCommon from '../Orther/Button';
import Image from 'next/image';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Link from 'next/link';

const cx = classNames.bind(styles);

export interface IAppProps {}

const otherService = [
    {
        id: 1,
        img: '',
        title: 'Kiểm Soát côn trùng',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the standard dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book.`,
    },
    {
        id: 2,
        img: '',
        title: 'Dịch vụ vệ sinh',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the standard dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book.`,
    },
    {
        id: 3,
        img: '',
        title: 'Giải pháp vệ sinh',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the standard dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book.`,
    },
];

export default function ServiceAds(props: IAppProps) {
    const [currentService, setCurrentService] = useState<number>(-1);

    return (
        <div className={cx('blog-wrapper')}>
            <h1 className={'font-bold underline underline-offset-2 text-2xl uppercase text-center'}>
                CÁC DỊCH VỤ CỦA CHÚNG TÔI
            </h1>
            <div className={cx('service-wrapper')}>
                {otherService.map((item, index) => {
                    return (
                        <Link
                            href={`/${nameToLink(item.title)}`}
                            key={index}
                            className={cx('service-item')}
                            onMouseOver={() => setCurrentService(index)}
                            onMouseOut={() => setCurrentService(-1)}
                        >
                            {/* <Image
                                src={item.img}
                                alt={''}
                                // alt={item.title}
                                width={1000}
                                height={1000}
                                className={cx('blogs-img')}
                            /> */}
                            <div className={cx('service-img')}></div>
                            {currentService === index ? (
                                <p className={cx('service-description')}>{item.description}</p>
                            ) : (
                                <div className={cx('service-title')}>
                                    <p>{item.title}</p>
                                </div>
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
