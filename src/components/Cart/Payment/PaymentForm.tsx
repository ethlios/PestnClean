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

const cx = classNames.bind(styles);

export interface IAppProps {
}

const classInput = 'w-full md:w-3/4 ';

export default function PaymentForm(props: IAppProps) {

    return (
        <div className="p-3">
            <div className={'my-3'}>
                <h3 className={cx('title')}>Phương thức thanh toán</h3>
                <div className={'my-3'}>
                    <div className={classInput + 'p-4 rounded border-2 flex items-center my-1'}>
                        <PaymentsIcon className={'mr-3'} />
                        <p>COD</p>
                    </div>
                    <div className={classInput + 'p-4 rounded border-2 flex items-center my-1'}>
                        <PaymentIcon className={'mr-3'} />
                        <p>Chuyển khoản</p>
                    </div>
                </div>
            </div>
            <div className={'my-3'}>
                <h3 className={cx('title')}>Thông tin giao hàng</h3>
                <div className={'my-3'}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { mb: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="name" label="Tên..." className={classInput} />
                        <TextField id="email" label="Email..." className={classInput} />
                        <TextField id="phone" label="Số điện thoại..." className={classInput} />
                        <TextField id="address" label="Địa chỉ..." className={classInput} />
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
                    <FormGroup>
                        <FormControlLabel
                            required
                            control={<Checkbox />}
                            label="Tôi đã đọc chính sách bảo mật và quyền riêng tư"
                        />
                    </FormGroup>
                </div>
            </div>
        </div>
    );
}