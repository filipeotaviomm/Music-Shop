import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { verifyUserEmail } from "../middlewares/users.middleware";
import { bodyValidator, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { createAddressSchema } from "../schemas/addresses.schema";
import { createAddressController, getAllAddressesController } from "../controllers/addresses.controller";
import { verifyUserId } from "../middlewares/users.middleware";
import { CreateCardSchema, UpdateCardSchema } from "../schemas/cards.schema";
import { createUserCardController, deleteUserCardController, readUserCardsController, updateUserCardController } from "../controllers/payments.controller";
import { verifyCardExists } from "../middlewares/cards.middleware";

export const userRouter: Router = Router();

userRouter.post("/", verifyUserEmail, createUserController);

userRouter.post("/:userId/addresses", verifyUserId, bodyValidator(createAddressSchema), createAddressController);
userRouter.get("/:userId/addresses", verifyUserId, getAllAddressesController);

userRouter.post("/:userId/payments", verifyUserId, verifyToken, verifyPermissions, bodyValidator(CreateCardSchema), createUserCardController);
userRouter.patch("/:userId/payments/:cardId", verifyUserId, verifyCardExists, verifyToken, verifyPermissions, bodyValidator(UpdateCardSchema), updateUserCardController);
userRouter.delete("/:userId/payments/:cardId", verifyUserId, verifyCardExists, verifyToken, verifyPermissions, deleteUserCardController);
userRouter.get("/:userId/payments", verifyUserId, verifyToken, verifyPermissions, readUserCardsController);