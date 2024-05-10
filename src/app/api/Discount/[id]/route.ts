import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

interface RequestDelete {
    id: number;
}

export async function DELETE(request: Request, { params }: { params: RequestDelete }) {
    const res = await prisma.discount.delete({
        where: { id: params.id },
    });

    return NextResponse.json(res);
}

export async function PUT(request: Request, { params }: { params: { id: number } }) {
    const body = await request.json();

    const res = await prisma.discount.update({
        where: { id: body.id },
        data: {
            status: body.status,
        },
    });

    return NextResponse.json(res);
}

