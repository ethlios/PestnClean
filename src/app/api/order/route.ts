import { NextResponse } from 'next/server';
import { uidOrder } from '~/libs/orthers/generatedCode';
import { prisma } from '~/libs/orthers/prisma';

export async function PUT(request: Request) {
    const body = await request.json();

    const res = await prisma.user.update({
        where: {
            id: body.authorId,
            rule: 'admin',
        },
        data: {
            order: {
                create: {
                    userId: body.userId,
                    email: body.email,
                    name: body.name,
                    address: body.address,
                    code: uidOrder(),
                    city: body.city,
                    message: body.message,
                    phone: body.phone,
                    product: body.product,
                    status: body.status,
                    district: body.district,
                    payment: body.payment,
                    paymentStatus: body.paymentStatus,
                    Ward: body.ward,
                },
            },
        },
    });

    return NextResponse.json(res);
}
