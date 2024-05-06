import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const person = await prisma.user.findMany({
        where: { id: params.id },
        select: {
            email: true,
            name: true,
            img: true,
            product: true,
            rule: true,
            order: true,
            emailkm: true,
            address: true,
            district: true,
            Ward: true,
            city: true,
            phone: true,
            avatar: true,
            discount: true,
            comment: true,
            cart: true,
            imgWork: true,
            notification: true,
        },
    });

    return NextResponse.json(person);
}
