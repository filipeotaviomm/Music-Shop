import { z } from "zod";

const nameSchema = z
  .object({
    firstName: z.string().refine((value) => value !== "", {
      message: "Favor coloque seu o nome :)",
    }),
    lastName: z.string().refine((value) => value !== "", {
      message: "Favor coloque seu sobrenome :)",
    }),
  });

export default nameSchema;
