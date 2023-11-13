import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Por favor insira um e-mail válido")
    .refine((value) => value !== "", {
      message: "Favor colocar o e-mail :)",
    }),
  password: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "Favor colocar a senha :)",
    }),
});

export default loginSchema;
