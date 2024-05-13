'use client';

import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import { Checkbox } from '@mui/material';
import { useEffect } from 'react';
import smoothScroll from '~/libs/orthers/smoothScroll';

const cx = classNames.bind(styles);

export interface CheckboxMenuProps {
    filter: any;
    checked: any;
    setChecked: any;
}

export default function CheckboxMenu({ filter, checked, setChecked }: CheckboxMenuProps) {
    return (
        <div className={'flex flex-col gap-2'}>
            <h2 className={cx('filter-title')}>{filter.title}</h2>
            {filter.checkbox && (
                <div className={'flex justify-between flex-wrap *:w-1/2'}>
                    {filter.checkbox.map((checkbox: any, index: any) => (
                        <CheckboxItem
                            key={index}
                            checkbox={checkbox}
                            checked={checked}
                            setChecked={setChecked}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

interface CheckboxItemProps {
    checkbox: any;
    checked: any;
    setChecked: any;
}

export function CheckboxItem({ checkbox, checked, setChecked }: CheckboxItemProps) {
    const handleCheckbox = (e: any) => {
        if (e.target.checked) {
            setChecked([...checked, checkbox]);
        } else {
            setChecked(checked.filter((item: any) => item !== checkbox));
        }
        smoothScroll('div#listAllProduct');
    };

    useEffect(() => {}, [checked]);

    return (
        <div className={'flex items-center gap-2'}>
            <Checkbox value={checkbox} onChange={handleCheckbox} checked={checked.includes(checkbox)} />
            <p className={cx('label')}>{checkbox}</p>
        </div>
    );
}
