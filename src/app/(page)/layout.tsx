'use client';

import 'tippy.js/dist/tippy.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Header from '~/common/Header/header';
import Footer from '~/common/Footer/footer';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import logo from '../../../public/img/logo.png';
import Image from 'next/image';
import useSize from '~/libs/hooks/useSize';
import HeaderMobile from '~/common/Header/headerMobile';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { getUser } from '~/redux/actions';

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [openCp, setOpenCp] = useState<boolean>(false);
    const { sizeX } = useSize();
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => setOpenCp(true), 1000);
    }, []);

    const { data: session } = useSession();

    useEffect(() => {
        if (session) {
            dispatch(
                getUser({
                    id: session?.user.id.toString(),
                    token: session.user.accessToken,
                    email: session.user.email,
                    name: session.user.name,
                    img: session.user.picture ?? session.user.image,
                }),
            );
        }
    }, [dispatch, session]);

    return openCp ? (
        <div>
            {pathname === '/login' || pathname === '/admin' ? (
                children
            ) : (
                <>
                    {sizeX < 950 ? <HeaderMobile /> : <Header />}
                    {children}
                    <Footer />
                </>
            )}
        </div>
    ) : (
        <div className="loader cpmount">
            <Image src={logo.src} alt="logo pestnclean png" width={200} height={200} />
        </div>
    );
}
