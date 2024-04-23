'use client';

import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './service.module.scss';
import { gsap } from 'gsap';
import { fadeIn } from '~/libs/orthers/animation';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function ServiceBanner(props: IAppProps) {
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
            <div className={'rounded-xl border-2 w-full h-80'}></div>
        </div>
    );
}
