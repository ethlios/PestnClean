'use client';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';

import AddIcon from '@mui/icons-material/Add';
import AddNotification from './AddNotification';
import CogWheel from '~/components/Orther/Loader/CogWheel/CogWheel';
import useSWR, { mutate } from 'swr';
import { fetchPosts } from '~/libs/orthers/getData';
import { filterTypeNotifications } from './const';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { formatDate } from '~/libs/orthers/formatDate';
const cx = classNames.bind(styles);

export interface IAppProps {}
interface Recipient {
    id: string;
    email: string;
    name: string;
}

interface Notification {
    id: number;
    title: string;
    message: string;
    recipientId: Recipient[];
    state: boolean;
    createdAt: string;
    type: string;
}
export default function AdminNotification(props: IAppProps) {
    const [openAddNotifications, setOpenNotifications] = useState<boolean>(false);
    const [listNotifications, setListNotifications] = useState<any[]>([]);
    const [listNameUser, setListNameUser] = useState<any[]>([]);
    const [filteredNotifications, setFilteredNotifications] = useState<any[]>([]);
    const [valueFilterType, setValueFilterType] = useState<string>('');
    const [valueFilterName, setValueFilterName] = useState<string>('');
    const { data, isLoading } = useSWR('/api/notification', fetchPosts);


    // hàm lấy các tên người nhận có trong list thông báo
    function extractUniqueNames(notifications: Notification[]): string[] {
        const userNamesMap: Map<string, number> = new Map();

        // Lặp qua danh sách thông báo
        notifications.forEach((notification) => {
            // Lặp qua mỗi người nhận trong thông báo
            notification.recipientId.forEach((recipient) => {
                // Kiểm tra xem tên của người nhận đã tồn tại trong Map chưa
                if (userNamesMap.has(recipient.name)) {
                    // Nếu đã tồn tại, tăng số lần xuất hiện lên 1
                    userNamesMap.set(recipient.name, userNamesMap.get(recipient.name)! + 1);
                } else {
                    // Nếu chưa tồn tại, thêm tên vào Map với số lần xuất hiện là 1
                    userNamesMap.set(recipient.name, 1);
                }
            });
        });

        // Tạo một mảng mới chứa các tên người dùng duy nhất
        // Thêm "Tất cả" vào đầu mảng kết quả
        const uniqueUserNames: string[] = ["Tất cả"];

        // Lặp qua các cặp key-value trong Map và thêm tên vào mảng mới
        userNamesMap.forEach((count, name) => {
            uniqueUserNames.push(name);
        });

        return uniqueUserNames;
    }
    // Hàm lọc dữ liệu theo loại thông báo
    const handleFilterType = (e: any) => {
        const data = e.target.value;
        setValueFilterType(data);
        if (data !== 'Tất cả') {
            const filteredNotifications = listNotifications.filter(
                (notification: any) => notification.type === data,
            );
            setFilteredNotifications(filteredNotifications);
        } else {
            // Nếu chọn "Tất cả", khôi phục dữ liệu gốc
            setFilteredNotifications(listNotifications);
        }
    };

    // Hàm lọc dữ liệu theo người nhận
    const handleFilterName = (e: any) => {
        const data = e.target.value;
        setValueFilterName(data);
        if (data !== 'Tất cả') {
            const filteredNotifications = listNotifications.filter(
                (notification: any) => notification.recipientId.some(
                    (item: any) => item.name === data
                )
            );
            setFilteredNotifications(filteredNotifications);
        } else {
            // Nếu chọn "Tất cả", khôi phục dữ liệu gốc
            setFilteredNotifications(listNotifications);
        }
    };

    useEffect(() => {
        if (!isLoading) {
            if (data?.message && data.message === 'Success') {
                setListNotifications(data.data);
                setFilteredNotifications(data.data); // Ban đầu, dữ liệu đã được lọc là dữ liệu gốc
                setListNameUser(extractUniqueNames(data.data));
            }
        }
    }, [isLoading, data]);

    return (
        <>
            {openAddNotifications ? (
                <AddNotification
                    addSuccess={(e: boolean) => {
                        if (e) mutate('api/notification');
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
                    <div className={cx('wrapper-controls')}>
                        <p className={cx('text-sm font-semibold')}>Số lượng: {listNotifications.length}</p>
                        <div>
                            <input
                                className={cx('wrapper-inputSearch')}
                                type="text"
                                placeholder="Tìm kiếm thông báo..."
                            ></input>
                        </div>
                        <div className={cx('wrapper-filter', 'flex items-center justify-start mt-2')}>
                            <p className="text-sm font-semibold">Lọc theo:</p>
                            <div className="ml-2">
                                <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                    <InputLabel id="demo-select-small-label">Loại thông báo</InputLabel>
                                    <Select
                                        className={cx('wrapper-filter-type')}
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={valueFilterType}
                                        label="Loại thông báo"
                                        onChange={handleFilterType}
                                    >
                                        {filterTypeNotifications.map((item, index) => {
                                            return (
                                                <MenuItem key={index} value={item}>
                                                    {item}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="ml-2">
                                <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                    <InputLabel id="demo-select-small-label">Người nhận</InputLabel>
                                    <Select
                                        className={cx('wrapper-filter-type')}
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={valueFilterName}
                                        label="Người nhận"
                                        onChange={handleFilterName}
                                    >
                                        {listNameUser.map((item, index) => {
                                            return (
                                                <MenuItem key={index} value={item}>
                                                    {item}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    {isLoading ? (
                        <div className="flex items-center justify-center relative mt-10">
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
                                        <th>Loại thông báo</th>
                                        <th>Người nhận</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredNotifications.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className={cx('font-semibold')}>{item.title}</td>
                                                <td className={cx('font-medium')}>{item.message}</td>
                                                <td className={cx('font-medium')}>
                                                    {formatDate(item.createdAt)}
                                                </td>
                                                <td className={cx('font-medium')}>{item.type}</td>
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
