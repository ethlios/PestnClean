import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const requests = await prisma.order.findMany({
        where: { userId: params.id },
    });

    return NextResponse.json(requests);
}
