'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './faq.module.scss';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const cx = classNames.bind(styles);

export interface IFaqProps {
}

export default function Question(props: IFaqProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={'border-2 rounded-lg py-2 px-4 my-2 ' + (isOpen ? 'bg-gray-100' : '')}
             style={{
                 borderColor: isOpen ? 'var(--primary)' : 'black',
             }}
        >
            <div className={'flex justify-between items-center'}>
                <div className={cx('faq-question')}
                     style={{
                         color: isOpen ? 'var(--primary)' : 'black',
                     }}
                >
                    Phí vận chuyển?
                </div>
                <IconButton
                    sx={{
                        color: isOpen ? 'var(--primary)' : 'black',
                    }}
                    onClick={toggleOpen}
                >
                    {isOpen ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </div>
            {isOpen && (
                <div className={cx('faq-answer')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                </div>
            )}
        </div>
    );
}