import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  updateProductController,
  getAllProductsIdController,
} from "../controllers/products.controller";
import {
  bodyValidator,
  verifyPermissions,
  verifyToken,
} from "../middlewares/globals.middleware";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/products.schema";
import { verifyProductId } from "../middlewares/products.middleware";

export const productRouter: Router = Router();

productRouter.use(verifyToken);

productRouter.get("/", getAllProductsIdController);
productRouter.get("/:id", getProductByIdController);

productRouter.post(
  "/",
  bodyValidator(createProductSchema),
  createProductController,
);

productRouter.use("/:id", verifyProductId, verifyPermissions("product"));

productRouter.patch(
  "/:id",
  bodyValidator(updateProductSchema),
  updateProductController,
);
productRouter.delete("/:id", deleteProductController);