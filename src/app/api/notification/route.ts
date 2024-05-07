import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request) {
    const body = await request.json();
    const defaultAuthorId = '104399638902286280553';
    const newEmail = await prisma.notification.create({
        data: {
            title: body.title,
            recipientId: body.recipientId,
            state: body.state,
            recipient: body.recipient,
        },
    });

    // return NextResponse.json({
    //     message: "Đăng ký thành công email",
    //     data: newEmail
    // }, {
    //     status: 200,
    // });

    return NextResponse.json(newEmail);
}
