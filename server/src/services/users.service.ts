import { prisma } from "../app";

export const createUserService = async (data: any) => {
    console.log(data)
    const user = await prisma.user.create({ data });

    return user;
};