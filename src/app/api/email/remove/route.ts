import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { id } = body;
        if (!id) {
            return new NextResponse(JSON.stringify({ message: 'ID is required' }), {
                status: 400,
            });
        }
        const email = await prisma.email.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        if (!email) {
            return new NextResponse(JSON.stringify({ message: 'Id not exits' }), {
                status: 400,
            });
        }

        const deletedEmail = await prisma.email.delete({
            where: { id: id },
        });

        return new NextResponse(JSON.stringify({ message: 'Xóa email thành công' ,data: deletedEmail}), {
            status: 200,
        });
    } catch (error) {
        console.error('Error occurred while deleting email:', error);

        return NextResponse.json(new Error('Failed to delete email'), { status: 500 });
    }
}
