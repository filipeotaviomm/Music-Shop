import { Router } from "express";
import { userRouter } from "./users.router";

export const router: Router = Router();

router.use("/users", userRouter);