import { blogs } from '~/constants/blogs';

interface Props {
    params: {
        detail: string;
    };
}

export async function generateMetadata({ params }: Props) {
    const blog: any = blogs.filter((blog) => {
        return blog.path === params.detail;
    });

    const path = blog.path;

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
            canonical: `/blogs/${path}`,
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
            url: `/blogs/${path}`,
        },
    };
}

export default function BlogsDetailPageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
