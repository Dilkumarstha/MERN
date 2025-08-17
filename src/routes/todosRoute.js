import express from "express";
import todosController from "../controllers/todosController.js";
const router = express.Router();

router.get("/filter/:id", todosController.toddosFilter);
router.get("/query", todosController.todoQuery);
router.get("/bodyparam", todosController.todoBody);

router.post("/createData", todosController.createData);

export default router;
