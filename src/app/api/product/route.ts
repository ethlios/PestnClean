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
            price: body.price,
            code: uid(),
            status: body.status,
            category: body.category,
            priceSales: body.priceSales,
            weight: body.weight,
            detail: body.detail,
            new: body.new,
            box: body.box,
            package: body.package,
            plate: body.plate,
            bag: body.bag,
            Image: body.image,
        },
    });

    return NextResponse.json(res);
}

export async function GET(request: Request) {
    const res = await prisma.product.findMany();

    return NextResponse.json(res);
}
