import classNames from 'classnames/bind';
import styles from './order.module.scss';
import { useEffect, useState } from 'react';
import TableOrder from './TableOrder';
import UserOpenOrder from './UserOpenOrder';
import { useSession } from 'next-auth/react';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function UserOder(props: IAppProps) {
    const [order, setOrder] = useState<any>({});
    const [openOrder, setOpenOrder] = useState<boolean>(false);
    const [allOrders, setAllOrders] = useState<any>([]);
    const { data: session } = useSession();

    useEffect(() => {
        const getOrder = async () => {
            const data = await fetch(`/api/order/user/${session?.user.id}`).then((res) => res.json());
            setAllOrders(data);
        };
        getOrder();
    }, [session?.user.id]);

    return (
        <>
            {openOrder && <UserOpenOrder setOpenAddOrder={setOpenOrder} order={order} />}
            <div className={cx('common-wrapper')}>
                <p className={cx('common-title')}>Đơn hàng: {allOrders.length}</p>
                <div className={cx('common-item-wrapper')}>
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
                            <p
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    letterSpacing: '-.2px',
                                    marginTop: '20px',
                                }}
                            >
                                Chưa có đơn đặt hàng nào!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
