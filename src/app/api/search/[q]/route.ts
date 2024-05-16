
import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';
import { blogs } from '~/constants/blogs';
import { allServices } from '~/constants/service';
interface Blog {
    id: number;
    title: string;
    createdAt: string;
    category: string;
    menu: string[];
    key: string[];
    img: string;
    desHead?: string;
    description: string;
    detail: string;
}
interface Services{
    id: number;
    title: string;
    createdAt: string;
    menu: string[];
    key: string[];
    img: string;
    desHead?: string;
    description: string;
    detail: string;
}
function QuerySearchBlogs(query: string,arrBlogs:Blog[]){
    const queryLower = query.toLowerCase();
    const index: { [prefix: string]: Blog[] } = {};
    arrBlogs.forEach((item:Blog) => {
        const title = item.title.toLowerCase();
        for (let i = 0; i < title.length; i++) {
            const prefix = title.slice(0, i + 1);
            if (!index[prefix]) {
                index[prefix] = [];
            }
            index[prefix].push(item);
        }
    });

    const results = index[queryLower] || [];
    return results.filter(blog => blog.title.toLowerCase().includes(queryLower));
}

function QuerySearchServices(query: string,arrServices:Services[]){
    const queryLower = query.toLowerCase();
    const index: { [prefix: string]: Services[] } = {};
    arrServices.forEach((item:Services) => {
        const title = item.title.toLowerCase();
        for (let i = 0; i < title.length; i++) {
            const prefix = title.slice(0, i + 1);
            if (!index[prefix]) {
                index[prefix] = [];
            }
            index[prefix].push(item);
        }
    });

    const results = index[queryLower] || [];
    return results.filter(service => service.title.toLowerCase().includes(queryLower));
}

export async function GET(request: Request, { params }: { params: { q: string } }) {
    try {
        if (!params.q) {
            throw Error('Invalid Request');
        }

        const searchProducts = await prisma.product.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: params.q,
                            mode: 'insensitive',
                        },
                    },
                ],
            },
        });

        const searchBlogs = QuerySearchBlogs(params.q,blogs);
        const searchService = QuerySearchServices(params.q,allServices);


        return NextResponse.json({
            message: 'Success',
            data: {
                products: searchProducts.length > 0 ? searchProducts : [],
                blogs: searchBlogs.length > 0 ? searchBlogs : [],
                services: searchService.length > 0 ? searchService : []
            }
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            {
                message: 'An error occurred',
            },
            { status: 500 },
        );
    }
}
