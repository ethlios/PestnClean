'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './faq.module.scss';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams, usePathname, useSearchParams } from 'next/navigation';

const cx = classNames.bind(styles);

export interface IFaqProps {
    text: string;
    answer?: string;
}

export default function Question({ text, answer }: IFaqProps) {
    const [isOpen, setIsOpen] = useState(false);
    const searchParams = useSearchParams();

    console.log(searchParams.get('q'));

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={'border-2 rounded-lg py-3 px-4 my-2 ' + (isOpen ? 'bg-gray-100' : '')}
            style={{
                borderColor: isOpen ? 'var(--primary)' : 'black',
            }}
        >
            <div className={'flex justify-between items-center cursor-pointer'} onClick={toggleOpen}>
                <div
                    className={cx('faq-question')}
                    style={{
                        color: isOpen ? 'var(--primary)' : 'black',
                    }}
                >
                    {text}
                </div>
                <IconButton
                    sx={{
                        color: isOpen ? 'var(--primary)' : 'black',
                    }}
                >
                    {isOpen ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </div>
            {isOpen && (
                <div className={cx('faq-answer')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.
                </div>
            )}
        </div>
    );
}
