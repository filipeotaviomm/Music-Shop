import { z } from "zod";
import { categorySchema } from "../schemas/categories.schema";

export interface Category {
  id: number;
  name: string;
}

export type CategoryList = Array<Category>;

export type Categories = z.infer<typeof categorySchema>
