import { Router } from "express";
import { createUserController } from "../controllers/users.controller";

export const userRouter: Router = Router();

userRouter.use("/", createUserController);