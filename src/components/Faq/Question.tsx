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
    title: string;
    content?: string;
}

export default function Question({ title, content }: IFaqProps) {
    const [isOpen, setIsOpen] = useState(false);
    const searchParams = useSearchParams();
    const mainRef = useRef<any>();

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const q = searchParams.get('q');

        if (nameToLink(title).slice(0, -1) === q) {
            setIsOpen(true);

            mainRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [searchParams, title]);

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
                    {title}
                </div>
                <IconButton
                    sx={{
                        color: isOpen ? 'var(--primary)' : 'black',
                    }}
                >
                    {isOpen ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </div>
            {isOpen && content && (
                <div className={cx('faq-answer')} dangerouslySetInnerHTML={{ __html: content }} />
            )}
        </div>
    );
}
