'use client';

import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './service.module.scss';
import { gsap } from 'gsap';
import { fadeIn } from '~/libs/orthers/animation';

const cx = classNames.bind(styles);

export interface IAppProps {
    children: React.ReactNode;
    className?: string;
}

export default function BundleCard(props: IAppProps) {
    const ref = useRef<any>();
    useEffect(() => {
        gsap.fromTo(ref.current, fadeIn(ref.current)[0], fadeIn(ref.current)[1]);
    }, []);

    return (
        <div className={props.className} ref={ref}>
            <div className={cx('bundle-card')}>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 fix:grid-cols-3 gap-6'}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
