import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Notification.module.scss';
import FlyOutsMenuItem from './BoxSearchMenuItem';
import { getAllUsersNotAdmin } from '~/libs/orthers/getData';
import { removeVietnameseTones } from '~/libs/orthers/removeVietnamese';
import { useDebounce } from '@react-hooks-library/core';

export default function BoxSearch() {
    const cx = classNames.bind(styles);
    
    const [listUsers, setListUsers] = useState<any[]>([]);
    const [listUsersSelected, setListUsersSelected] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const debouncedText = useDebounce(searchValue, 200);

    const showFlyOutsMenuitem = () => {
        return listUsers.map((item, index) => (
            <FlyOutsMenuItem key={index} data={item} onClick={(e:any) => handleClickMenuItem(e)}/>
        ));
    };

    const handleClickMenuItem = (data: any) => {
        const { status, object  } = data;
        if (status) {
            // Create a new array by spreading the existing listUsersSelected array and adding the new object
            const newArr = [...listUsersSelected, object];
            setListUsersSelected(newArr);
        } else {
            // Find the index of the object to be removed
            const index = listUsersSelected.findIndex((item) => item.id === object.id);
            if (index !== -1) {
                // Create a new array excluding the object at the found index
                const newArr = [...listUsersSelected.slice(0, index), ...listUsersSelected.slice(index + 1)];
                setListUsersSelected(newArr);
            }
        }
    };
    
    useEffect(() => {
        console.log(listUsersSelected)
    },[listUsersSelected])

    useEffect(() => {
        const getUser = async () => {
            const res = await getAllUsersNotAdmin();
            const {data} = res;
            if (data.length > 0) {
                setListUsers(data);
            }

            if (debouncedText) {
                const findUser = data.filter((user: any) => {
                    return (
                        removeVietnameseTones(user.name)
                            .toLowerCase()
                            .indexOf(removeVietnameseTones(debouncedText).toLowerCase()) !== -1
                    );
                });

                setListUsers(findUser);
            }
        };
        getUser();

        return () => setListUsers([]);
    }, [debouncedText]);

    return (
        <>
            <input
                className={cx('wrapper-chooseObject-inputSearch')}
                placeholder="Nhập tên khách hàng để tìm kiếm"
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
            />
            <div >
                <div className='flex items-center justify-start'>
                    <p className='mt-2 text-xs font-medium'>Đã chọn: {listUsersSelected.length}</p>
                    
                </div>
                <div className='mt-2'>{showFlyOutsMenuitem()}</div>
            </div>
        </>
    );
}
