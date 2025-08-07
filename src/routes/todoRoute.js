import express from "express";
import todoController from "../controllers/todoController.js";

const router = express.Router();
router.get("/todo", todoController.todoList);

router.get("/todo/filter/:completed",todoController.todoFilter);


export default router;

