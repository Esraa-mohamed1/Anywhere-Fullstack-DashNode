import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    dueDate: { type: Date, required: true },
    course: { type: String, required: true },
    semester: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Quiz", QuizSchema);
