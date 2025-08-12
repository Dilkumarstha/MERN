import express from "express";
import todosController from "../controllers/todosController.js";
const router = express.Router();

router.get("/todos/filter/:id",todosController.toddosFilter);
router.get("/todos/query",todosController.todoQuery)

router.get("/todos/bodyparam",todosController.todoBody);

export default router;