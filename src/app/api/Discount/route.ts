import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Kiểm tra tính hợp lệ của dữ liệu đầu vào
        if (!body.code || !body.percent || !body.name || !body.dateStart || !body.dateEnd || !body.description || !body.authorId) {
            throw new Error('Missing required fields');
        }

        // Tạo mới khuyến mãi
        const res = await prisma.discount.create({
            data: {
                code: body.code,
                percent: body.percent,
                name: body.name,
                dateStart: body.dateStart,
                dateEnd: body.dateEnd,
                description: body.description,
                authorId: body.authorId,
                status: false
            },
        });

        // Trả về kết quả thành công
        return NextResponse.json({
            message: "Thêm mã khuyến mãi thành công",
            data: res
        });
    } catch (error) {
        // Xử lý các lỗi
        console.error('Error creating discount:', error);
        if (error) {
            return NextResponse.json('Invalid data provided', { status: 400 });
        } else {
            return NextResponse.json('Internal Server Error', { status: 500 });
        }
    }
}

