'use client';

import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';
import Image from 'next/image';
import smoothScroll from '~/libs/orthers/smoothScroll';
import useScroll from '~/libs/hooks/useScroll';

const cx = classNames.bind(styles);

export interface IAppProps {}

// Demo
const imgLists = ['', '', ''];

export default function ProductImage(props: IAppProps) {
    const wheel: boolean = useScroll();

    return (
        <div className={cx('product-img')}>
            <div
                className={cx('thumbnail')}
                style={{
                    top: wheel ? '0px' : '70px',
                }}
            >
                {imgLists.map((img, index) => {
                    return (
                        <Image
                            key={index}
                            src={img}
                            alt={''}
                            width={150}
                            height={150}
                            className={'bg-gray-200'}
                            onClick={() => smoothScroll(`#img-${index + 1}`)}
                        />
                    );
                })}
            </div>
            <div className={cx('img')}>
                {imgLists.map((img, index) => {
                    return (
                        <Image
                            key={index}
                            src={img}
                            alt={''}
                            width={1000}
                            height={1000}
                            className={'bg-gray-200'}
                            id={`img-${index + 1}`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
