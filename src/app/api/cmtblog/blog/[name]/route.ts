import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

interface RequestType {
    name: string;
}

export async function GET(request: Request, { params }: { params: RequestType }) {
    const res = await prisma.commentBlogs.findMany({
        where: { blogName: params.name },
    });

    return NextResponse.json(res);
}
