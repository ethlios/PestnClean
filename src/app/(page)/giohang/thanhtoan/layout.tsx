import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Thanh toán',
    description:
        'Đến với PestnClean chúng tôi, bạn sẽ được cung cấp dịch vụ vệ sinh và kiểm soát côn trùng uy tín hàng đầu Việt Nam.',
    openGraph: {
        title: 'Thanh toán - Pestnclean',
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
        siteName: 'Thanh toán Pestnclean',
        url: '/thanhtoan',
    },
    alternates: {
        canonical: `/thanhtoan`,
    },
};

export default function PaymentPageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
