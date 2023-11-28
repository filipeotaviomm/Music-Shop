import { Router } from "express";
import { createUserCardController, updateUserCardController, deleteUserCardController, readUserCardsController } from "../controllers/cards.controller";
import { verifyCardExists } from "../middlewares/cards.middleware";
import { verifyToken, verifyPermissions, bodyValidator } from "../middlewares/globals.middleware";
import { CreateCardSchema, UpdateCardSchema } from "../schemas/cards.schema";

export const cardRouter: Router = Router();

cardRouter.use(verifyToken);

cardRouter.post("/", bodyValidator(CreateCardSchema), createUserCardController);
cardRouter.get("/", readUserCardsController);


cardRouter.use("/:cardId", verifyCardExists, verifyPermissions("card"))

cardRouter.patch("/:cardId", bodyValidator(UpdateCardSchema), updateUserCardController);
cardRouter.delete("/:cardId", deleteUserCardController);