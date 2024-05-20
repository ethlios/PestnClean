import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dịch vụ vệ sinh',
    description:
        'PestnClean chuyên cung cấp dịch vụ vệ sinh toàn diện cho nhà ở, văn phòng, tòa nhà, nhà xưởng... Liên hệ ngay PestnClean để được tư vấn miễn phí',
    openGraph: {
        title: 'Dịch vụ vệ sinh - Pestnclean',
        description:
            'PestnClean chuyên cung cấp dịch vụ vệ sinh toàn diện cho nhà ở, văn phòng, tòa nhà, nhà xưởng... Liên hệ ngay PestnClean để được tư vấn miễn phí',
        images: [
            {
                url: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713844497/everdrop-gmbh-SqOMDOQb3ws-unsplash_cwbn5u.jpg',
                width: 900,
                height: 450,
                alt: `ảnh công ty Pestnclean - Giải pháp cho bạn`,
                type: 'image/png',
                secureUrl:
                    'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713844497/everdrop-gmbh-SqOMDOQb3ws-unsplash_cwbn5u.jpg',
            },
        ],
        type: 'website',
        locale: 'vi_VN',
        siteName: 'Dịch vụ vệ sinh tại Pestnclean',
        url: '/dichvu/dich-vu-ve-sinh',
    },
    alternates: {
        canonical: `/dichvu/dich-vu-ve-sinh`,
    },
};

export default function DichVu3PageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
