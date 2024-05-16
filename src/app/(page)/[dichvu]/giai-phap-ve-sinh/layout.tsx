import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Giải pháp vệ sinh',
    description:
        'PestnClean chuyên cung cấp giải pháp vệ sinh cho tòa nhà, văn phòng, trung tâm thương mại... Hãy gọi ngay cho chúng tôi để được tư vấn miễn phí.',
    openGraph: {
        title: 'Giải pháp vệ sinh - Pestnclean',
        description:
            'PestnClean chuyên cung cấp giải pháp vệ sinh cho tòa nhà, văn phòng, trung tâm thương mại... Hãy gọi ngay cho chúng tôi để được tư vấn miễn phí.',
        images: [
            {
                url: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713879088/still-life-with-aroma-diffuser-humidify-air-interior-decor-details-scandinavian-style_qgnsf1.jpg',
                width: 900,
                height: 450,
                alt: `ảnh công ty Pestnclean - Giải pháp cho bạn`,
                type: 'image/png',
                secureUrl:
                    'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713879088/still-life-with-aroma-diffuser-humidify-air-interior-decor-details-scandinavian-style_qgnsf1.jpg',
            },
        ],
        type: 'website',
        locale: 'vi_VN',
        siteName: 'Giải pháp vệ sinh tại Pestnclean',
        url: '/dichvu/giai-phap-ve-sinh',
    },
    alternates: {
        canonical: `/dichvu/giai-phap-ve-sinh`,
    },
};

export default function DichVu2PageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
