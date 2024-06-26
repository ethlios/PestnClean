import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

interface RequestDelete {
    id: number;
}

export async function DELETE(request: Request, { params }: { params: RequestDelete }) {
    const res = await prisma.commentBlogs.delete({
        where: { id: +params.id },
    });

    return NextResponse.json(res);
}
