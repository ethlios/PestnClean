'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import styles from './Notification.module.scss';
import ChooseObjectCustomer from './ChooseObjectCustomer';
import { addNotification, clearMessage } from '~/redux/actions';
import { useSession } from 'next-auth/react';
import { socket } from '~/websocket/socket';
import Toast from '~/components/Orther/Toast';
import { convertMomentToDate, formatISODate } from '~/libs/orthers/formatDate';
import moment from 'moment';
import useConnectSocket from '~/libs/hooks/useConnectSocket';
const cx = classNames.bind(styles);

export interface IAppProps {
    isOpen: boolean;
    isClose: Function;
    valueUpdate: any;
    addSuccess: Function;
}

export default function AddNotification({ isOpen, isClose, valueUpdate, addSuccess }: IAppProps) {
    const [open, setOpen] = useState(false);
    const [openChooseObjectCustomer, setOpenChooseObjectCustomer] = useState(false);
    const [showToast, setShowToast] = useState<boolean>(false);
    const [valueTitleNotify, setValueTitleNotify] = useState<string>('');
    const [valueDesNotify, setValueDesNotify] = useState<string>('');
    const [listUsersSelected, setListUsersSelected] = useState<any[]>([]);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [dataMessageNotifySuccess, setDataMessageNotifySuccess] = useState<any>({});
    const {isConnected} = useConnectSocket();
    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.main);
    const session = useSession();

    const reset = () => {
        setValueTitleNotify('');
        setValueDesNotify('');
        setListUsersSelected([]);
        setIsClicked(false);
        handleClose();
        dispatch(clearMessage());
    };
    const handleClose = () => {
        setOpen(false);
        isClose(false);
    };

    // Xử lí sự kiện lưu notify vào database
    const handleSave = () => {
        if (valueDesNotify !== '' && valueTitleNotify !== '' && selectedOption !== '') {
            const currentDate = convertMomentToDate();
            if (selectedOption === 'Không giới hạn') {
                if (session.data && session.data?.user.rule === 'admin') {
                    dispatch(
                        addNotification({
                            title: valueTitleNotify,
                            message: valueDesNotify,
                            recipientId: session.data?.user.id,
                            createdAt: currentDate,
                            state: false,
                        }),
                    );
                    setDataMessageNotifySuccess({
                        title: valueTitleNotify,
                        message: valueDesNotify,
                        recipientId: session.data?.user.id,
                        createdAt: currentDate,
                        state: false,
                    });
                    setIsClicked(true);
                }
            } else {
                if (listUsersSelected.length > 0) {
                    listUsersSelected.map((item) => {
                        dispatch(
                            addNotification({
                                title: valueTitleNotify,
                                message: valueDesNotify,
                                recipientId: item.id,
                                createdAt: currentDate,
                                state: false,
                            }),
                        );
                    });
                    setDataMessageNotifySuccess({
                        title: valueTitleNotify,
                        message: valueDesNotify,
                        recipientId: listUsersSelected,
                        createdAt: currentDate,
                        state: false,
                    });
                    setIsClicked(true);
                }
            }
        }
    };

    // Xử lí open khi model Lựa chọn khách hàng
    const handleClickOpenChooseObject = () => {
        setOpenChooseObjectCustomer(true);
    };

    // Xử lí sự kiên thay đổi option
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === 'Không giới hạn') {
            setListUsersSelected([]);
        }
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        if (showToast) {
            setTimeout(() => {
                reset();
                addSuccess(true);
            }, 500);
        }
    }, [showToast]);

    // Xử lí khi thêm notify success vào db thì send toàn bộ notify đến client được chọn qua socket.io
    useEffect(() => {
        if (selector.message === 'Đã gửi thông báo đến user!') {
            if (isConnected) {
                setShowToast(true);
                socket.emit('addNotification', dataMessageNotifySuccess);
            }
        }
    }, [selector.message]);

    useEffect(() => {
        if (isOpen) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [isOpen]);

    // Xử lý nếu người dùng chọn option bằng Tùy chọn thì mở model LỰA CHỌN KHÁCH HÀNG
    useEffect(() => {
        if (selectedOption === 'Tùy chọn') {
            setOpenChooseObjectCustomer(true);
        } else {
            setOpenChooseObjectCustomer(false);
        }
    }, [selectedOption]);

    return (
        <>
            <Toast text="Thêm thành công" showToast={showToast} setShowToast={setShowToast} rule="normal" />
            <div className={cx('wrapper')}>
                <div className={cx('wrapper-header', 'flex items-center justify-between h-10')}>
                    <p className="font-medium underline">TẠO THÔNG BÁO</p>
                    <button className={cx('wrapper-header-btnExit')} type="button" onClick={handleClose}>
                        Exit
                    </button>
                </div>
                <div className={cx('wrapper-content', 'mt-2')}>
                    <div className="mt-4">
                        <p className="font-semibold text-sm">Tiêu đề thông báo</p>
                        <input
                            className={cx('wrapper-content-inputName', 'mt-2')}
                            placeholder="Nhập tiêu đề thông báo"
                            value={valueTitleNotify}
                            onChange={(e) => setValueTitleNotify(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold text-sm">Mô tả</p>
                        <textarea
                            className={cx('wrapper-content-textarea', 'mt-2')}
                            id="w3review"
                            name="w3review"
                            rows={4}
                            placeholder="Nhập mô tả thông báo"
                            value={valueDesNotify}
                            onChange={(e) => setValueDesNotify(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold text-sm">Đối tượng thông báo</p>
                        <div className="mt-2">
                            <div className={cx('wrapper-content-object', 'flex items-center')}>
                                <input
                                    type="radio"
                                    id="unlimited"
                                    name="chooseObject"
                                    value="Không giới hạn"
                                    checked={selectedOption === 'Không giới hạn'}
                                    onChange={handleOptionChange}
                                />
                                <label htmlFor="unlimited">Không giới hạn khách hàng</label>
                            </div>
                            <div className={cx('wrapper-content-object', 'flex items-center mt-2')}>
                                <input
                                    type="radio"
                                    id="option"
                                    name="chooseObject"
                                    value="Tùy chọn"
                                    checked={selectedOption === 'Tùy chọn'}
                                    onClick={handleClickOpenChooseObject}
                                    onChange={handleOptionChange}
                                />
                                <label htmlFor="option">Tùy chọn khách hàng</label>
                                {listUsersSelected.length > 0 && (
                                    <div
                                        className={cx(
                                            'flex items-center justify-start',
                                            'wrapper-content-object-seenDetail',
                                        )}
                                    >
                                        <p>(Đã chọn: {listUsersSelected.length})</p>
                                    </div>
                                )}
                                <ChooseObjectCustomer
                                    sendListUser={listUsersSelected}
                                    valueUpdate={null}
                                    isOpen={openChooseObjectCustomer}
                                    isClose={(e: boolean) => setOpenChooseObjectCustomer(e)}
                                    setListUser={(e: any[]) => {
                                        const arr = e.length > 0 ? e : [];
                                        setListUsersSelected([...arr]);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className={cx(isClicked ? 'wrapper-unClicked' : 'wrapper-btnSubmit', 'mt-6')}
                        onClick={handleSave}
                        disabled={isClicked}
                    >
                        Thêm thông báo
                    </button>
                </div>
            </div>
        </>
    );
}
