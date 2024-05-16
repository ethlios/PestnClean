import { useEffect, useState } from 'react';
import { socket } from '~/websocket/socket';

const useConnectSocket = () => {
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [transport, setTransport] = useState('N/A');

    // KẾT NỐI TỚI SOCKET
    const connectSocket = () => {
        if (socket.connected) {
            onConnect();
        }

        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
            setTransport('N/A');
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    };

    useEffect(() => {
        connectSocket();
    }, []);

    return {isConnected,socket};
};

export default useConnectSocket;
