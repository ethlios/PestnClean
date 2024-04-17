'use client';

import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './faq.module.scss';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { nameToLink } from '~/libs/orthers/nameToLink';

const cx = classNames.bind(styles);

export interface IFaqProps {
    text: string;
    answer?: string;
}

export default function Question({ text, answer }: IFaqProps) {
    const [isOpen, setIsOpen] = useState(false);
    const searchParams = useSearchParams();
    const mainRef = useRef<any>();

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const q = searchParams.get('q');

        if (nameToLink(text).slice(0, -1) === q) {
            setIsOpen(true);

            mainRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [searchParams, text]);

    return (
        <div
            className={'border-2 rounded-lg py-3 px-4 my-2 ' + (isOpen ? 'bg-gray-100' : '')}
            style={{
                borderColor: isOpen ? 'var(--primary)' : 'black',
            }}
            ref={mainRef}
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
