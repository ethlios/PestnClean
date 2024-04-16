'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './payment.module.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const cx = classNames.bind(styles);

export interface IAppProps {
}

const classInput = 'w-full md:w-3/4 ';

export default function PaymentForm(props: IAppProps) {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <div className="p-3">
            <div className={'my-3'}>
                <h3 className={cx('title')}>Phương thức thanh toán</h3>

            </div>
            <div className={'my-3'}>
                <h3 className={cx('title')}>Thông tin giao hàng</h3>
                <div className={'my-3'}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="name" label="Tên..." className={classInput} />
                        <TextField id="email" label="Email..." className={classInput} />
                        <TextField id="phone" label="Số điện thoại..." className={classInput} />
                        <TextField id="address" label="Địa chỉ..." className={classInput} />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
        </div>
    );
}