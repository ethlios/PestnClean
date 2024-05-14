'use client';

import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './service.module.scss';
import { gsap } from 'gsap';
import { slideFromX } from '~/libs/orthers/animation';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cx = classNames.bind(styles);

export interface IAppProps {
    children: React.ReactNode;
}

export default function ParagraphAlignLeft(props: IAppProps) {
    const ref = useRef<any>();

    useEffect(() => {
        gsap.fromTo(ref.current, slideFromX(ref.current, -500)[0], slideFromX(ref.current, -500)[1]);
    }, []);

    return (
        <div className={'grid grid-cols-5 mb-10'} ref={ref}>
            <div className={'col-span-5 lg:col-span-3'}>
                <div className={'text-left'}>{props.children}</div>
            </div>
        </div>
    );
}
