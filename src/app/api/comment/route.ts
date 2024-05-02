import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request) {
    const body = await request.json();

    const res = await prisma.commentBlogs.create({
        data: {
            authorId: body.userId,
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
