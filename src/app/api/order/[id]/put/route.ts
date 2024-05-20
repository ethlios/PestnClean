import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

interface RequestDelete {
    id: number;
}

export async function PUT(request: Request, { params }: { params: RequestDelete }) {
    const body = await request.json();

    const res = await prisma.order.update({
        where: { id: +params.id },
        data: {
            userId: body.userId,
            email: body.email,
            name: body.name,
            address: body.address,
            city: body.city,
            message: body.message,
            phone: body.phone,
            product: body.product,
            status: body.status,
            district: body.district,
            payment: body.payment,
            paymentStatus: body.paymentStatus,
            Ward: body.ward,
            discount: body.discount,
        },
    });

    return NextResponse.json(res);
}
