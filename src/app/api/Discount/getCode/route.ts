import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';
export async function GET(request: Request) {
    const res = await prisma.discount.findMany({
        select:{
            code: true
        }
    });
    return NextResponse.json(res);
}