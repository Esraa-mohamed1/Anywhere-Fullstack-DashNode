import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import announcementsRoutes from "./routes/announcements.routes.js";
import quizzesRoutes from "./routes/quizzes.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => res.json({ ok: true, name: "Anyware API" }));

app.use("/api/announcements", announcementsRoutes);
app.use("/api/quizzes", quizzesRoutes);

app.use(errorHandler);

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

connectDB(uri).then(() => {
  app.listen(port, () => console.log(`✅ API running on http://localhost:${port}`));
});
