import { NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: Request) {
    const body = await request.json();
    
    // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu hay không
    const existingEmail = await prisma.email.findFirst({
        where: {
            email: body.email
        }
    });

    if(existingEmail) {
        // Nếu email đã tồn tại, bạn có thể trả về thông báo lỗi hoặc thực hiện hành động phù hợp
        return NextResponse.json({
            message: "Email đã được đăng ký"
        }, {
            status: 400, // Thay đổi status code thành 400 để phản ánh rằng email đã tồn tại và yêu cầu không thành công
        })
    } else {
        // Nếu email chưa tồn tại, tiến hành tạo mới bản ghi
        // if(body.authorId) {
        //     const checkUser = await prisma.user.findUnique({
        //         where: { 
        //             id: body.authorId
        //         },
        //     });

        //     if(checkUser) {
        //         const { id } = checkUser;
        //         const newEmail = await prisma.email.create({
        //             data: {
        //                 authorId: id,
        //                 email: body.email,
        //             },
        //         });

        //         return NextResponse.json({
        //             message: "Đăng ký thành công email",
        //             data: newEmail
        //         }, {
        //             status: 200,
        //         });
        //     }
        // } else {
        const defaultAuthorId = "104399638902286280553";
        const newEmail = await prisma.email.create({
            data: {
                authorId: defaultAuthorId,
                email: body.email,
            },
        });
        
        return NextResponse.json({
            message: "Đăng ký thành công email",
            data: newEmail
        }, {
            status: 200,
        });
        //}
    }
}

