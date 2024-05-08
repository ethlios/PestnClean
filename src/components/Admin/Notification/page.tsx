'use client';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';
import { RootState } from '~/redux/provider/store';
import { useDispatch, useSelector } from 'react-redux';

import AddIcon from '@mui/icons-material/Add';
import AddNotification from './AddNotification';
import { getUserById } from '~/libs/orthers/getData';
import CogWheel from '~/components/Orther/Loader/CogWheel/CogWheel';
import { clearMessage, getAllNotifications } from '~/redux/actions';

const cx = classNames.bind(styles);

export interface IAppProps {}

interface Notification {
    id: number;
    title: string;
    recipientId: string;
    message: string;
    state: boolean;
    createdAt: string;
}
interface MergedNotification {
    title: string;
    recipientId: string[];
    message: string;
    state: boolean;
    createdAt: string;
}
export default function AdminNotification(props: IAppProps) {
    const [openAddNotifications, setOpenNotifications] = useState<boolean>(false);
    const [listNotifications, setListNotifications] = useState<any[]>([]);
    const [listDBNotifications, setListDbNotifications] = useState<any[]>([]);
    const [isLoader, setIsLoader] = useState<boolean>(true);
    const selector = useSelector((state: RootState) => state.main);
    const dispatch = useDispatch();
    function formatDate(dateString: string) {
        // Tạo một đối tượng Date từ chuỗi thời gian
        const date = new Date(dateString);

        // Lấy giờ và phút
        const hours = date.getHours();
        const minutes = date.getMinutes();

        // Định dạng giờ theo chuẩn 12 giờ và AM/PM
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Chuyển đổi giờ sang định dạng 12 giờ
        const formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

        // Lấy ngày, tháng và năm
        const day = date.getDate();
        const month = date.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
        const year = date.getFullYear();

        // Định dạng ngày tháng năm
        const formattedDate = `${day}/${month < 10 ? '0' : ''}${month}/${year}`;

        // Kết hợp giờ và ngày tháng năm
        return `${formattedTime} ${formattedDate}`;
    }

    // XỬ LÍ LẤY TẤT CẢ CÁC THÔNG BÁO
    useEffect(() => {
        dispatch(getAllNotifications());
    }, []);

    // KIỂM TRA LẤY RA THÀNH CÔNG HAY KHÔNG RỒI SET LIST
    useEffect(() => {
        if (selector.message === 'Success' && selector.notification.length > 0) {
            setListDbNotifications(selector.notification);
        }
    }, [selector.message]);

    // XỬ LÍ LẤY ID NGƯỜI NHẬN CHUYỂN QUA THÔNG TIN NGƯỜI NHẬN
    useEffect(() => {
        if(listDBNotifications.length > 0){
            const getNotifications = async () => {
                const mergedNotifications: MergedNotification[] = Object.values(
                    listDBNotifications.reduce((acc: { [key: string]: MergedNotification }, curr: Notification) => {
                        const existingTitle = acc[curr.title];

                        if (existingTitle) {
                            if (!existingTitle.recipientId.includes(curr.recipientId)) {
                                existingTitle.recipientId.push(curr.recipientId);
                            }
                        } else {
                            acc[curr.title] = {
                                createdAt: curr.createdAt,
                                message: curr.message,
                                state: curr.state,
                                title: curr.title,
                                recipientId: [curr.recipientId],
                            };
                        }
                        return acc;
                    }, {}),
                );
                const newArr = await Promise.all(
                    mergedNotifications.map(async (item: MergedNotification) => {
                        // Lấy thông tin người dùng cho tất cả các recipientId
                        const newRecipientId = await Promise.all(
                            item.recipientId.map(async (temp: string) => {
                                const user = await getUserById({ id: temp });
                                const { data } = user;
                                return {
                                    id: temp,
                                    name: data.name,
                                    email: data.email,
                                };
                            }),
                        );

                        // Trả về một đối tượng mới với các giá trị đã cập nhật
                        return {
                            ...item,
                            createdAt: formatDate(item.createdAt),
                            recipientId: newRecipientId,
                        };
                    }),
                );
                setListNotifications(newArr);
                setIsLoader(false);
            };
            getNotifications();
            dispatch(clearMessage());
        }
    },[listDBNotifications.length]);

    return (
        <>
            {openAddNotifications ? (
                <AddNotification
                    addSuccess={(e:boolean) => {
                        if(e){
                            setIsLoader(true);
                            dispatch(getAllNotifications());
                        }
                    }}
                    isOpen={openAddNotifications}
                    isClose={(e: boolean) => setOpenNotifications(e)}
                    valueUpdate={null}
                />
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('wrapper-header', 'flex items-center justify-between')}>
                        <p className="text-lg font-semibold">Thông báo</p>
                        <div
                            className={cx(
                                'wrapper-header-control',
                                'flex items-center justify-center bg-primaryColor rounded',
                            )}
                        >
                            <AddIcon />
                            <button
                                className={cx('wrapper-header-btnAdd', 'mr-2')}
                                onClick={() => setOpenNotifications(true)}
                            >
                                Thông báo Mới
                            </button>
                        </div>
                    </div>
                    {isLoader ? (
                        <div className="flex items-center justify-center relative">
                            <CogWheel />
                        </div>
                    ) : listNotifications.length <= 0 ? (
                        <div className="flex items-end justify-center">
                            <p className="text-sm font-semibold">Không có thông báo</p>
                        </div>
                    ) : (
                        <div className={cx('wrapper-table', 'mt-4')}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tiêu đề</th>
                                        <th>Lời nhắn</th>
                                        <th>Ngày tạo</th>
                                        <th>Người nhận</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listNotifications.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className={cx('font-semibold')}>{item.title}</td>
                                                <td className={cx('font-medium')}>{item.message}</td>
                                                <td className={cx('font-medium')}>{formatDate(item.createdAt)}</td>
                                                <td className={cx('font-medium')}>
                                                    <ul>
                                                        {item.recipientId.map(
                                                            (temp: any, tempIndex: number) => {
                                                                return (
                                                                    <li
                                                                        className={cx(
                                                                            temp.id ===
                                                                                '104399638902286280553'
                                                                                ? ''
                                                                                : 'wrapper-table-textIndent',
                                                                        )}
                                                                        key={tempIndex}
                                                                    >
                                                                        <p>
                                                                            {temp.id ===
                                                                            '104399638902286280553'
                                                                                ? 'Không giới hạn'
                                                                                : temp.name +
                                                                                  '(' +
                                                                                  temp.email +
                                                                                  ')'}
                                                                        </p>
                                                                    </li>
                                                                );
                                                            },
                                                        )}
                                                    </ul>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
