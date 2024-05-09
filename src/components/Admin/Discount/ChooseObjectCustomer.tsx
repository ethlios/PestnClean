'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Discount.module.scss';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { useSession } from 'next-auth/react';
import { getUserByRule } from '~/redux/actions';
import BoxSearch from './BoxSearch/BoxSearch';
const cx = classNames.bind(styles);

export interface IAppProps {
    isOpen: boolean;
    isClose: Function;
    valueUpdate: any;
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

export default function ChooseObjectCustomer({ isOpen, isClose, valueUpdate }: IAppProps) {
    const [open, setOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [loader, setLoader] = useState<boolean>(false);
    const [listUsers, setListUsers] = useState<any[]>([]);
    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.main);

    const handleClose = () => {
        setOpen(false);
        isClose(false);
    };

    useEffect(() => {
        if (isOpen) {
            setOpen(true);
            setIsClicked(false);
        } else {
            setOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if (selector.message === 'Success') {
            setListUsers(selector.users);
        }
    }, [selector.message, selector.users]);

    useEffect(() => {
        dispatch(getUserByRule());
    }, [dispatch]);

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
                            <button type="button" onClick={handleClose}>
                                Exit
                            </button>
                        </div>
                        <div className="h-300 w-full mt-2">
                            <BoxSearch items={listUsers} />
                        </div>
                        <div className="flex justify-center">
                            <button
                                className={cx('wrapper-btnSubmit', 'mt-6')}
                                // onClick={handleSave}
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
