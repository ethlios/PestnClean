import classNames from 'classnames/bind';
import styles from './Discount.module.scss';
import { RootState } from '~/redux/provider/store';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Toast from '~/components/Orther/Toast';
import AddDiscount from './AddDiscount';
import { formatDate } from '~/libs/orthers/formatDate';
import AddIcon from '@mui/icons-material/Add';
import ChooseObjectCustomer from './ChooseObjectCustomer';
import DialogSendAll from './DialogSendAll';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import moment from 'moment';
import CogWheel from '~/components/Orther/Loader/CogWheel/CogWheel';
import DialogDeleteDiscount from './DialogDeleteDiscount';
import Tippy from '@tippyjs/react';
const cx = classNames.bind(styles);

export interface IAppProps {}
export interface showToast {
    message: string;
    status: boolean;
}
export default function AdminDiscount(props: IAppProps) {
    const discounts: any = useSelector((state: RootState) => state.main.discount);
    const [isLoader, setIsLoader] = useState<boolean>(true);
    const [openAddDiscount, setOpenAddDiscount] = useState<boolean>(false);
    const [openChooseObjectCustomer, setOpenChooseObjectCustomer] = useState(false);
    const [openDialogSendAll, setOpenDialogSendAll] = useState(false);
    const [openDialogDeleteDiscount, setOpenDialogDeleteDiscount] = useState(false);
    const [dataSendMail, setDataSendMail] = useState<any>({});
    const [showToast, setShowToast] = useState<showToast>({
        message: '',
        status: false,
    });

    useEffect(() => {
        if (discounts.length > 0) setIsLoader(false);
    }, [discounts]);

    return (
        <>
            <Toast
                text={showToast.message}
                showToast={showToast.status}
                setShowToast={setShowToast}
                rule="normal"
            />
            {openAddDiscount ? (
                <AddDiscount
                    isOpen={openAddDiscount}
                    isClose={(e: boolean) => {
                        setOpenAddDiscount(e);
                        setDataSendMail({});
                    }}
                    valueUpdate={dataSendMail}
                    showToast={(e: any) => setShowToast(e)}
                />
            ) : (
                <>
                    <div className={cx('wrapper')}>
                        <div className={cx('wrapper-header', 'flex items-center justify-between')}>
                            <p className="text-lg font-semibold">Khuyễn mãi</p>
                            <div
                                className={cx(
                                    'wrapper-header-control',
                                    'flex items-center justify-center bg-primaryColor rounded',
                                )}
                            >
                                <AddIcon />
                                <button
                                    className={cx('', 'mr-2')}
                                    onClick={() => {
                                        setOpenAddDiscount(true);
                                        setDataSendMail({});
                                    }}
                                >
                                    Thêm mã khuyến mãi
                                </button>
                            </div>
                        </div>
                        <p className={cx('text-sm font-semibold')}>Số lượng: {discounts.length}</p>
                    </div>
                    {isLoader ? (
                        <div className="flex items-center justify-center relative">
                            <CogWheel />
                        </div>
                    ) : discounts && discounts.length > 0 ? (
                        <div className={cx('wrapper-table', 'mt-4')}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tiêu đề</th>
                                        <th>Mô tả</th>
                                        <th>Ngày bắt đầu</th>
                                        <th>Ngày kết thúc</th>
                                        <th>Tỉ lệ giảm</th>
                                        <th>Trạng thái</th>
                                        <th>Đối tượng</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {discounts.map((item: any, index: number) => {
                                        return (
                                            <tr key={index}>
                                                <td className={cx('font-semibold')}>{item.name}</td>
                                                <td className={cx('font-medium')}>{item.description}</td>
                                                <td className={cx('font-medium')}>
                                                    {moment(item.dateStart).format('DD/MM/YYYY')}
                                                </td>
                                                <td className={cx('font-medium')}>
                                                    {moment(item.dateEnd).format('DD/MM/YYYY')}
                                                </td>
                                                <td className={cx('font-medium')}>{item.percent + '%'}</td>
                                                <td className={cx('font-medium')}>
                                                    {item.status ? 'Đã gửi' : 'Chưa gửi'}
                                                </td>
                                                <td className={cx('font-medium')}>
                                                    <ul>
                                                        <li
                                                            className={cx(
                                                                'underline font-semibold',
                                                                item.status
                                                                    ? ''
                                                                    : 'hover:cursor-pointer text-primaryColor',
                                                            )}
                                                            onClick={() => {
                                                                if (item.status) {
                                                                    return false;
                                                                }
                                                                setOpenDialogSendAll(true);
                                                                setDataSendMail(item);
                                                            }}
                                                        >
                                                            Gửi tất cả
                                                        </li>
                                                        <li
                                                            className={cx(
                                                                'underline font-semibold',
                                                                item.status
                                                                    ? ''
                                                                    : 'hover:cursor-pointer text-primaryColor',
                                                            )}
                                                            onClick={() => {
                                                                if (item.status) {
                                                                    return false;
                                                                }
                                                                setOpenChooseObjectCustomer(true);
                                                                setDataSendMail(item);
                                                            }}
                                                        >
                                                            Tùy chọn đối tượng
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="flex items-center justify-center">
                                                        <Tippy
                                                            content={
                                                                item.status
                                                                    ? 'Mã khuyến mã đã được gửi không được chỉnh sửa'
                                                                    : 'Chỉnh sửa mã khuyễn mãi'
                                                            }
                                                        >
                                                            <div
                                                                className={cx('wrapper-btnControl')}
                                                                onClick={() => {
                                                                    if (item.status) return false;
                                                                    setDataSendMail(item);
                                                                    setOpenAddDiscount(true);
                                                                }}
                                                            >
                                                                <DriveFileRenameOutlineOutlinedIcon />
                                                            </div>
                                                        </Tippy>
                                                        <Tippy content="Xóa mã khuyễn mãi">
                                                            <div
                                                                className={cx('wrapper-btnControl', 'ml-2')}
                                                                onClick={() => {
                                                                    setOpenDialogDeleteDiscount(true);
                                                                    setDataSendMail(item);
                                                                }}
                                                            >
                                                                <DeleteOutlinedIcon />
                                                            </div>
                                                        </Tippy>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center mt-10">
                            <p className="font-semibold text-base">Chưa có mã khuyến mãi</p>
                        </div>
                    )}
                    {openChooseObjectCustomer && (
                        <ChooseObjectCustomer
                            dataSendMail={dataSendMail}
                            isOpen={openChooseObjectCustomer}
                            isClose={(e: boolean) => setOpenChooseObjectCustomer(e)}
                            showToast={(e: any) => setShowToast(e)}
                        />
                    )}
                    {openDialogSendAll && (
                        <DialogSendAll
                            dataSendMail={dataSendMail}
                            isOpen={openDialogSendAll}
                            isClose={(e: boolean) => setOpenDialogSendAll(e)}
                            showToast={(e: any) => setShowToast(e)}
                        />
                    )}
                    {openDialogDeleteDiscount && (
                        <DialogDeleteDiscount
                            dataSendMail={dataSendMail}
                            isOpen={openDialogDeleteDiscount}
                            isClose={(e: boolean) => setOpenDialogDeleteDiscount(e)}
                            showToast={(e: any) => setShowToast(e)}
                        />
                    )}
                </>
            )}
        </>
    );
}
