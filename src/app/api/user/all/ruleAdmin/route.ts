import prisma from '~/libs/orthers/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const user = await prisma.user.findMany({
        where: {
            rule: 'admin',
        },
        include: {
            product: true,
            blog: true,
            imgWork: true,
        },
    });
    return NextResponse.json(user);
}
