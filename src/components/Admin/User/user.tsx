'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../admin.module.scss';
import { getAllUsers } from '~/libs/orthers/getData';
import Image from 'next/image';
import { removeVietnameseTones } from '~/libs/orthers/removeVietnamese';
import { useDebounce } from '@react-hooks-library/core';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function UserCP(props: IAppProps) {
    const [users, setUsers] = useState<any[]>();
    const [searchValue, setSearchValue] = useState<string>('');
    const debouncedText = useDebounce(searchValue, 200);

    useEffect(() => {
        const getUser = async () => {
            const data = await getAllUsers();

            if (data.length > 0) {
                setUsers(data);
            }

            if (debouncedText) {
                const findUser = data.filter((user: any) => {
                    return (
                        removeVietnameseTones(user.name)
                            .toLowerCase()
                            .indexOf(removeVietnameseTones(debouncedText).toLowerCase()) !== -1
                    );
                });

                setUsers(findUser);
            }
        };
        getUser();

        return () => setUsers([]);
    }, [debouncedText]);

    return (
        <div className={cx('common-wrapper')}>
            <p className={cx('common-title')}>Users: {users?.length}</p>
            <input
                type="text"
                placeholder="Search user..."
                className={cx('common-inp')}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            ></input>
            <div className={cx('common-item-wrapper')}>
                {users?.map((item, index) => {
                    return (
                        <div key={index} className={cx('user-item')}>
                            <div className={cx('user-item-name')}>
                                <div className={cx('avatar')}>
                                    {item.img ? (
                                        <Image src={item.img} alt={'Avatar'} width={1000} height={1000} />
                                    ) : (
                                        item.name.charAt(0).toUpperCase()
                                    )}
                                </div>
                                <p>{item.name}</p>
                            </div>
                            <div className={cx('user-item-info')}>
                                <p>{item.email}</p>
                                <p>{item.phone}</p>
                            </div>
                            <button disabled>{item.rule === 'admin' ? 'ADMIN' : 'USERS'}</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
