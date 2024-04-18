'use client';

import 'tippy.js/dist/tippy.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Header from '~/common/Header/header';
import Footer from '~/common/Footer/footer';
import { usePathname } from 'next/navigation';

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
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
    );
}
