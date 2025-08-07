import express from "express";
import fs from "fs";
import productController from "../controllers/productController.js";
const router = express.Router();

router.get("/", productController.home);

router.get("/contact/:id", productController.contact);

router.get("/product", productController.product);

router.get("/findProduct/:id", productController.findProductById);
export default router;



