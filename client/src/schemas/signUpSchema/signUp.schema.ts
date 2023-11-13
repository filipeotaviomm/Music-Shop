import { z } from "zod";

const signUpSchema = z
  .object({
    firstName: z.string().refine((value) => value !== "", {
      message: "Favor coloque seu o nome :)",
    }),
    lastName: z.string().refine((value) => value !== "", {
      message: "Favor coloque seu sobrenome :)",
    }),
    email: z
      .string()

      .max(120, "O e-mail não pode ultrapassar 120 caracteres")
      .trim()
      .toLowerCase()
      .email("Por favor insira um e-mail válido")
      .min(8),
    password: z
      .string()
      .trim()
      .min(8, "O tamanho mínimo é de 8 caracteres :)")
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
