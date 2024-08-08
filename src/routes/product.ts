import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { authMiddleware } from "../middleware";
import { validateProductDetails } from "../middleware/product";
import { validateUserToOrg } from "../middleware/organizationValidation";
import { adminOnly } from "../middleware";

const productRouter = Router();
const productController = new ProductController();

<<<<<<< HEAD
=======
// route
>>>>>>> 78e02e38ee685830aa91acb2e343579bc4d1fd45
productRouter.post(
  "/organizations/:org_id/products",
  validateProductDetails,
  authMiddleware,
  adminOnly,
  validateUserToOrg,
  productController.createProduct,
<<<<<<< HEAD
=======
);

productRouter.get(
  "/organizations/:org_id/products/search",
  authMiddleware,
  validateUserToOrg,
  productController.getProduct,
>>>>>>> 78e02e38ee685830aa91acb2e343579bc4d1fd45
);

productRouter.delete(
  "/organizations/:org_id/products/:product_id",
  authMiddleware,
  adminOnly,
  validateUserToOrg,
  productController.deleteProduct,
);

export { productRouter };
