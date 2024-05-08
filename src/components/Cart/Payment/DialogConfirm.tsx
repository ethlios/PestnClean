import { Button } from '@mui/material';
import styles from './payment.module.scss';
import classNames from 'classnames/bind';
import useSize from '~/libs/hooks/useSize';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import emailjs from '@emailjs/browser';

const cx = classNames.bind(styles);

export interface IAppProps {
    setShowDialog?: any;
    setCart?: any;
    formInfoRef?: any;
}

export default function DialogConfirm({ setShowDialog, setCart, formInfoRef }: IAppProps) {
    const { sizeX } = useSize();
    let orderBehavior = useSelector((state: RootState) => state.main.orderBehavior);

    const sendEmail = () => {
        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formInfoRef.current, 'YOUR_USER_ID')
            .then(
                (result) => {
                    console.log('SEND EMAIL SUCCESS!');
                },
                (error) => {
                    console.log('SEND EMAIL FAILED...', error);
                },
            )
            .then(() => {
                setCart([]);
                handleClose();
            });
    };

    const handleClose = () => {
        setShowDialog(false);
    };

    const handleConfirm = () => {
        sendEmail();
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
                        {orderBehavior === '2' ? 'Đặt hàng thành công' : 'Đặt hàng thất bại'}
                    </p>
                    <div className={cx('dialog-button')}>
                        {orderBehavior === '2' ? (
                            <Button
                                variant="contained"
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                }}
                                onClick={handleConfirm}
                            >
                                {sizeX < 580 ? 'Confirm' : 'Xác nhận'}
                            </Button>
                        ) : (
                            <Button
                                variant="outlined"
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    outline: '2px solid',
                                }}
                                onClick={handleClose}
                            >
                                {sizeX < 580 ? 'Back' : 'Quay lại thông tin'}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
