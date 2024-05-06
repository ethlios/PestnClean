import { prisma } from './prisma';

async function getAllUsers() {
    const res = await fetch(`/api/user/all`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function getAllProducts() {
    return prisma.product.findMany();
}

export { getAllUsers };
