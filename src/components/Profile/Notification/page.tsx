import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Notifications.module.scss';
import { useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { clearMessage, getAllNotificationsById } from '~/redux/actions';
import { formatDate } from '~/libs/orthers/formatDate';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function UserNotification(props: IAppProps) {
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.main);
    const [listNotifications, setListNotifications] = useState<any[]>([]);
  
    useEffect(() => {
        if (session?.user.id) {
            dispatch(getAllNotificationsById({ id: session.user.id }));
        }
    }, [session]);

    useEffect(() => {
        if (selector.message === 'Get All Notifications By Id Success') {
            setListNotifications(selector.notificationAll);
            dispatch(clearMessage());
        }
    }, [selector.message]);
    return (
        <div className={cx('wrapper', '')}>
            <div className={cx('wrapper-header')}>
                <p className='font-semibold'>Thông báo của bạn</p>
            </div>
            <div className={cx('wrapper-table', 'mt-4')}>
                <table>
                    <thead>
                        <tr>
                            <th>Tiêu đề</th>
                            <th>Lời nhắn</th>
                            <th>Ngày gửi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listNotifications.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className={cx('font-semibold')}>{item.title}</td>
                                    <td className={cx('font-medium')}>{item.message}</td>
                                    <td className={cx('font-medium')}>{formatDate(item.createdAt)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
