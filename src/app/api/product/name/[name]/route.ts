import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function GET(request: Request, { params }: { params: { name: string } }) {
    const userPost = await prisma.product.findMany({
        where: { title: params.name },
        include: {
            comments: true,
        },
    });

    return NextResponse.json(userPost);
}
