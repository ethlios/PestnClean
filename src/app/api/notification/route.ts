import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const newNotify = await prisma.notification.create({
            data: {
                title: body.title,
                message: body.message,
                createdAt: body.createdAt,
                recipientId: body.recipientId,
                state: body.state,
            },
        });

        return NextResponse.json(
            {
                message: 'Đã gửi thông báo đến user!',
                data: newNotify,
            },
            {
                status: 200,
            },
        );
    } catch (error: any) {
        // Xử lý các lỗi
        console.error('Lỗi trong quá trình xử lý yêu cầu:', error.message);
        return NextResponse.json(
            {
                error: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu',
            },
            {
                status: 500,
            },
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const getAllNotify = await prisma.notification.findMany();
        return NextResponse.json(
            {
                message: 'Success',
                data: getAllNotify,
            },
            {
                status: 200,
            },
        );
    } catch (error: any) {
        // Xử lý các lỗi
        console.error('Lỗi trong quá trình xử lý yêu cầu:', error.message);
        return NextResponse.json(
            {
                error: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu',
            },
            {
                status: 500,
            },
        );
    }
}
