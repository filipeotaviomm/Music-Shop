import "dotenv/config";
import { compare } from "bcryptjs";
import { AppError } from "../errors/AppError.error";
import { sign } from "jsonwebtoken";
import { prisma } from "../app";

export const loginService = async (data: any): Promise<string> => { //TIPAR ANY
    const { email, password } = data;

    const user = await prisma.user.findUnique({where: { email }}); //TIPAR USER

    if (!user) throw new AppError("Email ou senha invalido(a).", 401);
    
    const truePass = await compare(password, user.password);

    if (!truePass) throw new AppError("Email ou senha invalido(a).", 401);

    const token = sign({user}, process.env.SECRET_KEY!, {expiresIn: process.env.EXPIRES_IN, subject: user.id.toString()});

    return token;
};