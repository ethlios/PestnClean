import { NextResponse } from 'next/server';
import { uid } from '~/libs/orthers/generatedCode';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request) {
    const body = await request.json();

    const res = await prisma.product.create({
        data: {
            authorId: body.authorId,
            title: body.title,
            desHead: body.description,
            comments: body.comments,
            price: body.price,
            code: uid(),
            status: body.status,
            category: body.category,
            priceSales: body.priceSales,
            weight: body.weight,
            expiry: body.expiry,
        },
    });

    return NextResponse.json(res);
}
