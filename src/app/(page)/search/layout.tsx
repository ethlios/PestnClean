import { Metadata } from 'next';
import logo from '../../../../public/img/logo.png';

export const metadata: Metadata = {
    title: 'Tìm kiếm',
    description:
        'Đến với PestnClean chúng tôi, bạn sẽ được cung cấp dịch vụ vệ sinh và kiểm soát côn trùng uy tín hàng đầu Việt Nam.',
    openGraph: {
        title: 'Tìm kiếm - Pestnclean',
        description:
            'Đến với PestnClean chúng tôi, bạn sẽ được cung cấp dịch vụ vệ sinh và kiểm soát côn trùng uy tín hàng đầu Việt Nam.',
        images: [
            {
                url: logo.src,
                width: 900,
                height: 450,
                alt: `ảnh công ty Pestnclean - Giải pháp cho bạn`,
                type: 'image/png',
                secureUrl: logo.src,
            },
        ],
        type: 'website',
        locale: 'vi_VN',
        siteName: 'Tìm kiếm Pestnclean',
        url: '/search',
    },
    alternates: {
        canonical: `/search`,
    },
};

export default function FaqPageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
