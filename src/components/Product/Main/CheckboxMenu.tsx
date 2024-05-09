'use client';

import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import { Checkbox } from '@mui/material';

const cx = classNames.bind(styles);

export interface CheckboxMenuProps {
    filter: any;
}

export default function CheckboxMenu({ filter }: CheckboxMenuProps) {
    return (
        <div className={'flex flex-col gap-2'}>
            <h2 className={cx('filter-title')}>{filter.title}</h2>
            {filter.checkbox &&
                filter.checkbox.map((checkbox: any, index: any) => (
                    <CheckboxItem key={index} checkbox={checkbox} />
                ))}
            {filter.checkboxLeft && filter.checkboxRight && (
                <div className={'flex justify-between *:flex *:flex-col *:gap-2 *:w-1/2'}>
                    <div>
                        {filter.checkboxLeft.map((checkbox: any, index: any) => (
                            <CheckboxItem key={index} checkbox={checkbox} />
                        ))}
                    </div>
                    <div>
                        {filter.checkboxRight.map((checkbox: any, index: any) => (
                            <CheckboxItem key={index} checkbox={checkbox} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

interface CheckboxItemProps {
    checkbox: any;
}

export function CheckboxItem({ checkbox }: CheckboxItemProps) {
    return (
        <div className={'flex items-center gap-2'}>
            <Checkbox />
            <p className={cx('label')}>{checkbox}</p>
        </div>
    );
}
