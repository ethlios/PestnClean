import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './blogDetail.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {
    blog: any[];
}

export default function BlogsBanner({ blog }: IAppProps) {
    return (
        blog.length > 0 && (
            <Image
                src={blog[0].img}
                alt={blog[0].title}
                className={cx('banner')}
                width={1000}
                height={1000}
            />
        )
    );
}
