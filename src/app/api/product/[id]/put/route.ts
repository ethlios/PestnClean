import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function PUT(request: Request, { params }: { params: { id: number } }) {
    const body = await request.json();

    const res = await prisma.product.update({
        where: { id: body.id },
        data: {
            authorId: body.authorId,
            title: body.title,
            desHead: body.description,
            comments: body.comments,
            price: body.price,
            status: body.status,
            category: body.category,
            priceSales: body.priceSales,
            weight: body.weight,
            expiry: body.expiry,
        },
    });

    return NextResponse.json(res);
}
