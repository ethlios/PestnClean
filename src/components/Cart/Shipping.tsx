import classNames from 'classnames/bind';
import styles from './cart.module.scss';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function Shipping(props: IAppProps) {
    return (
        <div className="my-3">
            <h3 className={cx('title')}>Hình thức giao hàng</h3>
            <div className="mt-3">
                <FormControl className={'w-full'}>
                    <RadioGroup defaultValue="free" name="radio-shipping">
                        <div
                            className={
                                'flex justify-between items-center px-1 my-1 border-2 rounded-lg'
                            }
                        >
                            <div className={'flex items-center'}>
                                <Radio value="free" />
                                <b>Miễn phí</b>
                            </div>
                            <b>
                                0 <span className={cx('currency')}>đ</span>
                            </b>
                        </div>
                        <div
                            className={
                                'flex justify-between items-center px-1 my-1 border-2 rounded-lg'
                            }
                        >
                            <div className={'flex items-center'}>
                                <Radio value="fast" />
                                <b>Nhanh</b>
                            </div>
                            <b>
                                30.000 <span className={cx('currency')}>đ</span>
                            </b>
                        </div>
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    );
}