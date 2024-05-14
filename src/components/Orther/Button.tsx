import { Button } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import useSize from '~/libs/hooks/useSize';
import styles from './Orther.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export interface IAppProps {
    text: string;
    path?: string;
    rule?: string;
    rule2?: string;
    setDefaultServiceValue?: any;
    index?: number;
    index2?: number;
    setDefaultService?: any;
    setDefaultListValue?: any;
    setDefaultList?: any;
    color?: string;
    fullWidth?: boolean;
}

export default function ButtonCommon({
    text,
    path,
    rule,
    rule2,
    setDefaultServiceValue,
    index,
    index2,
    setDefaultService,
    setDefaultListValue,
    setDefaultList,
    color,
    fullWidth,
}: IAppProps) {
    const { sizeX } = useSize();

    return (
        <button
            style={{
                color:
                    color === 'secondary'
                        ? '#000'
                        : rule === 'rule-1'
                          ? '#fff'
                          : rule2 === 'rule-1'
                            ? '#fff'
                            : rule === 'rule-2'
                              ? 'var(--primary)'
                              : rule2 === 'rule-2'
                                ? 'var(--primary)'
                                : !!rule
                                  ? '#fff'
                                  : 'var(--primary)',
                textTransform: !!path ? 'uppercase' : 'initial',
                fontWeight: '600',
                fontSize: sizeX < 550 ? '12.5px' : path ? '14px' : '13px',
                height: sizeX < 550 ? '37px' : '40px',
                transition: 'all ease .5s',
                backgroundColor:
                    rule === 'rule-1'
                        ? 'var(--primary)'
                        : rule === 'rule-2'
                          ? '#fff'
                          : rule2 === 'rule-1'
                            ? 'var(--primary)'
                            : rule2 === 'rule-2'
                              ? '#fff'
                              : color === 'secondary'
                                ? 'var(--secondary)'
                                : '',
                padding: '8px 14px',
                borderRadius: '5px',
                border: color === 'secondary' ? '' : 'solid 1.5px var(--primary)',
                width: fullWidth ? '100%' : '',
                // ':hover': {
                //     backgroundColor:
                //         rule === 'rule-1' ? 'var(--primary)' : rule2 === 'rule-1' ? 'var(--primary)' : '#fff',
                //     outline:
                //         color === 'secondary'
                //             ? 'solid 2px var(--secondary)'
                //             : rule === 'rule-1'
                //               ? ''
                //               : rule2 === 'rule-1'
                //                 ? ''
                //                 : 'solid 2px var(--primary)',
                //     color:
                //         color === 'secondary'
                //             ? 'var(--secondary)'
                //             : rule === 'rule-1'
                //               ? '#fff'
                //               : rule2 === 'rule-1'
                //                 ? '#fff'
                //                 : 'var(--primary)',
                // },
            }}
            className={cx('button-hover')}
            onClick={() => {
                !!rule ? setDefaultServiceValue(index) : '';
                !!rule ? setDefaultService(text) : '';
                !!rule2 ? setDefaultListValue(index2) : '';
                !!rule2 ? setDefaultList(text) : '';
            }}
        >
            {!!path ? (
                <Link href={`/${path}`} style={{ margin: '0px' }}>
                    {text}
                </Link>
            ) : (
                text
            )}
        </button>
    );
}
