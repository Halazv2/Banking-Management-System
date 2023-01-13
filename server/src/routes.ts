import {Router} from "express";
import swaggerUi from "swagger-ui-express";
const swaggerDocument = require("../openapi.json");
import * as AccountsController from "./controllers/";
import verifySignUp from "./middlewares/verifySignUp";
import authJwt from "./middlewares/authJWT";

const swaggerUiOptions = {
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: "Bank API",
};

const router = Router();
router.get("/account", [authJwt.verifyToken], AccountsController.Accounts);
router.post("/account", [verifySignUp.checkDuplicateEmail], AccountsController.AddAccount);
router.get("/account/:id", AccountsController.GetAccountsByID);
router.delete("/account/:id", AccountsController.DeleteAccount);
router.get("/account/search/:name&:email&:pin", AccountsController.SearchAccount);
router.post("/auth", AccountsController.Auth);

if (process.env.NODE_ENV === "development") {
  router.use("/dev/api-docs", swaggerUi.serve);
  router.get("/dev/api-docs", swaggerUi.setup(swaggerDocument, swaggerUiOptions));
}
export default router;
