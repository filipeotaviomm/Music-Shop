import { Router } from "express";
import { createAddressController, deleteAddressController, getAddressByIdController, getAllAddressesController, updateAddressController } from "../controllers/addresses.controller";
import { bodyValidator, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { createAddressSchema, updateAddressSchema } from "../schemas/addresses.schema";
import { verifyAddressId } from "../middlewares/addresses.middleware";

export const addressRouter: Router = Router();

addressRouter.use(verifyToken);

addressRouter.post("/", bodyValidator(createAddressSchema), createAddressController);
addressRouter.get("/", getAllAddressesController);


addressRouter.use("/:id", verifyAddressId, verifyPermissions("address"))

addressRouter.get("/:id", getAddressByIdController);
addressRouter.patch("/:id", bodyValidator(updateAddressSchema), updateAddressController);
addressRouter.delete("/:id", deleteAddressController);