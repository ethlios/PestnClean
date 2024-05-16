import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hỏi đáp',
    description:
        'Đến với PestnClean chúng tôi, bạn sẽ được cung cấp dịch vụ vệ sinh và kiểm soát côn trùng uy tín hàng đầu Việt Nam.',
    openGraph: {
        title: 'Hỏi đáp - Pestnclean',
        description:
            'Đến với PestnClean chúng tôi, bạn sẽ được cung cấp dịch vụ vệ sinh và kiểm soát côn trùng uy tín hàng đầu Việt Nam.',
        images: [
            {
                url: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713270511/question-mark-query-information-support-service-graphic_lhkaqg.jpg',
                width: 900,
                height: 450,
                alt: `ảnh công ty Pestnclean - Giải pháp cho bạn`,
                type: 'image/png',
                secureUrl:
                    'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713270511/question-mark-query-information-support-service-graphic_lhkaqg.jpg',
            },
        ],
        type: 'website',
        locale: 'vi_VN',
        siteName: 'Hỏi đáp Pestnclean',
        url: '/hoidap',
    },
    alternates: {
        canonical: `/hoidap`,
    },
};

export default function FaqPageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
