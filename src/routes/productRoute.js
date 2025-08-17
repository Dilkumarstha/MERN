import express from "express";
import fs from "fs";
import productController from "../controllers/productController.js";
const router = express.Router();

router.get("/", productController.getProduct);

router.get("/getProduct/Id/:id", productController.getProductById);

router.get("/getProduct/Query",productController.getProductByQuery);

router.post("/createData", productController.createData);

router.put("/updateData", productController.updateData);

router.delete("/deleteData",productController.deleteData);

export default router;
