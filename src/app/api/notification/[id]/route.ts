import { NextResponse } from 'next/server';
import prisma from '~/libs/orthers/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        console.log(params.id)
        const person = await prisma.notification.findMany({
            where: {
                OR: [{ recipientId: params.id }, { recipientId: '104399638902286280553'}],
            },
            orderBy: {
                createdAt: 'desc' // Sort by createdAt in descending order
            }
        });

        if (!person) {
            return NextResponse.json(
                {
                    message: 'Notification not found',
                },
                { status: 404 },
            );
        }

        return NextResponse.json({
            data: person,
            message: 'Get All Notifications By Id Success',
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            {
                message: 'An error occurred',
            },
            { status: 500 },
        );
    }
}
