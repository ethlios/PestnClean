'use client';

import { ToastContainer } from 'react-toastify';
import BlogOthers from '~/components/Home/BlogsOrther';
import Certification from '~/components/Home/Certification';
import ImageWork from '~/components/Home/ImgWork';
import ProductOthers from '~/components/Home/ProductOther';
import ServiceAds from '~/components/Home/ServiceOrther';
import WhyChooseMe from '~/components/Home/WhyChoseMe';
import BannerHomePage from '~/components/Home/banner';
import useSize from '~/libs/hooks/useSize';
import 'react-toastify/dist/ReactToastify.css';
import { socket } from '~/websocket/socket';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Home() {
    const { sizeX } = useSize();
    const [isConnected, setIsConnected] = useState(false);
    const [transport, setTransport] = useState('N/A');
    const session = useSession();

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

    useEffect(() => {
        if(isConnected){
            socket.on('respMessageAddNotify', (value) => {
                console.log(value);
            });
        }
    },[isConnected])

    return (
        <main className="cpmount">
            <div className={'overflow-x-hidden'}>
                <BannerHomePage />
            </div>
            <div
                className={'overflow-x-hidden'}
                style={{
                    padding:
                        sizeX < 768
                            ? '0 20px'
                            : sizeX < 1100
                              ? '0 50px'
                              : sizeX < 1280
                                ? '0 80px'
                                : '0 100px',
                }}
            >
                <ServiceAds />
                <WhyChooseMe />
                <ImageWork />
                <Certification />
                <ProductOthers />
                <BlogOthers />
                <ToastContainer />
            </div>
        </main>
    );
}
