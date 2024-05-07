import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request) {
    const body = await request.json();

    const res = await prisma.order.create({
        data: {
            authorId: body.authorId,
            userId: body.userId,
            name: body.name,
            email: body.email,
            phone: body.phone,
            address: body.address,
            city: body.city,
            district: body.district,
            Ward: body.ward,
            message: body.message,
            code: body.code,
            payment: body.payment,
            product: body.product,
        },
    });

    return NextResponse.json(res);
}
