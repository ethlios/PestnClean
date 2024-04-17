'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const cx = classNames.bind(styles);

export interface IAppProps {
    children?: React.ReactNode;
    title?: string;
}

export default function DescriptTab(props: IAppProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={cx('tab-item')}>
            <div className={cx('tab-title')}>
                <h2>{props.title}</h2>
                <IconButton onClick={toggleOpen}>
                    {isOpen ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </div>
            {isOpen && (
                <div className={cx('tab-content')}>
                    {props.children}
                </div>
            )}
        </div>
    );
}