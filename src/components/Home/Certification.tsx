import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function Certification(props: IAppProps) {
    return (
        <div className={cx('certi-wrapper')}>
            <h1 className={'pb-5 text-center font-bold underline underline-offset-2 text-2xl uppercase'}>
                Giải thưởng và chứng nhận
            </h1>
            <div className={cx('certi-img-wrapper')}>
                {Array.from({ length: 6 }).map((_, index) => {
                    return <div key={index} className={cx('certi-item')}></div>;
                })}
            </div>
        </div>
    );
}
