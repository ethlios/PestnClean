'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const cx = classNames.bind(styles);

export interface IAppProps {
    title: string;
    subMenu: string[];
}

export default function FilterMenu({ title, subMenu }: IAppProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <div className={cx('menu-title')} onClick={toggleOpen}>
                <h3>{title}</h3>
                {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </div>
            {isOpen && (
                <ul className={cx('drop-menu')}>
                    {subMenu.map((subMenu, index) => (
                        <li key={index}>{subMenu}</li>
                    ))}
                </ul>
            )}
        </>
    );
}