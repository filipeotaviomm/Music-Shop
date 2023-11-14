import { hash } from "bcryptjs";
import { prisma } from "../app";

export const createUserService = async (data: any) => {

    const hashedPassword = await hash(data.password, 10);

    const user = { ...data, password: hashedPassword };

    const newUser = await prisma.user.create({ data: user });

    return newUser;
};