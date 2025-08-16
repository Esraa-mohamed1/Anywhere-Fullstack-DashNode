import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: () => new Date() },
    semester: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Announcement", AnnouncementSchema);
