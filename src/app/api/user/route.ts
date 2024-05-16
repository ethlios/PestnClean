import prisma from '~/libs/orthers/prisma';
import generateId from '~/libs/orthers/generateId';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    const user = await prisma.user.create({
        data: {
            id: body.id ? body.id : generateId(),
            name: body.name,
            email: body.email ?? '',
            img: body.img,
        },
    });

    return NextResponse.json(user);
}
