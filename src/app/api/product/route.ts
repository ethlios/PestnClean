import { NextResponse } from 'next/server';
import { uid } from '~/libs/orthers/generatedCode';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request) {
    const body = await request.json();

    const res = await prisma.product.create({
        data: {
            authorId: body.authorId,
            title: body.title,
            desHead: body.desHead,
            description: body.description,
            path: body.path,
            price: body.price,
            code: body.code,
            status: body.status,
            priceSales: body.priceSales,
            weight: body.weight,
            detail: body.detail,
            new: body.new,
            box: body.box,
            package: body.package,
            plate: body.plate,
            bag: body.bag,
            Image: body.image,
            category1: body.category1,
            category2: body.category2,
            category3: body.category3,
            pieces: body.pieces,
            quantity: body.quantity,
            hastags: body.hastags,
            categoryMain: body.categoryMain,
        },
    });

    return NextResponse.json(res);
}

export async function GET(request: Request) {
    const res = await prisma.product.findMany();

    return NextResponse.json(res);
}
