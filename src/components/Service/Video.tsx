'use client';

import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './service.module.scss';
import { gsap } from 'gsap';
import { fadeIn } from '~/libs/orthers/animation';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useSize from '~/libs/hooks/useSize';

gsap.registerPlugin(ScrollTrigger);

const cx = classNames.bind(styles);

export interface IAppProps {
    title?: string;
    src: string;
    orther?: boolean;
}

export default function Video(props: IAppProps) {
    const ref = useRef<any>();
    const { sizeX } = useSize();

    useEffect(() => {
        gsap.fromTo(ref.current, fadeIn(ref.current)[0], fadeIn(ref.current)[1]);
    }, []);

    return (
        <div
            className={'my-10'}
            style={{
                width: '100%',
                height: sizeX < 1024 ? 'auto' : 'auto',
                backgroundColor: 'rgba(0,0,0,1)',
            }}
            ref={ref}
        >
            <video
                style={{ width: '100%', height: '100%' }}
                controls
                preload="none"
                draggable={false}
                title={props.title}
            >
                <source src={props.src} type="video/mp4" />
            </video>
            {/* <iframe src={props.src} width="100%" height="100%"></iframe> */}
        </div>
    );
}
