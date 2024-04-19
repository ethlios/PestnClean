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

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [openCp, setOpenCp] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => setOpenCp(true), 1000);
    }, []);

    return openCp ? (
        <div>
            {pathname === '/login' ? (
                children
            ) : (
                <>
                    <Header></Header>
                    {children}
                    <Footer></Footer>
                </>
            )}
        </div>
    ) : (
        <div className="loader cpmount">
            <Image src={logo.src} alt="logo pestnclean png" width={200} height={200} />
        </div>
    );
}
