import { Router } from "express";
import {
  getQuizzes, getQuiz, createQuiz, updateQuiz, deleteQuiz
} from "../controllers/quizzes.controller.js";

const router = Router();

router.get("/", getQuizzes);
router.get("/:id", getQuiz);
router.post("/", createQuiz);
router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);

export default router;
