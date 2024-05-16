import axios from 'axios';
import { prisma } from './prisma';

async function getAllUsers() {
    const res = await fetch(`/api/user/all`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

async function getAllUsersNotAdmin() {
    const res = await axios.get(`/api/user/all/ruleUser`);

    if (res.status === 400) {
        throw new Error('Failed to fetch data');
    }

    return res.data;
}

async function GetAllCodeInDiscount() {
    const res = await axios.get(`api/Discount/getCode`);

    if (res.status === 400) {
        throw new Error('Failed to fetch data');
    }

    return res.data;
}
async function GetAllDiscount() {
    const res = await axios.get(`api/Discount`);

    if (res.status === 400) {
        throw new Error('Failed to fetch data');
    }

    return res.data;
}
export async function getAllProducts() {
    return prisma.product.findMany();
}

export async function getAllBlogs() {
    return prisma.blog.findMany();
}

export { getAllUsers, getAllUsersNotAdmin, GetAllCodeInDiscount, GetAllDiscount };
