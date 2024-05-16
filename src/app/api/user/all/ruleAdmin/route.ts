import prisma from '~/libs/orthers/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const user = await prisma.user.findMany({
        where: {
            rule: 'admin',
        },
    });
    return NextResponse.json(user);
}
