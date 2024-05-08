import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './order.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { useEffect, useState } from 'react';
import TableOrder from './TableOrder';
import AdminAddOrder from './AddOrder';
import { removeOrder, updateOrder, addOrder } from '~/redux/actions';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AdminOder(props: IAppProps) {
    const [searchValue, setSearchValue] = useState<string>('');
    let allOrders: any = useSelector((state: RootState) => state.main.adminOrder);
    const [order, setOrder] = useState<any>({}); // order update
    const [openAddOrder, setOpenAddOrder] = useState<boolean>(false);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleDelete = (order: any) => {
        dispatch(removeOrder(order));
    };

    const handleUpdate = (order: any) => {
        dispatch(updateOrder(order));
    };

    const handleAdd = (order: any) => {
        dispatch(addOrder(order));
    };

    useEffect(() => {}, [dispatch]);

    return (
        <>
            {openAddOrder && (
                <AdminAddOrder
                    setOpenAddOrder={setOpenAddOrder}
                    allOrders={allOrders}
                    isUpdate={isUpdate}
                    order={order}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                    handleAdd={handleAdd}
                />
            )}
            <div className={cx('common-wrapper')}>
                <div className={cx('panel')}>
                    <button
                        className={cx('commom-button')}
                        onClick={() => {
                            setIsUpdate(false);
                            setOrder({});
                            setOpenAddOrder(true);
                        }}
                    >
                        Thêm đơn hàng
                    </button>
                </div>
                <p className={cx('common-title')}>Order: {allOrders.length}</p>
                <input
                    type="text"
                    placeholder="Search..."
                    className={cx('common-inp')}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                ></input>
                <div className={cx('common-item-wrapper')} style={{ marginTop: '20px' }}>
                    {allOrders.length > 0 ? (
                        <div className={cx('product-wrapper')}>
                            <TableOrder
                                orders={allOrders}
                                setIsUpdate={setIsUpdate}
                                setOpenAddOrder={setOpenAddOrder}
                                setOrder={setOrder}
                                handleDelete={handleDelete}
                            />
                        </div>
                    ) : (
                        <div className={cx('product-wrapper')}>
                            <p>No order</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
