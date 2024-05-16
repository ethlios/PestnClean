import { NextResponse } from 'next/server';
import { uid } from '~/libs/orthers/generatedCode';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request) {
    const body = await request.json();

    const res = await prisma.blog.create({
        data: {
            authorId: body.authorId,
            title: body.title,
            desHead: body.desHead,
            description: body.description,
            category: body.category,
            img: body.img,
            menu: body.menu,
            path: body.path,
            key: body.key,
            detail: body.detail,
        },
    });

    return NextResponse.json(res);
}

export async function GET(request: Request) {
    const res = await prisma.product.findMany();

    return NextResponse.json(res);
}
