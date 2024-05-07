import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';
import { RootState } from '~/redux/provider/store';
import { useSelector } from 'react-redux';
import { socket } from '~/websocket/socket';

import AddIcon from '@mui/icons-material/Add';
import AddNotification from './AddNotification';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AdminNotification(props: IAppProps) {
    const notifications = useSelector((state: RootState) => state.main);
    const [openAddNotifications, setOpenNotifications] = useState<boolean>(false);
    const [isConnected, setIsConnected] = useState(false);
    const [transport, setTransport] = useState('N/A');
    const [messageResp, setMessageResp] = useState('');
    const sendSocketMessage = () => {
        socket.emit('sendMessage', 'Hello Server!');
    };

    const connectSocket = () => {
        if (socket.connected) {
            onConnect();
        }

        function onConnect() {
            setIsConnected(true);
            setTransport(socket.io.engine.transport.name);

            socket.io.engine.on('upgrade', (transport) => {
                setTransport(transport.name);
            });
        }

        function onDisconnect() {
            setIsConnected(false);
            setTransport('N/A');
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('respMessage', (value) => {
            setMessageResp(value);
            console.log(value);
        });
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    };

    useEffect(() => {
        connectSocket();
        console.log(notifications.users);
    }, []);
    return (
        <>
            {openAddNotifications ? (
                <AddNotification
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
                            <button className={cx("wrapper-header-btnAdd",'mr-2')} onClick={() => setOpenNotifications(true)}>
                                Thông báo Mới
                            </button>
                        </div>
                    </div>
                    {/* <div className={cx('common-item-wrapper')} style={{ marginTop: '20px' }}>
                            <div>
                                <p>Status: {isConnected ? 'connected' : 'disconnected'}</p>
                                <p>Transport: {transport}</p>
                            </div>
                            <button type="button" onClick={sendSocketMessage}>Send Socket</button>
                            <p>{messageResp}</p>
                        </div> */}
                </div>
            )}
        </>
    );
}
