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
        const imgWorkId = await prisma.imgWork.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        if (!imgWorkId) {
            return new NextResponse(JSON.stringify({ message: 'Id not exits' }), {
                status: 400,
            });
        }

        const deletedImgWork = await prisma.imgWork.delete({
            where: { id: id },
        });

        return new NextResponse(JSON.stringify({ message: 'Xóa imgWork thành công' ,data: deletedImgWork}), {
            status: 200,
        });
    } catch (error) {
        console.error('Error occurred while deleting imgWork:', error);

        return NextResponse.json(new Error('Failed to delete imgWork'), { status: 500 });
    }
}
