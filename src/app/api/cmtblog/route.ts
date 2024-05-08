import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request) {
    const body = await request.json();

    const res = await prisma.commentBlogs.create({
        data: {
            authorId: body.authorId,
            blogName: body.blogName,
            img: body.img ?? '',
            message: body.message,
            name: body.name,
            email: body.email,
            avatar: body.avatar ?? '',
            userId: body.userId ?? '',
        },
    });

    return NextResponse.json(res);
}
