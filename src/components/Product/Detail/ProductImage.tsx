'use client';

import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';
import Image from 'next/image';
import smoothScroll from '~/libs/orthers/smoothScroll';
import useScroll from '~/libs/hooks/useScroll';
import Slider from 'react-slick';

const cx = classNames.bind(styles);

export interface IAppProps {
}

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    classNames: 'fix-slick',
};

// Demo
const imgLists = ['', '', ''];

export default function ProductImage(props: IAppProps) {
    const wheel: boolean = useScroll();

    return (
        <div className={`col-span-12 md:col-span-7`}>
            <div className={'grid grid-cols-12 gap-5'}>
                <div className={'col-span-12 lg:col-span-2 flex lg:flex-col gap-3 cursor-pointer'}>
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
                <div className={'col-span-12 lg:col-span-10'}>
                    <Slider {...settings}>
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
                    </Slider>
                    {/*<div className={'flex-col gap-3'}>*/}
                    {/*    {imgLists.map((img, index) => {*/}
                    {/*        return (*/}
                    {/*            <Image*/}
                    {/*                key={index}*/}
                    {/*                src={img}*/}
                    {/*                alt={''}*/}
                    {/*                width={1000}*/}
                    {/*                height={1000}*/}
                    {/*                className={'bg-gray-200'}*/}
                    {/*                id={`img-${index + 1}`}*/}
                    {/*            />*/}
                    {/*        );*/}
                    {/*    })}*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}
