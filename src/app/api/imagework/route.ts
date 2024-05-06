import { NextResponse } from 'next/server';
import { uid } from '~/libs/orthers/generatedCode';
import { prisma } from '~/libs/orthers/prisma';


export async function GET(request: Request) {
    const res = await prisma.product.findMany();

    return NextResponse.json(res);
}
