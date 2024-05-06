import { products as mockupProduct } from '~/constants/products';
import { nameToLink } from '~/libs/orthers/nameToLink';

interface Props {
    params: {
        'sanpham-detail': string;
    };
}

export async function generateMetadata({ params }: Props) {
    const productDetail: any = mockupProduct.filter((product: any) => {
        return nameToLink(product.title) === params['sanpham-detail'];
    });

    const path = nameToLink(productDetail.length > 0 ? productDetail[0].title : '');

    if (!productDetail[0]) {
        return {
            title: 'NotFound',
            description: 'This page not found.',
        };
    }

    return {
        title: productDetail[0].title,
        description: productDetail[0].description ?? '',
        alternates: {
            canonical: `/sanpham/${path}`,
        },
        keywords: `${productDetail[0].key}`,
        openGraph: {
            title: productDetail[0].title + ' | Pestnclean',
            description: productDetail[0].description ?? '',
            images: [
                {
                    url: productDetail[0].img,
                    secureUrl: productDetail[0].img,
                    width: 900,
                    height: 450,
                    alt: `ảnh ${productDetail[0].title?.toLowerCase()} | Pesnclean`,
                    type: 'image/png',
                },
            ],
            // tags: ,
            type: 'website',
            locale: 'vi_VN',
            siteName: productDetail.title,
            url: `/sanpham/${path}`,
        },
    };
}

export default function ProductDetailPageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
