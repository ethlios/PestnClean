import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function PUT(request: Request, { params }: { params: { id: number } }) {
    const body = await request.json();

    const res = await prisma.blog.update({
        where: { id: body.id },
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
