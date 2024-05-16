import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function GET(request: Request, { params }: { params: { id: number } }) {
    try {
        const id = params.id;
        if (id === undefined || isNaN(id)) {
            return NextResponse.json(
                {
                    message: 'Missing or invalid id parameter',
                },
                { status: 400 },
            );
        }

        let type: string;
        if (id == 0) {
            const res = await prisma.imgWork.findMany();
            return NextResponse.json({
                status: true,
                data: res,
                message: 'Lấy ra thành công',
            });
        } else if (id == 1) {
            type = 'Vệ sinh';
        } else if (id == 2) {
            type = 'Diệt côn trùng';
        } else if (id == 3) {
            type = 'Đào tạo';
        } else {
            return NextResponse.json(
                {
                    message: 'Invalid id parameter',
                },
                { status: 400 },
            );
        }

        const res = await prisma.imgWork.findMany({
            where: {
                type: type,
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
