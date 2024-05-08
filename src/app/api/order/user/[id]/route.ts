import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const requests = await prisma.user.findFirst({
        where: { id: params.id },
        include: {
            order: true,
        },
    });

    return NextResponse.json(requests);
}
