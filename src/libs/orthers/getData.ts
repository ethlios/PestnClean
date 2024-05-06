import { prisma } from './prisma';

async function getAllUsers() {
    const res = await fetch(`/api/user/all`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

async function getAllProdcut() {
    const product = await prisma.product.findMany();

    return product;
}

export { getAllUsers, getAllProdcut };
