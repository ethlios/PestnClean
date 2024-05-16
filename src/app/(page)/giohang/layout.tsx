import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Giỏ hàng',
    description:
        'Đến với PestnClean chúng tôi, bạn sẽ được cung cấp dịch vụ vệ sinh và kiểm soát côn trùng uy tín hàng đầu Việt Nam.',
    openGraph: {
        title: 'Giỏ hàng - Pestnclean',
        description:
            'Đến với PestnClean chúng tôi, bạn sẽ được cung cấp dịch vụ vệ sinh và kiểm soát côn trùng uy tín hàng đầu Việt Nam.',
        images: [
            {
                url: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1714017676/carolinie-cavalli-Qw3w0oBH63s-unsplash_uwk9vq.jpg',
                width: 900,
                height: 450,
                alt: `ảnh công ty Pestnclean - Giải pháp cho bạn`,
                type: 'image/png',
                secureUrl:
                    'https://res.cloudinary.com/dj2jarcxk/image/upload/v1714017676/carolinie-cavalli-Qw3w0oBH63s-unsplash_uwk9vq.jpg',
            },
        ],
        type: 'website',
        locale: 'vi_VN',
        siteName: 'Giỏ hàng Pestnclean',
        url: '/giohang',
    },
    alternates: {
        canonical: `/giohang`,
    },
};

export default function CartPageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
