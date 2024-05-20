import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request) {
    const body = await request.json();

    const res = await prisma.comments.create({
        data: {
            productId: body.productId,
            img: body.img,
            message: body.message,
            name: body.name,
            email: body.email,
        },
    });

    return NextResponse.json(res);
}
