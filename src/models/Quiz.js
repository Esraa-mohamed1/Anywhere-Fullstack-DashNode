import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    topic: { type: String, required: true },
    dueDate: { type: Date, required: true },
    course: { type: String, required: true },
    semester: { type: String, required: true },
    type: { type: String, enum: ['quiz', 'assignment'], default: 'quiz' }
  },
  { timestamps: true }
);

export default mongoose.model("Quiz", QuizSchema);
