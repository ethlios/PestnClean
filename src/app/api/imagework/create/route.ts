import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request): Promise<Response> {
    try {
        const body = await request.json();

        // Kiểm tra xem có thiếu dữ liệu không
        if (!body.authorId || !body.img || !body.type) {
            return NextResponse.json(
                {
                    message: 'Missing required fields',
                },
                { status: 400 },
            );
        }

        // Kiểm tra định dạng dữ liệu đầu vào
        if (
            typeof body.authorId !== 'string' ||
            typeof body.img !== 'string' ||
            typeof body.type !== 'string'
        ) {
            return NextResponse.json(
                {
                    message: 'Invalid data format',
                },
                { status: 400 },
            );
        }

        const res = await prisma.imgWork.create({
            data: {
                authorId: body.authorId,
                img: body.img,
                type: body.type,
            },
        });

        // Trả về một response thành công nếu không có lỗi
        return NextResponse.json({
            success: true,
            data: res,
            message: 'Thêm hình ảnh mới thành công',
        },{status: 200});
    } catch (error: any) {
        console.error('Error:', error.message);
        // Xử lý lỗi từ Prisma
        if (error.code === 'PrismaClientKnownRequestError') {
            return NextResponse.json('Database error');
        }
        // Xử lý lỗi "Missing required fields"
        if (error.message === 'Missing required fields') {
            return NextResponse.json('Missing required fields', { status: 400 });
        }
        // Xử lý lỗi không xác định
        return NextResponse.json('An unexpected error occurred');
    }
}
