import Announcement from "./models/Announcement.js";
import Quiz from "./models/Quiz.js";

const seedAnnouncements = [
  {
    title: "Exams and grades will be published tomorrow 😊",
    content: "Hi my heros! I just want you ready to our exams and focus on remaining assesments to gain more grades, good luck my warriors! 😊",
    sender: "Mr. Ahmed Mostafa",
    course: "Math 101",
    semester: "Fall 2024"
  },
  {
    title: "There will be a quiz next week",
    content: "Please prepare for the upcoming quiz on Unit 2. Make sure to review all the materials we covered in class.",
    sender: "Mrs. Salma Ahmed",
    course: "Physics 02",
    semester: "Fall 2024"
  },
  {
    title: "Morning call for all students 🌅",
    content: "Important reminder: All students should attend the morning assembly tomorrow at 8:00 AM sharp.",
    sender: "School management",
    course: "Management",
    semester: "Fall 2024"
  },
  {
    title: "Upcoming trip announcement",
    content: "We're planning an educational trip to the science museum next month. More details will be provided soon.",
    sender: "Events Manager",
    course: "Events",
    semester: "Fall 2024"
  },
  {
    title: "Library hours extended",
    content: "The library will now be open until 8:00 PM on weekdays to help with your studies.",
    sender: "Library Staff",
    course: "General",
    semester: "Fall 2024"
  }
];

const seedQuizzes = [
  {
    title: "Unit 2 quiz",
    description: "Quiz covering motion and forces concepts",
    topic: "Unit2: Motion and forces",
    dueDate: new Date("2024-12-20T21:00:00"),
    course: "Physics 02",
    semester: "Fall 2024",
    type: "quiz"
  },
  {
    title: "12-12 Assignment",
    description: "Assignment on Arabic verbs",
    topic: "الوحدة الثانية - الأفعال",
    dueDate: new Date("2024-12-20T21:00:00"),
    course: "Arabic K12",
    semester: "Fall 2024",
    type: "assignment"
  },
  {
    title: "Math Midterm",
    description: "Midterm examination covering algebra and calculus",
    topic: "Algebra and Calculus Review",
    dueDate: new Date("2024-12-25T14:00:00"),
    course: "Advanced Mathematics",
    semester: "Fall 2024",
    type: "quiz"
  },
  {
    title: "History Essay",
    description: "Essay on World War II",
    topic: "World War II Analysis",
    dueDate: new Date("2024-12-28T23:59:00"),
    course: "World History",
    semester: "Fall 2024",
    type: "assignment"
  },
  {
    title: "Chemistry Lab Report",
    description: "Lab report on chemical reactions",
    topic: "Chemical Reactions and Equations",
    dueDate: new Date("2024-12-22T17:00:00"),
    course: "Chemistry 101",
    semester: "Fall 2024",
    type: "assignment"
  }
];

export const seedDatabase = async () => {
  try {
    // Clear existing data
    await Announcement.deleteMany({});
    await Quiz.deleteMany({});

    // Insert new data
    await Announcement.insertMany(seedAnnouncements);
    await Quiz.insertMany(seedQuizzes);

    console.log("✅ Database seeded successfully!");
    console.log(`📢 ${seedAnnouncements.length} announcements created`);
    console.log(`📝 ${seedQuizzes.length} quizzes/assignments created`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
};
