import classNames from 'classnames/bind';
import styles from './order.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { useState } from 'react';
import TableOrder from './TableOrder';
import UserOpenOrder from './UserOpenOrder';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function UserOder(props: IAppProps) {
    const [searchValue, setSearchValue] = useState<string>('');
    const [order, setOrder] = useState<any>({});
    const [openOrder, setOpenOrder] = useState<boolean>(false);
    let allOrders: any = useSelector((state: RootState) => state.main.order);

    return (
        <>
            {openOrder && <UserOpenOrder setOpenAddOrder={setOpenOrder} order={order} />}
            <div className={cx('common-wrapper')}>
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
                                setOpenAddOrder={setOpenOrder}
                                setOrder={setOrder}
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
