'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Discount.module.scss';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useDebounce } from '@react-hooks-library/core';
import { removeVietnameseTones } from '~/libs/orthers/removeVietnamese';
import { fetchPosts} from '~/libs/orthers/getData';
import { sendEmail } from '~/actions/sendEmails';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage, updateStatusDiscount } from '~/redux/actions';
import { RootState } from '~/redux/provider/store';
import useSWR from 'swr';
const cx = classNames.bind(styles);

export interface IAppProps {
    isOpen: boolean;
    isClose: Function;
    dataSendMail: any;
    showToast: any;
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

export default function ChooseObjectCustomer({ isOpen, isClose, dataSendMail, showToast }: IAppProps) {
    const [open, setOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [listUsersSelected, setListUsersSelected] = useState<any[]>([]);
    const [listUsers, setListUsers] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const { data , isLoading} = useSWR('api/user/all/ruleUser', fetchPosts);
    const debouncedText = useDebounce(searchValue, 200);
    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.main);

    const handleClose = () => {
        setOpen(false);
        isClose(false);
    };

    const reset = () => {
        setIsLoader(false);
        setIsClicked(false);
        dispatch(clearMessage());
        setListUsersSelected([]);
        handleClose();
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

    // Xử lý kiểm tra email được chọn với email đã gửi được gửi xem có trùng khớp không?
    function arraysAreEqual(array1: string[], array2: string[]): boolean {
        // Kiểm tra độ dài của mảng
        if (array1.length !== array2.length) {
            return false;
        }

        // So sánh từng phần tử
        for (let i = 0; i < array1.length; i++) {
            // Nếu có bất kỳ phần tử nào khác nhau, trả về false
            if (array1[i] !== array2[i]) {
                return false;
            }
        }

        // Nếu không có phần tử nào khác nhau, trả về true
        return true;
    }

    // Xử lý gửi mail đến các user được chọn
    const sendMailToUser = async () => {
        if (dataSendMail && listUsersSelected.length > 0) {
            setIsLoader(true);
            setIsClicked(true);
            const emailAccepts = [];
            for (const item of listUsersSelected) {
                const resp = await sendEmail({ data: dataSendMail, user: item });
                emailAccepts.push(resp.accepted[0]);
            }
            const emails: string[] = listUsersSelected.map((user: any) => user.email);
            if (arraysAreEqual(emailAccepts, emails)) {
                dispatch(updateStatusDiscount({ id: dataSendMail.id, status: true }));
            }
        }
    };

    useEffect(() => {
        if (selector.message === 'Update Status Success') {
            reset();
            showToast({
                message: 'Đã gửi email thông báo khuyến mãi đến các người dùng được chọn',
                status: true,
            });
        }
    }, [selector.message]);

    useEffect(() => {
        if (isOpen) {
            setOpen(true);
            setIsClicked(false);
        } else {
            setOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if(!isLoading){
            setListUsers(data.data);
        }
    },[isLoading])

    // Sự kiện lấy ra danh sách người dùng để chọn và tìm kiếm người dùng theo tên
    useEffect(() => {
        const getUser = () => {
            if (debouncedText) {
                const findUser = data.data.filter((user: any) => {
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
                                    <div className={cx('mt-2', 'wrapper-chooseObject-box')}>
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
                                                    <label
                                                        className="ml-2 font-medium text-xs"
                                                        htmlFor={item.id}
                                                    >
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
                            <form className="w-full" action={() => sendMailToUser()}>
                                <button
                                    className={cx(
                                        'wrapper-btnSubmit',
                                        'mt-6',
                                        isLoader ? 'wrapper-btnSubmit-loader' : 'wrapper-btnSubmit-success',
                                    )}
                                    type="submit"
                                    disabled={isClicked}
                                    onClick={() => setIsLoader(true)}
                                >
                                    {isLoader ? '...' : 'Gửi Mail'}
                                </button>
                            </form>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
