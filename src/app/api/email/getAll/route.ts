import { NextRequest } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const paramsId = searchParams.get("id") ?? "";
    const allProducts = await prisma.email.findMany({
        where: {
            NOT: { authorId: paramsId }
        },
    });
    if(allProducts.length > 0) {
        return Response.json(allProducts);
    }
    return Response.json({
        message: "Emails Empty"
    }, {
        status: 400, 
    })
}

