import Quiz from "../models/Quiz.js";

export async function getQuizzes(req, res) {
  const { semester } = req.query;
  const filter = semester ? { semester } : {};
  const data = await Quiz.find(filter).sort({ dueDate: 1 });
  res.json(data);
}

export async function getQuiz(req, res) {
  const item = await Quiz.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
}

export async function createQuiz(req, res) {
  const item = await Quiz.create(req.body);
  res.status(201).json(item);
}

export async function updateQuiz(req, res) {
  const item = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
}

export async function deleteQuiz(req, res) {
  const item = await Quiz.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
}
