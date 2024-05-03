import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';
export async function POST(request: Request) {
    const body = await request.json();
    if(body?.authorId){
        const check = await prisma.user.findUnique({
            where: { 
                id: body.authorId
            },
        });
        if(check){
            const {id} = check;
            const res = await prisma.email.create({
                data: {
                    authorId: id,
                    email: body.email,
                },
            });
            return NextResponse.json(res);
        }
    } else {
        const res = await prisma.email.create({
            data: {
                authorId: "104399638902286280553",
                email: body.email,
            },
        });
        return NextResponse.json(res);
    }
}
