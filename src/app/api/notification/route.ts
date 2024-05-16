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

interface Message {
    id: number;
    title: string;
    message: string;
    recipientId: string[];
    state: boolean;
    createdAt: Date;
}

export async function GET(request: NextRequest) {
    try {
        // Lấy tất cả thông báo từ cơ sở dữ liệu
        const getAllNotify = await prisma.notification.findMany();

        // Mảng để lưu trữ thông báo đã được gộp
        const mergedMessages: Message[] = [];

        // Gộp các thông báo có cùng title và message
        getAllNotify.forEach((msg) => {
            const existingMessage = mergedMessages.find(
                (mergedMsg) => mergedMsg.title === msg.title && mergedMsg.message === msg.message,
            );
            if (existingMessage) {
                existingMessage.recipientId.push(...msg.recipientId.split(',')); // Chuyển đổi chuỗi thành mảng trước khi thêm vào
            } else {
                if (msg.message !== null) {
                    const newMessage: Message = {
                        id: msg.id,
                        title: msg.title,
                        message: msg.message,
                        recipientId: [msg.recipientId],
                        state: msg.state,
                        createdAt: msg.createdAt,
                    };
                    mergedMessages.push(newMessage);
                }
            }
        });

        // Lấy tất cả các recipientId từ mảng getAllNotify và làm phẳng thành một mảng duy nhất
        const recipientIds: string[] = getAllNotify.flatMap((item) => item.recipientId);

        // Loại bỏ các giá trị trùng lặp từ mảng recipientIds
        const uniqueRecipientIds = recipientIds.filter((value, index, self) => self.indexOf(value) === index);

        // Truy vấn dữ liệu người dùng từ cơ sở dữ liệu dựa trên uniqueRecipientIds
        const getAllUserByNotification = await prisma.user.findMany({
            where: {
                id: {
                    in: uniqueRecipientIds,
                },
            },
        });

        // Gộp thông tin người dùng vào mỗi thông báo
        const merged = mergedMessages.map((notification) => {
            const recipientInfo = notification.recipientId.map((recipientId) => {
                const recipient = getAllUserByNotification.find((recipient) => recipient.id === recipientId);
                if (recipient) {
                    return {
                        id: recipient.id,
                        email: recipient.email,
                        name: recipient.name,
                    };
                }
                return null;
            });

            return {
                ...notification,
                recipientId: recipientInfo.filter(Boolean),
            };
        });

        // Trả về kết quả
        return NextResponse.json(
            {
                message: 'Success',
                data: merged,
            },
            {
                status: 200,
            },
        );
    } catch (error: any) {
        // Xử lý lỗi
        console.error('Error processing request:', error.message);
        return NextResponse.json(
            {
                error: 'An error occurred while processing the request',
            },
            {
                status: 500,
            },
        );
    }
}
