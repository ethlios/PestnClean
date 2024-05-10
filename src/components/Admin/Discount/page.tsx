import classNames from 'classnames/bind';
import styles from './Discount.module.scss';
import { RootState } from '~/redux/provider/store';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Toast from '~/components/Orther/Toast';
import AddDiscount from './AddDiscount';
import { formatDate } from '~/libs/orthers/formatDate';
import AddIcon from '@mui/icons-material/Add';
import ChooseObjectCustomer from './ChooseObjectCustomer';
const cx = classNames.bind(styles);

export interface IAppProps {}
export interface showToast {
    message: string;
    status: boolean;
}
export default function AdminDiscount(props: IAppProps) {
    const discounts: any = useSelector((state: RootState) => state.main.discount);
    const [openAddDiscount, setOpenAddDiscount] = useState<boolean>(false);
    const [openChooseObjectCustomer, setOpenChooseObjectCustomer] = useState(false);
    const [dataSendMail, setDataSendMail] = useState<any>({});
    const [updateProduct, setUpdateProduct] = useState<any>({});
    const [showToast, setShowToast] = useState<showToast>({
        message: '',
        status: false,
    });

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
                        setUpdateProduct({});
                    }}
                    valueUpdate={updateProduct}
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
                                    onClick={() => setOpenAddDiscount(true)}
                                >
                                    Thêm mã khuyến mãi
                                </button>
                            </div>
                        </div>
                        <p className={cx('text-sm font-semibold')}>Số lượng: {discounts.length}</p>
                        <div><input className={cx('wrapper-inputSearch')} type="text" placeholder="Search image..." ></input></div>
                    </div>
                    {
                        discounts && discounts.length > 0 ? (
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {discounts.map((item: any, index: number) => {
                                            return (
                                                <tr key={index}>
                                                    <td className={cx('font-semibold')}>{item.name}</td>
                                                    <td className={cx('font-medium')}>{item.description}</td>
                                                    <td className={cx('font-medium')}>
                                                        {formatDate(item.dateStart)}
                                                    </td>
                                                    <td className={cx('font-medium')}>{formatDate(item.dateEnd)}</td>
                                                    <td className={cx('font-medium')}>{item.percent + '%'}</td>
                                                    <td className={cx('font-medium')}>
                                                    {item.status ? "Đã gửi" : "Chưa gửi"}
                                                    </td>
                                                    <td className={cx('font-medium')}>
                                                        <ul>
                                                            <li className='underline hover:cursor-pointer text-primaryColor font-semibold'>Gửi tất cả</li>
                                                            <li 
                                                                className='underline hover:cursor-pointer text-primaryColor font-semibold mt-2' 
                                                                onClick={() => {
                                                                    setOpenChooseObjectCustomer(true);
                                                                    setDataSendMail(item);
                                                                }}
                                                            >
                                                                Tùy chọn đối tượng
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className='flex items-center justify-center mt-10'><p className='font-semibold text-base'>Chưa có mã khuyến mãi</p></div>
                        )
                    }
                    <ChooseObjectCustomer
                        dataSendMail={dataSendMail}
                        valueUpdate={null}
                        isOpen={openChooseObjectCustomer}
                        isClose={(e: boolean) => setOpenChooseObjectCustomer(e)}
                    />
                </>
            )}
        </>
    );
}
