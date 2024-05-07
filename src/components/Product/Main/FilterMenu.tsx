'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const cx = classNames.bind(styles);

export interface IAppProps {
    title: string;
    subMenu?: any;
    className?: string;
}

export default function FilterMenu({ title, subMenu, className }: IAppProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return subMenu && subMenu.length > 0 ? (
        <>
            <div className={cx(className)} onClick={toggleOpen}>
                <p>{title}</p>
                {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </div>
            {isOpen && (
                <ul className={cx('drop-menu')}>
                    {subMenu.map((subMenu: any, index: number) => (
                        <FilterMenu
                            key={index}
                            title={subMenu.title}
                            subMenu={subMenu.subMenu}
                            className={cx('title2')}
                        />
                    ))}
                </ul>
            )}
        </>
    ) : (
        <p>{title}</p>
    );
}
