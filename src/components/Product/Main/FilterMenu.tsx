'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import smoothScroll from '~/libs/orthers/smoothScroll';

const cx = classNames.bind(styles);

export interface IAppProps {
    title: string;
    subMenu?: any;
    field?: string;
    setSelected?: any;
    selected?: any;
}

export default function FilterMenu({ title, subMenu, field, selected, setSelected }: IAppProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleFilter = (e: any) => {
        const value = e.target.dataset.value;
        smoothScroll('div#listAllProduct');
        if (selected === value) return setSelected([]);
        setSelected(value);
    };

    return (
        <>
            <div
                className={cx(
                    `${field === 'category1' ? 'title1' : field === 'category2' ? 'title2' : 'title3'}`,
                )}
            >
                <p
                    data-value={title}
                    onClick={handleFilter}
                    style={{ color: selected.includes(title) ? 'var(--primary)' : 'black' }}
                >
                    {title}
                </p>
                {subMenu?.length > 0 &&
                    (isOpen ? (
                        <KeyboardArrowDownIcon onClick={toggleOpen} />
                    ) : (
                        <KeyboardArrowRightIcon onClick={toggleOpen} />
                    ))}
            </div>
            {subMenu?.length > 0 && isOpen && (
                <ul className={cx('drop-menu')}>
                    {subMenu.map((subMenu: any, index: number) => (
                        <FilterMenu
                            key={index}
                            title={subMenu.title}
                            subMenu={subMenu.subMenu}
                            field={subMenu.field}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}
