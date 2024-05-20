import { useEffect, useState } from 'react';
import { socket } from '~/websocket/socket';

const useConnectSocket = () => {
    const [isConnected, setIsConnected] = useState<boolean>(false);

    // KẾT NỐI TỚI SOCKET
    useEffect(() => {
        const connectSocket = () => {
            if (socket.connected) {
                onConnect();
            }

            function onConnect() {
                setIsConnected(true);
            }

            function onDisconnect() {
                setIsConnected(false);
            }

            socket.on('connect', onConnect);
            socket.on('disconnect', onDisconnect);

            return () => {
                socket.off('connect', onConnect);
                socket.off('disconnect', onDisconnect);
            };
        };

        const cleanup = connectSocket();

        return () => {
            if (cleanup) cleanup();
            socket.disconnect();
        };
    }, []);

    return { isConnected, socket };
};

export default useConnectSocket;
