import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Giới thiệu',
    description:
        'Đến với PestnClean chúng tôi, bạn sẽ được cung cấp dịch vụ vệ sinh và kiểm soát côn trùng uy tín hàng đầu Việt Nam.',
    openGraph: {
        title: 'Giới thiệu - Pestnclean',
        description:
            'Đến với PestnClean chúng tôi, bạn sẽ được cung cấp dịch vụ vệ sinh và kiểm soát côn trùng uy tín hàng đầu Việt Nam.',
        images: [
            {
                url: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713230969/pestnclean/21821905_OFC_3_231_12_2021-min_f7tr71.png',
                width: 900,
                height: 450,
                alt: `ảnh công ty Pestnclean - Giải pháp cho bạn`,
                type: 'image/png',
                secureUrl:
                    'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713230969/pestnclean/21821905_OFC_3_231_12_2021-min_f7tr71.png',
            },
        ],
        type: 'website',
        locale: 'vi_VN',
        siteName: 'Giới thiệu Pestnclean',
        url: '/gioithieu',
    },
    alternates: {
        canonical: `/gioithieu`,
    },
};

export default function AboutPageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
