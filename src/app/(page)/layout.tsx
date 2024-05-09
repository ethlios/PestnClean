'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'tippy.js/dist/tippy.css';
import Footer from '~/common/Footer/footer';
import Header from '~/common/Header/header';
import HeaderMobile from '~/common/Header/headerMobile';
import useSize from '~/libs/hooks/useSize';
import { getAllProducts, getProvince, getUser } from '~/redux/actions';
import logo from '../../../public/img/logo.png';

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

    useEffect(() => {
        const allProducts = async () => {
            const products = await fetch('/api/product/all').then((res) => res.json());

            dispatch(getAllProducts(products[0].product));
        };

        allProducts();
    }, [dispatch]);

    useEffect(() => {
        const allProvince = async () => {
            const province = await fetch(
                'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
            ).then((res) => res.json());
            dispatch(getProvince(province));
        };
        allProvince();
    }, [dispatch]);

    return openCp ? (
        <div>
            {pathname === '/login' || pathname === '/admin' || pathname.includes('/profile/') ? (
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
