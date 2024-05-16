import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function GET(request: Request, { params }: { params: { name: string } }) {
    const allProducts = await prisma.user.findMany({
        where: { rule: 'admin' },
        include: {
            blog: true,
        },
    });

    return NextResponse.json(allProducts);
}
