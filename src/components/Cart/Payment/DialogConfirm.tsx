import emailjs from '@emailjs/browser';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ButtonCommon from '~/components/Orther/Button';
import useSize from '~/libs/hooks/useSize';
import { RootState } from '~/redux/provider/store';
import sendEmailImg from '../../../../public/img/Asset 1.png';
import styles from './payment.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {
    setShowDialog?: any;
    formInfoRef?: any;
    cartOrder?: any;
}

export default function DialogConfirm({ setShowDialog, formInfoRef, cartOrder }: IAppProps) {
    const { sizeX } = useSize();
    let orderBehavior = useSelector((state: RootState) => state.main.orderBehavior);

    const sendEmail = () => {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formInfoRef.current, 'YOUR_USER_ID').then(
            (result) => {
                console.log('SEND EMAIL SUCCESS!');
            },
            (error) => {
                console.log('SEND EMAIL FAILED...', error);
            },
        );
    };

    useEffect(() => {
        if (orderBehavior === '2') {
            localStorage.setItem('cartOrder', JSON.stringify([]));
            const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
            const filteredCart = localStorageCart.filter((cartItem: any) => {
                // Kiểm tra xem cartItem có tồn tại trong cartOrder hay không
                const existsInCartOrder = cartOrder.some((orderItem: any) => orderItem.id === cartItem.id);
                // Nếu không tồn tại trong cartOrder, giữ lại item
                return !existsInCartOrder;
            });
            localStorage.setItem('cart', JSON.stringify(filteredCart));
            // sendEmail();
        }
    }, [cartOrder, orderBehavior]);

    const handleClose = () => {
        setShowDialog(false);
    };

    return (
        <div className="cpmount">
            <div className={cx('dialog-wrapper')}>
                {orderBehavior === '0' ? (
                    <CircularProgress color="success" />
                ) : (
                    <div
                        className={cx('dialog-content')}
                        style={{
                            padding: sizeX < 500 ? '20px' : '',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={sendEmailImg.src}
                            alt="email pestnclean"
                            width={sizeX < 500 ? 180 : 230}
                            height={230}
                        />
                        <p
                            className={cx('dialog-title')}
                            style={{
                                fontSize: sizeX < 500 ? '16px' : '19px',
                                textAlign: 'center',
                                marginBottom: '10px',
                                textTransform: 'uppercase',
                                fontWeight: '700',
                                letterSpacing: '-.5px',
                            }}
                        >
                            {orderBehavior === '2' ? 'Đặt hàng thành công!' : 'Đặt hàng thất bại!'}
                        </p>
                        {orderBehavior === '2' && (
                            <p
                                style={{
                                    fontSize: '14.5px',
                                    fontWeight: '500',
                                    letterSpacing: '-.2px',
                                }}
                            >
                                Cảm ơn bạn đã mua hàng tại cửa hàng chúng tôi, chúng tôi sẽ liên hệ với bạn
                                trong thời gian sớm nhất.
                            </p>
                        )}
                        <div className={cx('dialog-button')}>
                            {orderBehavior === '2' ? (
                                <>
                                    <ButtonCommon
                                        path="sanpham"
                                        text={sizeX < 580 ? 'Shop' : 'Tiếp tục mua hàng'}
                                    ></ButtonCommon>
                                    <ButtonCommon
                                        path="/"
                                        text={sizeX < 580 ? 'Home' : 'Quay về trang chủ'}
                                    ></ButtonCommon>
                                </>
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
                )}
            </div>
        </div>
    );
}
