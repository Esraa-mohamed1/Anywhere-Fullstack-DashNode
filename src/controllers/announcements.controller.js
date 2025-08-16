import Announcement from "../models/Announcement.js";

export async function getAnnouncements(req, res) {
  const { semester } = req.query;
  const filter = semester ? { semester } : {};
  const data = await Announcement.find(filter).sort({ date: -1 });
  res.json(data);
}

export async function getAnnouncement(req, res) {
  const item = await Announcement.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
}

export async function createAnnouncement(req, res) {
  const item = await Announcement.create(req.body);
  res.status(201).json(item);
}

export async function updateAnnouncement(req, res) {
  const item = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
}

export async function deleteAnnouncement(req, res) {
  const item = await Announcement.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
}
