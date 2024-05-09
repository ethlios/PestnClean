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
    setSelected?: any;
    selected?: any;
}

export default function FilterMenu({ title, subMenu, className, selected, setSelected }: IAppProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleFilter = (e: any) => {
        const value = e.target.innerText || e.target.innerHTML;
        if (selected === value) return setSelected([]);
        setSelected(value);
    };

    return subMenu && subMenu.length > 0 ? (
        <>
            <div className={cx(className)}>
                <p
                    defaultValue={title}
                    onClick={handleFilter}
                    style={{ color: selected === title ? 'var(--primary)' : 'black' }}
                >
                    {title}
                </p>
                {isOpen ? (
                    <KeyboardArrowDownIcon onClick={toggleOpen} />
                ) : (
                    <KeyboardArrowRightIcon onClick={toggleOpen} />
                )}
            </div>
            {isOpen && (
                <ul className={cx('drop-menu')}>
                    {subMenu.map((subMenu: any, index: number) => (
                        <FilterMenu
                            key={index}
                            title={subMenu.title}
                            subMenu={subMenu.subMenu}
                            className={cx('title2')}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    ))}
                </ul>
            )}
        </>
    ) : (
        <p
            defaultValue={title}
            onClick={handleFilter}
            style={{ color: selected === title ? 'var(--primary)' : 'black' }}
        >
            {title}
        </p>
    );
}
