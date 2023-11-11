import { z } from "zod";

const signUpSchema = z
  .object({
    email: z
      .string()
      .min(8)
      .max(120)
      .trim()
      .toLowerCase()
      .email("Por favor insira um e-mail válido"),
    password: z
      .string()
      .min(8, "")
      .trim()
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/\d/, "A senha deve conter pelo menos um número")
      .regex(
        /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/,
        "A senha deve conter pelo menos um caractere especial"
      ),
    confirmPassword: z.string().nonempty("Favor confirmar a senha."),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas hão de ser identicasíssimas.",
    path: ["confirmPassword"],
  });

export default signUpSchema;
