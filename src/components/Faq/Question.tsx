'use client';

import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './faq.module.scss';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { nameToLink } from '~/libs/orthers/nameToLink';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Link from 'next/link';

const cx = classNames.bind(styles);

export interface IFaqProps {
    title: string;
    path?: string;
}

export default function Question({ title, path }: IFaqProps) {
    const [isOpen, setIsOpen] = useState(false);
    const searchParams = useSearchParams();
    const mainRef = useRef<any>();

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
                transition: 'all ease .5s',
            }}
            ref={mainRef}
            onMouseOver={() => setIsOpen(true)}
            onMouseOut={() => setIsOpen(false)}
        >
            <Link href={path ?? ''} className={'flex justify-between items-center cursor-pointer'}>
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
                        marginRight: isOpen ? '10px' : '',
                        transition: 'all ease .5s',
                    }}
                >
                    <EastOutlinedIcon />
                </IconButton>
            </Link>
        </div>
    );
}
