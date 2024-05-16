import { allServices } from '~/constants/service';
import { nameToLink } from '~/libs/orthers/nameToLink';

interface Props {
    params: {
        dichvu: string;
    };
}

export async function generateMetadata({ params }: Props) {
    const blog: any = allServices.filter((blog) => {
        return nameToLink(blog.title) === params.dichvu;
    });

    const path = nameToLink(blog.length > 0 ? blog[0].title : '');

    if (!blog[0]) {
        return {
            title: 'NotFound',
            description: 'This page not found.',
        };
    }

    return {
        title: blog[0].title,
        description: blog[0].desHead ?? '',
        alternates: {
            canonical: `/${path}`,
        },
        keywords: `${blog[0].key}`,
        openGraph: {
            title: blog[0].title + ' | Pestnclean',
            description: blog[0].desHead ?? '',
            images: [
                {
                    url: blog[0].img,
                    secureUrl: blog[0].img,
                    width: 900,
                    height: 450,
                    alt: `ảnh ${blog[0].title?.toLowerCase()} | Pesnclean`,
                    type: 'image/png',
                },
            ],
            // tags: ,
            type: 'website',
            locale: 'vi_VN',
            siteName: blog.title,
            url: `/${path}`,
        },
    };
}

export default function ServiceDetailPageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
