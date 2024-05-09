import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function DELETE({ params }: { params: { id: number } }) {
    const res = await prisma.discount.delete({
        where: { id: +params.id },
    });

    return NextResponse.json(res);
}
