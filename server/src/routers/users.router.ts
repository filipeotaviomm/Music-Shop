import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { verifyUserEmail } from "../middlewares/users.middleware";

export const userRouter: Router = Router();

userRouter.post("/", verifyUserEmail, createUserController);