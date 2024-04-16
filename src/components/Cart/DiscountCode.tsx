import classNames from 'classnames/bind';
import styles from './cart.module.scss';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function DiscountCode(props: IAppProps) {
    return (
        <div className="my-3">
            <h3 className={cx('title')}>Mã khuyến mãi</h3>
            <p className={cx('description')}>Nhập mã khuyến mãi để được giảm giá</p>
            <div className="mt-3">
                <FormControl className={'w-full'}>
                    <OutlinedInput
                        id="discount-code"
                        endAdornment={
                            <InputAdornment position="end">
                                <Button variant="text" color="inherit">
                                    Gửi
                                </Button>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
        </div>
    );
}