import { blogs } from '~/constants/blogs';
import { getAllBlogs } from '~/libs/orthers/getData';

interface Props {
    params: {
        detail: string;
    };
}

export async function generateMetadata({ params }: Props) {
    const blog2 = await getAllBlogs();

    const allBlogs = [...blogs, ...blog2];

    const blog: any = allBlogs.filter((blog) => {
        return blog.path === params.detail;
    });

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
            canonical: `/blogs/${params.detail}`,
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
            url: `/blogs/${params.detail}`,
        },
    };
}

export default function BlogsDetailPageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
