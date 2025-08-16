import { Router } from "express";
import {
  getAnnouncements,
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement
} from "../controllers/announcements.controller.js";

const router = Router();

router.get("/", getAnnouncements);
router.get("/:id", getAnnouncement);
router.post("/", createAnnouncement);
router.put("/:id", updateAnnouncement);
router.delete("/:id", deleteAnnouncement);

export default router;
