import { Button } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

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
}: IAppProps) {
    return (
        <Button
            variant={
                rule === 'rule-1'
                    ? 'contained'
                    : rule === 'rule-2'
                    ? 'outlined'
                    : rule2 === 'rule-1'
                    ? 'contained'
                    : rule2 === 'rule-2'
                    ? 'outlined'
                    : 'contained'
            }
            color={color === 'secondary' ? 'secondary' : 'primary'}
            sx={{
                color: color === 'secondary' ? '#fff' : '',
                textTransform: !!path ? 'uppercase' : 'initial',
                fontWeight: '600',
                fontSize: path ? '' : '13px',
                ':hover': {
                    backgroundColor:
                        rule === 'rule-1' ? 'var(--primary)' : rule2 === 'rule-1' ? 'var(--primary)' : '#fff',
                    outline:
                        color === 'secondary'
                            ? 'solid 2px var(--secondary)'
                            : rule === 'rule-1'
                            ? ''
                            : rule2 === 'rule-1'
                            ? ''
                            : 'solid 2px var(--primary)',
                    color:
                        color === 'secondary'
                            ? 'var(--secondary)'
                            : rule === 'rule-1'
                            ? '#fff'
                            : rule2 === 'rule-1'
                            ? '#fff'
                            : 'var(--primary)',
                },
            }}
            onClick={() => {
                !!rule ? setDefaultServiceValue(index) : '';
                !!rule ? setDefaultService(text) : '';
                !!rule2 ? setDefaultListValue(index2) : '';
                !!rule2 ? setDefaultList(text) : '';
            }}
        >
            {!!path ? <Link href={`/${path}`}>{text}</Link> : text}
        </Button>
    );
}
