import "dotenv/config";
import { compare } from "bcryptjs";
import { AppError } from "../errors/AppError.error";
import { sign } from "jsonwebtoken";
import { prisma } from "../app";
import { loginReturn } from "../interfaces/session.interface";

export const loginService = async (data: any): Promise<loginReturn> => {
  const { email, password } = data;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new AppError("Email ou senha invalido(a).", 401);

  const truePass = await compare(password, user.password);

  if (!truePass) throw new AppError("Email ou senha invalido(a).", 401);
  const userName = user.name;

  const token = sign({ name: userName }, process.env.SECRET_KEY!, {
    expiresIn: process.env.EXPIRES_IN,
    subject: user.id.toString(),
  });

  return { token, userName };
};
