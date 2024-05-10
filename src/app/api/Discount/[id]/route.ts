import { NextRequest, NextResponse } from 'next/server';
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

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const numberId = parseInt(params.id);
    const res = await prisma.discount.update({
        where: { id:numberId },
        data: {
            status: body.status,
        },
    });

    return NextResponse.json({
        message: "Update Status Success",
        data: res
    });
}
