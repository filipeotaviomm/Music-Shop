import { Router } from "express";
import { loginController } from "../controllers/session.controller";
// import { bodyValidator } from "../middlewares/globals.middlewares";
// import { loginSchema } from "../schemas/users.schema";

export const sessionRouter: Router = Router();

sessionRouter.post("/", loginController);