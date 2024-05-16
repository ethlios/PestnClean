import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './ServiceDetail.module.scss';
import Image from 'next/image';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
    blog: any[];
}

export default function ServiceBanner({ blog }: IAppProps) {
    const { sizeX } = useSize();

    return (
        blog.length > 0 && (
            <Image
                src={blog[0].img}
                alt={blog[0].title}
                className={cx('banner')}
                width={1000}
                height={1000}
                style={{
                    height: sizeX < 550 ? '250px' : sizeX < 810 ? '300px' : '',
                }}
                draggable={false}
            />
        )
    );
}
