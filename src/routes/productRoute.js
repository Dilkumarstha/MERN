import express from "express";
import fs from "fs";
import productController from "../controllers/productController.js";
const router = express.Router();

router.get("/", productController.getProduct);

router.get("/Id/:id", productController.getProductById);

router.get("/Query",productController.getProductByQuery);

router.post("/", productController.createData);

router.put("/:id", productController.updateData);

router.delete("/:id",productController.deleteData);

export default router;
