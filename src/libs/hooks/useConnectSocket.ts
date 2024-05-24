import { useEffect, useState } from 'react';
import { socket } from '~/websocket/socket';

const useConnectSocket = () => {
    const [isConnected, setIsConnected] = useState<boolean>(false);

    useEffect(() => {
        const onConnect = () => {
            setIsConnected(true);
        };

        const onDisconnect = () => {
            setIsConnected(false);
        };

        const onError = (error:any) => {
            console.error('Socket connection error:', error);
        };

        // Kết nối tới socket
        if (socket) {
            socket.connect(); // Kết nối socket

            if (socket.connected) {
                onConnect();
            }

            socket.on('connect', onConnect);
            socket.on('disconnect', onDisconnect);
            socket.on('connect_error', onError);
            socket.on('error', onError);
        }

        return () => {
            if (socket) {
                socket.off('connect', onConnect);
                socket.off('disconnect', onDisconnect);
                socket.off('connect_error', onError);
                socket.off('error', onError);
                socket.disconnect();
            }
        };
    }, []);

    return { isConnected, socket };
};

export default useConnectSocket;
