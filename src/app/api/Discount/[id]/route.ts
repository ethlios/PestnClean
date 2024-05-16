import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';


export async function DELETE(request: Request, { params }: { params: { id: string} }) {
    const convertId = parseInt(params.id);
    const res = await prisma.discount.delete({
        where: { id: convertId },
    });
    return NextResponse.json({
        message: "Delete Success",
        data:res
    });
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
