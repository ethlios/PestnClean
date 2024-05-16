import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kiểm soát côn trùng',
    description:
        'PestnClean chuyên cung cấp dịch vụ kiểm soát côn trùng toàn diện cho tòa nhà, chung cư, văn phòng, cơ sở công nghiệp, nhà xưởng ... Liên hệ tư vấn miễn phí',
    openGraph: {
        title: 'Kiểm soát côn trùng - Pestnclean',
        description:
            'PestnClean chuyên cung cấp dịch vụ kiểm soát côn trùng toàn diện cho tòa nhà, chung cư, văn phòng, cơ sở công nghiệp, nhà xưởng ... Liên hệ tư vấn miễn phí',
        images: [
            {
                url: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713874790/people-disinfecting-biohazard-area_1_yk8d7i.jpg',
                width: 900,
                height: 450,
                alt: `ảnh công ty Pestnclean - Giải pháp cho bạn`,
                type: 'image/png',
                secureUrl:
                    'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713874790/people-disinfecting-biohazard-area_1_yk8d7i.jpg',
            },
        ],
        type: 'website',
        locale: 'vi_VN',
        siteName: 'Kiểm soát côn trùng tại Pestnclean',
        url: '/dichvu/kiem-soat-con-trung',
    },
    alternates: {
        canonical: `/dichvu/kiem-soat-con-trung`,
    },
};

export default function DichVu1PageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
