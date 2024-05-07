import prisma from '~/libs/orthers/prisma';
import { NextResponse } from 'next/server';
import { getBottomNavigationUtilityClass } from '@mui/material';

export async function GET(request: Request) {
    const user = await prisma.user.findMany({
        where: {
            rule: null
        },
    });
    console.log(user);
    return NextResponse.json({
        message: 'Success',
        data: user,
    });
}
