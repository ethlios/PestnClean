import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { formatDate } from '~/libs/orthers/formatDate';
import classNames from 'classnames/bind';
import styles from './Discount.module.scss';
import { getAllUsersNotAdmin } from '~/libs/orthers/getData';
import Toast from '~/components/Orther/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { updateStatusDiscount } from '~/redux/actions';
import { sendEmail } from '~/actions/sendEmails';
export interface IAppProps {
    isOpen: boolean;
    isClose: Function;
    dataSendMail: any;
    showToast: any
}

const cx = classNames.bind(styles);
export default function DialogSendAll({ isOpen, isClose, dataSendMail , showToast }: IAppProps) {
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
    };

    // Xử lý kiểm tra email được chọn với email đã gửi được gửi xem có trùng khớp không?
    function arraysAreEqual(array1: string[], array2: string[]): boolean {
        // Kiểm tra độ dài của mảng
        if (array1.length !== array2.length) {
            return false;
        }

        // So sánh từng phần tử
        for (let i = 0; i < array1.length; i++) {
            // Nếu có bất kỳ phần tử nào khác nhau, trả về false
            if (array1[i] !== array2[i]) {
                return false;
            }
        }

        // Nếu không có phần tử nào khác nhau, trả về true
        return true;
    }

    const handleSendAllMail = async () => {
        if (dataSendMail) {
            setIsLoader(true);
            setIsClicked(true);
            const respUsers = await getAllUsersNotAdmin();
            const {data , message} = respUsers;
            console.log(respUsers);
            const emailAccepts = [];
            for (const item of data) {
                const resp = await sendEmail({ data: dataSendMail, user: item });
                emailAccepts.push(resp.accepted[0]);
            }
            const emails: string[] = data.map((user:any) => user.email);
            if(arraysAreEqual(emailAccepts, emails)){
                dispatch(updateStatusDiscount({id: dataSendMail.id , status: true}));
            };
        }
    };


    React.useEffect(() => {
        if(selector.message === 'Update Status Success'){
            reset();
            showToast({
                message: "Đã gửi email thông báo khuyến mãi cho tất cả người dùng",
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
                            Bạn có muốn gửi thông báo mã khuyến mãi đến tất cả mọi người?
                        </p>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold text-sm">Với nội dụng:</p>
                        <ul className="mt-2">
                            <li className="font-medium text-xs mt-2">Tiêu đề: {dataSendMail.name}</li>
                            <li className="font-medium text-xs mt-2">Mã code: {dataSendMail.code}</li>
                            <li className="font-medium text-xs mt-2">Tỉ lệ giảm: {dataSendMail.percent+ '%'}</li>
                            <li className="font-medium text-xs mt-2">Mô tả: {dataSendMail.description}</li>
                            <li className="font-medium text-xs mt-2">
                                Ngày bắt đầu: {formatDate(dataSendMail.dateStart)}
                            </li>
                            <li className="font-medium text-xs mt-2">
                                Ngày kết thúc: {formatDate(dataSendMail.dateEnd)}
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-end">
                        <button className={cx('wrapper-btnCancelSendAll')} onClick={handleClose}>
                            Hủy
                        </button>
                        <button
                            className={cx(
                                'wrapper-btnSendAll',
                                !isLoader ? 'wrapper-btnSendAll-success' : 'wrapper-btnSendAll-loader',
                            )}
                            onClick={handleSendAllMail}
                            disabled={isClicked}
                        >
                            {isLoader ? '...' : 'Gửi Mail'}
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
