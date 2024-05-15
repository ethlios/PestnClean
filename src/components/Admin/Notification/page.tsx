'use client';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';

import AddIcon from '@mui/icons-material/Add';
import AddNotification from './AddNotification';
import CogWheel from '~/components/Orther/Loader/CogWheel/CogWheel';
import { GetAllNotification } from '~/libs/orthers/getData';
import { formatDate } from '~/libs/orthers/formatDate';
import moment from 'moment';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AdminNotification(props: IAppProps) {
    const [openAddNotifications, setOpenNotifications] = useState<boolean>(false);
    const [listNotifications, setListNotifications] = useState<any[]>([]);
    const [isLoader, setIsLoader] = useState<boolean>(true);

    const getData = async () => {
        const resp = await GetAllNotification();
        if (resp) {
            const { data, message } = resp;
            if (message === 'Success') {
                setListNotifications(data);
                setIsLoader(false);
            }
        }
    };

    useEffect(() => {
        setIsLoader(true);
        getData();
    }, []);

    return (
        <>
            {openAddNotifications ? (
                <AddNotification
                    addSuccess={(e: boolean) => {
                        if (e) {
                            setIsLoader(true);
                            getData();
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
                    <p className={cx('text-sm font-semibold')}>Số lượng: {listNotifications.length}</p>
                    <div>
                        <input
                            className={cx('wrapper-inputSearch')}
                            type="text"
                            placeholder="Tìm kiếm thông báo..."
                        ></input>
                    </div>
                    {isLoader ? (
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
                                                    {moment(item.createdAt).format("DD/MM/YYYY")}
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
