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
                            filterField={filter.field}
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
    filterField: any;
    checkbox: any;
    checked: any;
    setChecked: any;
}

export function CheckboxItem({ filterField, checkbox, checked, setChecked }: CheckboxItemProps) {
    const handleCheckbox = (e: any) => {
        const existingItem = checked.find((item: any) => item.field === filterField);
        if (e.target.checked) {
            if (existingItem) {
                // Thay đổi giá trị checkbox của item hiện có
                const updatedChecked = checked.map((item: any) =>
                    item.field === filterField ? { ...item, checkbox: checkbox } : item,
                );
                setChecked(updatedChecked);
            } else {
                // Thêm item mới vào checked
                setChecked([...checked, { field: filterField, checkbox: checkbox }]);
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
                    (item: any) => item.field === filterField && item.checkbox === checkbox,
                )}
            />
            <p className={cx('label')}>{checkbox}</p>
        </div>
    );
}
