'use client';

import classNames from 'classnames/bind';
import styles from './payment.module.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SelectField from '~/components/Cart/Payment/SelectField';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import useSize from '~/libs/hooks/useSize';
import Link from 'next/link';

const cx = classNames.bind(styles);

export interface IAppProps {}

const classInput = 'w-full lg:w-5/6';

export default function PaymentForm(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div>
            <div>
                <p className={cx('title')}>Phương thức thanh toán</p>
                <div className={'my-5'}>
                    <div
                        className={`${cx('payment-method')} ${classInput}`}
                        style={{
                            border: 'solid 2px var(--primary)',
                            color: 'var(--primary)',
                        }}
                    >
                        <PaymentsOutlinedIcon className={'mr-3'} />
                        <p>COD</p>
                    </div>
                    <div className={`${cx('payment-method')} ${classInput}`}>
                        <PaymentIcon className={'mr-3'} />
                        <p>CHUYỂN KHOẢN</p>
                    </div>
                </div>
            </div>
            <div className={'my-3'}>
                <p className={cx('title')}>Thông tin giao hàng</p>
                <div className={'my-5'}>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            flexDirection: 'column',
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="name"
                            label="Tên..."
                            className={classInput}
                            sx={{ marginBottom: '10px' }}
                        />
                        <TextField
                            id="email"
                            label="Email..."
                            className={classInput}
                            sx={{ marginBottom: '10px' }}
                        />
                        <TextField
                            id="phone"
                            label="Số điện thoại..."
                            className={classInput}
                            sx={{ marginBottom: '10px' }}
                        />
                        <TextField
                            id="address"
                            label="Địa chỉ..."
                            className={classInput}
                            sx={{ marginBottom: '10px' }}
                        />
                        <SelectField id="city" label="Tỉnh thành" className={classInput}>
                            <MenuItem value={'hn'}>Hà Nội</MenuItem>
                            <MenuItem value={'dn'}>Đà Nẵng</MenuItem>
                            <MenuItem value={'hcm'}>Hồ Chí Minh</MenuItem>
                        </SelectField>
                        <SelectField id="district" label="Quận huyện" className={classInput}>
                            <MenuItem value={'q1'}>Quận 1</MenuItem>
                            <MenuItem value={'binhthanh'}>Bình Thạnh</MenuItem>
                            <MenuItem value={'thuduc'}>Thủ Đức</MenuItem>
                        </SelectField>
                        <SelectField id="street" label="Phường xã" className={classInput}>
                            <MenuItem value={'phuong1'}>Phường 1</MenuItem>
                            <MenuItem value={'phuong2'}>Phường 2</MenuItem>
                            <MenuItem value={'phuong3'}>Phường 3</MenuItem>
                        </SelectField>
                    </Box>
                    <textarea
                        spellCheck="false"
                        placeholder="Ghi chú thêm"
                        className={`${cx('textarea')} ${classInput}`}
                    />

                    <FormControlLabel
                        required
                        control={<Checkbox />}
                        label="Tôi đã đọc chính sách bảo mật và quyền riêng tư."
                        sx={{
                            marginTop: '5px',
                            fontSize: '10px',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
