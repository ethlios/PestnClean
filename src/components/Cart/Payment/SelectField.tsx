'use client';

import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface IAppProps {
    className?: string;
    id?: string;
    label?: string;
    children?: React.ReactNode;
}

export default function PaymentForm(props: IAppProps) {
    const [value, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    return (
        <FormControl sx={{ mb: 1 }} className={props.className}>
            <InputLabel id={props.label + 'Id'}>{props.label}</InputLabel>
            <Select
                labelId={props.label + 'Id'}
                id={props.id}
                value={value}
                label={props.label}
                onChange={handleChange}
            >
                {props.children}
            </Select>
        </FormControl>
    );
}