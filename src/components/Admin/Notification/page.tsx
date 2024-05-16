'use client';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';

import AddIcon from '@mui/icons-material/Add';
import AddNotification from './AddNotification';
import CogWheel from '~/components/Orther/Loader/CogWheel/CogWheel';
import moment from 'moment';
import useSWR from 'swr';

const cx = classNames.bind(styles);

export interface IAppProps {}

const fetchPosts = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return response.json();
};
export default function AdminNotification(props: IAppProps) {
    const [openAddNotifications, setOpenNotifications] = useState<boolean>(false);
    const [listNotifications, setListNotifications] = useState<any[]>([]);
    const { data , mutate , isLoading  } = useSWR('api/notification', fetchPosts);

    useEffect(() => {
        if (data?.message && data?.message === 'Success') {
            setListNotifications(data?.data);
        }
    }, [data]);

    return (
        <>
            {openAddNotifications ? (
                <AddNotification
                    isOpen={openAddNotifications}
                    isClose={(e: boolean) => setOpenNotifications(e)}
                    valueUpdate={null}
                    addSuccess={(e:boolean) => {
                        if(e) {
                            mutate();
                        }
                    }}
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
                    <p className={cx('text-sm font-semibold')}>Số lượng: {listNotifications.length}</p>
                    <div>
                        <input
                            className={cx('wrapper-inputSearch')}
                            type="text"
                            placeholder="Tìm kiếm thông báo..."
                        ></input>
                    </div>
                    {isLoading ? (
                        <div className="flex items-center justify-center relative">
                            <CogWheel />
                        </div>
                    ) : listNotifications.length <= 0 ? (
                        <div className="flex items-end justify-center mt-10">
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
                                                <td className={cx('font-medium')}>
                                                    {moment(item.createdAt).format('DD/MM/YYYY')}
                                                </td>
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
