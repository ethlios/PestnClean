import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Liên hệ',
    description:
        'PestnClean cam kết phục vụ tận tâm mọi khách hàng và đối tác với đội ngũ tư vấn viên hỗ trợ liên tục 24/7.',
    openGraph: {
        title: 'Liên hệ - Pestnclean',
        description:
            'PestnClean cam kết phục vụ tận tâm mọi khách hàng và đối tác với đội ngũ tư vấn viên hỗ trợ liên tục 24/7.',
        images: [
            {
                url: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1712983101/pestnclean/customer-service-business-contact-concept-wooden-cube-block-which-print-screen-letter-telephone-email-address-message_1_fqe8ma.jpg',
                width: 900,
                height: 450,
                alt: `ảnh công ty Pestnclean - Giải pháp cho bạn`,
                type: 'image/png',
                secureUrl:
                    'https://res.cloudinary.com/dj2jarcxk/image/upload/v1712983101/pestnclean/customer-service-business-contact-concept-wooden-cube-block-which-print-screen-letter-telephone-email-address-message_1_fqe8ma.jpg',
            },
        ],
        type: 'website',
        locale: 'vi_VN',
        siteName: 'Liên hệ Pestnclean',
        url: '/lienhe',
    },
    alternates: {
        canonical: `/lienhe`,
    },
};

export default function ContactPageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
