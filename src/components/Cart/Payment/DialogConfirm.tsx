import { Button } from '@mui/material';
import styles from './payment.module.scss';
import classNames from 'classnames/bind';
import useSize from '~/libs/hooks/useSize';
import formatter from '~/libs/orthers/formatMoney';

const cx = classNames.bind(styles);

export interface IAppProps {
    setShowDialog?: any;
    formData?: any;
    cart?: any;
    totalAllPrice?: number;
}

export default function DialogConfirm({ setShowDialog, formData, cart, totalAllPrice }: IAppProps) {
    const { sizeX } = useSize();

    const handleClose = () => {
        setShowDialog(false);
    };

    const handleConfirm = () => {
        console.log('Confirm');
        // Do something
    };

    return (
        <div className="cpmount">
            <div className={cx('dialog-wrapper')} onClick={handleClose}>
                <div
                    className={cx('dialog-content')}
                    style={{
                        padding: sizeX < 500 ? '20px' : '',
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <p
                        className={cx('dialog-title')}
                        style={{
                            fontSize: sizeX < 500 ? '16px' : '',
                            textAlign: 'center',
                        }}
                    >
                        Xác nhận thông tin đơn hàng?
                    </p>
                    <div
                        className={'flex justify-between items-center my-2'}
                        style={{
                            flexDirection: sizeX < 500 ? 'column' : 'row',
                        }}
                    >
                        <div style={{ width: sizeX < 500 ? '100%' : '50%' }}>
                            <b>Thông tin giao hàng</b>
                            <p className={cx('dialog-info')}>
                                <span>Tên: </span>
                                <span>{formData.name}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Email: </span>
                                <span>{formData.email}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Số điện thoại: </span>
                                <span>{formData.phone}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Địa chỉ: </span>
                                <span>{formData.address}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Thành phố: </span>
                                <span>{formData.city}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Quận/Huyện: </span>
                                <span>{formData.district}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Phường/Xã: </span>
                                <span>{formData.ward}</span>
                            </p>
                            <p className={cx('dialog-info')}>
                                <span>Thông điệp: </span>
                                <span>{formData.message}</span>
                            </p>
                        </div>
                        <div style={{ width: sizeX < 500 ? '100%' : '50%' }}>
                            <b>Thông tin đơn hàng</b>
                            {cart.map((item: any, index: number) => (
                                <div key={index} className={cx('dialog-info')}>
                                    <span>{item.quantity}</span>
                                    <span> x </span>
                                    <span>{item.title}</span>
                                </div>
                            ))}
                            <b>Tổng : {formatter.format(totalAllPrice)}</b>
                        </div>
                    </div>
                    <div className={cx('dialog-button')}>
                        <Button
                            variant="outlined"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '600',
                                outline: '2px solid',
                                width: '50%',
                            }}
                            onClick={handleClose}
                        >
                            {sizeX < 580 ? 'Back' : 'Quay lại thông tin'}
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '600',
                                width: '50%',
                            }}
                            onClick={handleConfirm}
                        >
                            {sizeX < 580 ? 'Confirm' : 'Xác nhận'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
