'use client';

import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './service.module.scss';
import { gsap } from 'gsap';
import { fadeIn } from '~/libs/orthers/animation';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {
    src: string;
    alt: string;
}

export default function ServiceBanner({ src, alt }: IAppProps) {
    const ref = useRef<any>();
    useEffect(() => {
        gsap.fromTo(
            ref.current,
            fadeIn(ref.current)[0],
            fadeIn(ref.current)[1],
        );
    }, []);

    return (
        <div className="mt-10 mb-14" ref={ref}>
            <div className={'rounded-xl w-full h-80 overflow-hidden shadow-lg'}>
                <Image
                    src={src}
                    alt={alt}
                    width={2000}
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
