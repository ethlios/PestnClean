import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    if (!id) {
        return NextResponse.json("Missing 'id' parameter", { status: 400 });
    }
    const body = await request.json();

    const res = await prisma.imgWork.update({
        where: { id: id },
        data: {
            img: body.img,
            type: body.type,
        },
    });

    return NextResponse.json({
        message: 'Cập nhập hình ảnh thành công',
        data: res,
    });
}
