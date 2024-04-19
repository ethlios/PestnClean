import type { Metadata } from 'next';
import './globals.css';
import { Merriweather } from 'next/font/google';
import MuiSetUp from '../common/Mui/MuiSetup';
import Favicon from '../../public/favicon.ico';

const inter = Merriweather({ subsets: ['vietnamese'], weight: ['300', '400', '700'] });

export const metadata: Metadata = {
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
            <body className={inter.className}>
                <MuiSetUp>{children}</MuiSetUp>
            </body>
        </html>
    );
}
