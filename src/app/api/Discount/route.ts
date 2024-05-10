import { NextResponse } from 'next/server';
import { uid } from '~/libs/orthers/generatedCode';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request) {
    const body = await request.json();

    const res = await prisma.discount.create({
        data: {
            code: body.code,
            percent: body.percent,
            name: body.name,
            dateStart: body.dateStart,
            dateEnd: body.dateEnd,
            description: body.description,
            authorId: body.authorId,
        },
    });

    return NextResponse.json(res);
}
