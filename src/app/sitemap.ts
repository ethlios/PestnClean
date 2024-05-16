import { blogs } from '~/constants/blogs';
import { allServices } from '~/constants/service';
import { getAllProducts } from '~/libs/orthers/getData';
import { nameToLink } from '~/libs/orthers/nameToLink';

export default async function sitemap() {
    const baseUrl = process.env.NEXTAUTH_URL;

    const blogUrl = blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${nameToLink(blog.title)}`,
        lastModified: new Date(),
    }));

    const serviceUrl = allServices.map((service) => ({
        url: `${baseUrl}/${nameToLink(service.title)}`,
        lastModified: new Date(),
    }));

    const products = await getAllProducts();

    const productUrl = products.map((product) => ({
        url: `${baseUrl}/sanpham/${nameToLink(product.title ?? '')}`,
        lastModified: new Date(),
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/sanpham`, lastModified: new Date() },
        { url: `${baseUrl}/blogs`, lastModified: new Date() },
        { url: `${baseUrl}/gioithieu`, lastModified: new Date() },
        { url: `${baseUrl}/giohang`, lastModified: new Date() },
        { url: `${baseUrl}/lienhe`, lastModified: new Date() },
        { url: `${baseUrl}/hoidap`, lastModified: new Date() },
        { url: `${baseUrl}/dichvu/kiem-soat-con-trung`, lastModified: new Date() },
        { url: `${baseUrl}/dichvu/dich-vu-ve-sinh`, lastModified: new Date() },
        { url: `${baseUrl}/dichvu/giai-phap-ve-sinh`, lastModified: new Date() },
        ...serviceUrl,
        ...blogUrl,
        ...productUrl,
    ];
}
