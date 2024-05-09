import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './order.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { useEffect, useState } from 'react';
import TableOrder from './TableOrder';
import AdminAddOrder from './AddOrder';
import { removeOrder, updateOrder, addOrder } from '~/redux/actions';
import { useSession } from 'next-auth/react';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AdminOder(props: IAppProps) {
    const [searchValue, setSearchValue] = useState<string>('');
    const [order, setOrder] = useState<any>({}); // order update
    const [openAddOrder, setOpenAddOrder] = useState<boolean>(false);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const dispatch = useDispatch();
    const [allOrders, setAllOrders] = useState<any>([]);
    const { data: session } = useSession();
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    let adminOrder: any = useSelector((state: RootState) => state.main.adminOrder);
    let userOrder: any = useSelector((state: RootState) => state.main.order);

    const handleDelete = (order: any) => {
        dispatch(removeOrder(order));
    };

    const handleUpdate = (order: any) => {
        dispatch(updateOrder(order));
    };

    const handleAdd = (order: any) => {
        dispatch(addOrder(order));
    };

    useEffect(() => {
        if (session?.user.rule === 'admin') {
            setAllOrders(adminOrder);
            setIsAdmin(true);
        } else {
            setAllOrders(userOrder);
            setIsAdmin(false);
        }
    }, [session, dispatch]);

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
                    isAdmin={isAdmin}
                />
            )}
            <div className={cx('common-wrapper')}>
                {isAdmin && (
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
                )}
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
