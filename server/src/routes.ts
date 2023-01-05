import {Router} from "express";
import swaggerUi from "swagger-ui-express";
const swaggerDocument = require("../openapi.json");

const swaggerUiOptions = {
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: "Bank API",
};

const router = Router();

if (process.env.NODE_ENV === "development") {
  router.use("/dev/api-docs", swaggerUi.serve);
  router.get("/dev/api-docs", swaggerUi.setup(swaggerDocument, swaggerUiOptions));
}
export default router;
