'use client';

import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './service.module.scss';
import { gsap } from 'gsap';
import { fadeIn } from '~/libs/orthers/animation';

const cx = classNames.bind(styles);

export interface IAppProps {
    title: string;
    src: string;
}

export default function Video(props: IAppProps) {
    const ref = useRef<any>();
    useEffect(() => {
        gsap.fromTo(
            ref.current,
            fadeIn(ref.current)[0],
            fadeIn(ref.current)[1],
        );
    }, []);

    return (
        <div className={'my-10'}
             style={{ width: '100%', height: '450px', backgroundColor: 'rgba(0,0,0,0.05)' }} ref={ref}>
            <video
                style={{ width: '100%', height: '100%' }}
                controls
                preload="none"
                draggable={false}
                title={props.title}
            >
                <source
                    src={props.src}
                    type="video/mp4"
                />
            </video>
        </div>
    );
}
