import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const res = await prisma.imgWork.findMany({
            where: {
                type: body.type,
            },
        });

        return NextResponse.json({
            status: true,
            data: res,
            message: 'Lấy ra thành công',
        });
    } catch (error: any) {
        console.error('Error:', error.message);
        return NextResponse.json(
            {
                status: false,
                message: 'An error occurred while processing the request',
            },
            { status: 500 },
        );
    }
}
