import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const numberId = parseInt(params.id);
    const res = await prisma.discount.update({
        where: { id:numberId },
        data: {
            status: body.status,
            code: body.code,
            dateEnd: body.dateEnd,
            dateStart: body.dateStart,
            name: body.name,
            percent: body.percent,
            description: body.description
        },
    });

    return NextResponse.json({
        message: "Chỉnh sửa mã khuyến mãi thành công",
        data: res
    });
}
