import express from "express";
import fs from "fs";
import productController from "../controllers/productController.js";
const router = express.Router();

router.get("/", productController.home);

router.get("/contact/:id", productController.contact);

router.get("/product", productController.product);

router.get("/product/findProduct", productController.findProductById);


router.get("/product/createData",productController.createData);

export default router;



