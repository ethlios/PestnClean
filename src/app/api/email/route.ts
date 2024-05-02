import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request) {
    const body = await request.json();

    const res = await prisma.email.create({
        data: {
            authorId: '102462894644178223294', //random id => thử nghiệm
            email: body.email,
        },
    });

    return NextResponse.json(res);
}
