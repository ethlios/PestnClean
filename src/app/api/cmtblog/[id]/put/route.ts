import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function PUT(request: Request, { params }: { params: { id: number } }) {
    const body = await request.json();

    const res = await prisma.commentBlogs.update({
        where: { id: body.id },
        data: {
            blogName: body.blogName,
            img: body.img,
            message: body.message,
            name: body.name,
            type: body.type,
            email: body.email,
            avatar: body.avatar,
        },
    });

    return NextResponse.json(res);
}
