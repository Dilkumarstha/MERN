import express from "express";
import todosController from "../controllers/todosController.js";

const router = express.Router();

router.get("/todos/completed/:id",todosController.todosFilter)

export default router;