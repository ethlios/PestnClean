import { NextResponse } from 'next/server';
import prisma from '~/libs/orthers/prisma';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();

    const user = await prisma.user.update({
        where: { id: params.id },
        data: {
            email: body.email,
            name: body.name,
            img: body.img,
            address: body.address,
            district: body.district,
            Ward: body.ward,
            city: body.city,
            phone: body.phone,
            avatar: body.avatar,
        },
    });
    return NextResponse.json(user);
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const person = await prisma.user.findFirst({
        where: { id: params.id },
        select: {
            email: true,
            name: true,
        },
    });

    return NextResponse.json({
        data: person,
        message: "Success"
    });
}
