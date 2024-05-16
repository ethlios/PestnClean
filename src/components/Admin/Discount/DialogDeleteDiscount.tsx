import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import classNames from 'classnames/bind';
import styles from './Discount.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { clearMessage, removeDiscount } from '~/redux/actions';
export interface IAppProps {
    isOpen: boolean;
    isClose: Function;
    dataSendMail: any;
    showToast: any
}

const cx = classNames.bind(styles);
export default function DialogDeleteDiscount({ isOpen, isClose, dataSendMail , showToast }: IAppProps) {
    const [open, setOpen] = React.useState(false);
    const [isLoader, setIsLoader] = React.useState(false);
    const [isClicked, setIsClicked] = React.useState(false);
    const dispatch = useDispatch();
    const selector = useSelector((state:RootState) => state.main);
    const handleClose = () => {
        setOpen(false);
        isClose(false);
    };

    const reset = () => {
        setIsClicked(false);
        setIsLoader(false);
        handleClose();
        dispatch(clearMessage());
    };

    const handleDeleteDiscount = () => {
        if(dataSendMail && dataSendMail.id){
            setIsLoader(true);
            setIsClicked(true);
            dispatch(removeDiscount({id: dataSendMail.id}));
        }
    };


    React.useEffect(() => {
        if(selector.message === 'Delete Success'){
            reset();
            showToast({
                message: "Đã xóa mã khuyến mãi",
                status: true
            })
        }
    },[selector.message]);

    React.useEffect(() => {
        if (isOpen) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [isOpen]);

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="p-4">
                    <div className="">
                        <p className="text-base font-semibold">
                            Bạn có chắc chắn muốn xóa mã khuyến mãi?
                        </p>
                    </div>
                    <div className="flex items-center justify-end mt-5">
                        <button className={cx('wrapper-btnCancelSendAll')} onClick={handleClose}>
                            Hủy
                        </button>
                        <button
                            className={cx(
                                'wrapper-btnSendAll',
                                !isLoader ? 'wrapper-btnSendAll-success' : 'wrapper-btnSendAll-loader',
                            )}
                            onClick={handleDeleteDiscount}
                            disabled={isClicked}
                        >
                            {isLoader ? '...' : 'Xác nhận'}
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
