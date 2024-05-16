import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function PUT(request: Request, { params }: { params: { id: number } }) {
    const body = await request.json();

    const res = await prisma.comments.update({
        where: { id: body.id },
        data: {
            productId: body.productId,
            img: body.img,
            message: body.message,
            name: body.name,
        },
    });

    return NextResponse.json(res);
}
