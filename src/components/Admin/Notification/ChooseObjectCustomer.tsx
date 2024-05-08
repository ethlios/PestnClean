'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useDebounce } from '@react-hooks-library/core';
import { removeVietnameseTones } from '~/libs/orthers/removeVietnamese';
import { getAllUsersNotAdmin } from '~/libs/orthers/getData';
const cx = classNames.bind(styles);

export interface IAppProps {
    isOpen: boolean;
    isClose: Function;
    valueUpdate: any;
    setListUser: Function;
    sendListUser: any[];
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '5px',
    p: '10px',
};

export default function ChooseObjectCustomer({
    isOpen,
    isClose,
    valueUpdate,
    setListUser,
    sendListUser,
}: IAppProps) {
    const [open, setOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [listUsersSelected, setListUsersSelected] = useState<any[]>([]);
    const [listUsers, setListUsers] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const debouncedText = useDebounce(searchValue, 200);

    const handleClose = () => {
        setOpen(false);
        isClose(false);
    };

    const handleSave = () => {
        setOpen(false);
        isClose(false);
        setListUser(listUsersSelected);
    };

    // Xử ý sự kiện khi click vào checkbox === true thì thêm vào listSelected và ngược lại
    const handleClickCheckedChange = (item: any) => {
        const { checked, user } = item;
        if (checked) {
            // Nếu được checked, thêm vào danh sách các phần tử đã chọn
            const newArr = [...listUsersSelected, user];
            setListUsersSelected(newArr);
        } else {
            // Nếu không được checked, loại bỏ khỏi danh sách các phần tử đã chọn
            const filteredList = listUsersSelected.filter((selectedUser) => selectedUser.id !== user.id);
            setListUsersSelected(filteredList);
        }
    };

    useEffect(() => {
        if (isOpen) {
            setOpen(true);
            setIsClicked(false);
        } else {
            setOpen(false);
        }
    }, [isOpen]);

    // Xử lý nếu tồn tạo danh sách người dùng đã chọn
    useEffect(() => {
        if (sendListUser.length > 0) {
            // Sử dụng map để tạo một mảng mới với các phần tử được cập nhật
            const updatedListUsers = listUsers.map((user) => {
                // Kiểm tra xem user có tồn tại trong listUser không
                const found = sendListUser.some((item) => item.id === user.id);
                // Nếu tìm thấy, trả về một bản sao của user với thuộc tính status được cập nhật
                if (found) {
                    return { ...user, status: true };
                }
                // Nếu không tìm thấy, trả về user không thay đổi
                return user;
            });

            // Cập nhật listUsers với mảng đã được cập nhật
            setListUsers(updatedListUsers);
        } else {
            // Nếu không có set lại list selected bằng rỗng
            setListUsersSelected([]);
        }
    }, [sendListUser]);

    // Sự kiện lấy ra danh sách người dùng để chọn và tìm kiếm người dùng theo tên
    useEffect(() => {
        const getUser = async () => {
            const res = await getAllUsersNotAdmin();
            const { data } = res;
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
            <Modal
                open={open}
                onClose={handleClose}
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={cx('wrapper')}>
                        <div className={cx('wrapper-header', 'flex items-center justify-between h-10')}>
                            <p className="font-medium underline">LỰA CHỌN KHÁCH HÀNG</p>
                            <button
                                className={cx('wrapper-header-btnExit')}
                                type="button"
                                onClick={handleClose}
                            >
                                Exit
                            </button>
                        </div>
                        <div className="h-300 w-full mt-2">
                            <div>
                                <input
                                    className={cx('wrapper-chooseObject-inputSearch')}
                                    placeholder="Nhập tên khách hàng để tìm kiếm"
                                    onChange={(e) => {
                                        setSearchValue(e.target.value);
                                    }}
                                />
                                <div>
                                    <div className="flex items-center justify-start">
                                        <p className="mt-2 text-xs font-medium">
                                            Đã chọn: {listUsersSelected.length}
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        {listUsers.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className={cx('flex items-center justify-start')}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id={item.id}
                                                        name="vehicle1"
                                                        value="Bike"
                                                        onChange={(e) => {
                                                            handleClickCheckedChange({
                                                                user: item,
                                                                checked: e.target.checked,
                                                            });
                                                        }}
                                                        checked={listUsersSelected.some(
                                                            (selectedUser) => selectedUser.id === item.id,
                                                        )}
                                                    />
                                                    <label className="ml-2 font-semibold" htmlFor={item.id}>
                                                        {'(' + item.name + ') ' + item.email}
                                                    </label>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className={cx('wrapper-btnSubmit', 'mt-6')}
                                onClick={handleSave}
                                disabled={isClicked}
                            >
                                Lưu
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
