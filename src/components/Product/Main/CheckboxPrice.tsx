'use client';

import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import smoothScroll from '~/libs/orthers/smoothScroll';
import { useEffect } from 'react';
import { Checkbox } from '@mui/material';

const cx = classNames.bind(styles);

export interface CheckboxItemProps {
    filterField: any;
    checkbox: any;
    checked: any;
    setChecked: any;
}

export default function CheckboxPrice({ filterField, checkbox, checked, setChecked }: CheckboxItemProps) {
    const handleCheckbox = (e: any) => {
        const existingItem = checked.find((item: any) => item.field === filterField);
        if (e.target.checked) {
            if (existingItem) {
                // Thay đổi giá trị checkbox của item hiện có
                const updatedChecked = checked.map((item: any) =>
                    item.field === filterField
                        ? {
                              ...item,
                              checkbox: checkbox.title,
                              min: checkbox.min,
                              max: checkbox.max,
                          }
                        : item,
                );
                setChecked(updatedChecked);
            } else {
                // Thêm item mới vào checked
                setChecked([
                    ...checked,
                    {
                        field: filterField,
                        checkbox: checkbox.title,
                        min: checkbox.min,
                        max: checkbox.max,
                    },
                ]);
            }
        } else {
            if (existingItem) {
                // Xóa item hiện có khỏi checked
                setChecked(checked.filter((item: any) => item !== existingItem));
            }
        }
        smoothScroll('div#listAllProduct');
    };

    useEffect(() => {}, [checked]);

    return (
        <div className={'flex items-center gap-2'}>
            <Checkbox
                value={checkbox}
                onChange={handleCheckbox}
                checked={checked.some(
                    (item: any) => item.field === filterField && item.checkbox === checkbox.title,
                )}
            />
            <p className={cx('label')}>{checkbox.title}</p>
        </div>
    );
}
