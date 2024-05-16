import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blogs',
    description:
        'Đến với PestnClean chúng tôi, bạn sẽ được cung cấp dịch vụ vệ sinh và kiểm soát côn trùng uy tín hàng đầu Việt Nam.',
    openGraph: {
        title: 'Blogs - Pestnclean',
        description:
            'Đến với PestnClean chúng tôi, bạn sẽ được cung cấp dịch vụ vệ sinh và kiểm soát côn trùng uy tín hàng đầu Việt Nam.',
        images: [
            {
                url: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713699714/l%C3%B4go-mockup_optimized_gnftec.png',
                width: 900,
                height: 450,
                alt: `ảnh công ty Pestnclean - Giải pháp cho bạn`,
                type: 'image/png',
                secureUrl:
                    'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713699714/l%C3%B4go-mockup_optimized_gnftec.png',
            },
        ],
        type: 'website',
        locale: 'vi_VN',
        siteName: 'Blogs Pestnclean',
        url: '/blogs',
    },
    alternates: {
        canonical: `/blogs`,
    },
};

export default function BlogsPageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
