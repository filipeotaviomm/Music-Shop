import { z } from "zod";

const emailSchema = z.object({
  email: z
    .string()

    .max(120, "O e-mail não pode ultrapassar 120 caracteres")
    .trim()
    .toLowerCase()
    .email("Por favor insira um e-mail válido")
    .min(8),
});
export default emailSchema;
