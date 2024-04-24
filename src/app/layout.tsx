import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Favicon from '../../public/favicon.ico';
import MuiSetUp from '../common/Mui/MuiSetup';
import './globals.css';

const main = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.BASE_URL}`),
    title: {
        default: 'PestnClean - Chuyên cung cấp dịch vụ vệ sinh toàn diện',
        template: `%s | Pestnclean`,
    },
    description:
        'PestnClean chuyên cung cấp các dịch vụ kiểm soát côn trùng, dịch vụ vệ sinh, giải pháp vệ sinh cho doanh nghiệp, tòa nhà...',
    icons: [{ rel: 'icon', url: Favicon.src }],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'PestnClean - Chuyên cung cấp dịch vụ vệ sinh toàn diện',
        description:
            'PestnClean chuyên cung cấp các dịch vụ kiểm soát côn trùng, dịch vụ vệ sinh, giải pháp vệ sinh cho doanh nghiệp, tòa nhà...',
        images: [
            {
                url: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713230975/pestnclean/mockuplogo-min_wvup8n.png',
                width: 900,
                height: 450,
                alt: `Ảnh Pestnclean - Nâng cao chất lượng cuộc sống`,
                type: 'image/png',
                secureUrl:
                    'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713230975/pestnclean/mockuplogo-min_wvup8n.png',
            },
        ],
        type: 'website',
        locale: 'vi_VN',
        siteName: 'Pesnclean - Nâng cao chất lượng cuộc sống',
        url: '/',
    },
    keywords: 'Pestnclean, Giới thiệu Pestnclean, Giải pháp vệ sinh hiệu quả',
    applicationName: 'Pesnclean - Nâng cao chất lượng cuộc sống',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={main.className}>
                <MuiSetUp>{children}</MuiSetUp>
            </body>
        </html>
    );
}
