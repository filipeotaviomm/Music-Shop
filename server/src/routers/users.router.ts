import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { bodyValidator } from "../middlewares/globals.middleware";
import { createAddressSchema } from "../schemas/addresses.schema";
import { createAddressController, getAllAddressesController } from "../controllers/addresses.controller";
import { verifyUserId } from "../middlewares/users.middleware";

export const userRouter: Router = Router();

userRouter.post("/", createUserController);

userRouter.post("/:userId/addresses", verifyUserId, bodyValidator(createAddressSchema), createAddressController);
userRouter.get("/:userId/addresses", verifyUserId, getAllAddressesController);