'use client';

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import ButtonCommon from '../Orther/Button';

const cx = classNames.bind(styles);

export interface IAppProps {}

const imgTypes = ['All', 'Vệ sinh', 'Diệt côn trùng', 'Đào tạo'];

export default function ImageWork(props: IAppProps) {
    const [defaulListValue, setDefaultListValue] = useState<number>(0);
    const [defaultList, setDefaultList] = useState<string>('Tất cả');

    return (
        <div className={cx('work-wrapper')}>
            <h1
                className={
                    'pb-5 text-center font-bold underline underline-offset-2 text-2xl uppercase mt-14 decoration-2'
                }
            >
                Hình ảnh làm việc
            </h1>
            <div className={cx('btn-lists')}>
                {imgTypes.map((btn, index) => {
                    return (
                        <ButtonCommon
                            key={index}
                            text={btn}
                            setDefaultListValue={setDefaultListValue}
                            rule2={defaulListValue === index ? 'rule-1' : 'rule-2'}
                            index2={index}
                            setDefaultList={setDefaultList}
                        />
                    );
                })}
            </div>
            <div className={cx('img-wrapper')}>
                {Array.from({ length: 8 }).map((_, index) => {
                    return <div key={index} className={cx('img-item')}></div>;
                })}
            </div>
        </div>
    );
}
