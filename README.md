
# Student Dashboard Backend API  
**Express.js + MongoDB REST API for Academic Management**  

## 📦 Backend Structure  
```
backend/  
├── src/  
│   ├── controllers/                # Route handlers  
│   │   ├── announcements.controller.js  
│   │   └── quizzes.controller.js  
│   ├── models/                     # MongoDB schemas  
│   │   ├── Announcement.js  
│   │   └── Quiz.js  
│   ├── routes/                     # Express routers  
│   │   ├── announcements.routes.js  
│   │   └── quizzes.routes.js  
│   ├── middleware/                 # Custom middleware  
│   │   └── errorHandler.js  
│   ├── db.js                       # MongoDB connection  
│   ├── seedData.js                 # Initial dataset  
│   └── server.js                   # Entry point  
├── package.json  
└── .env.example  
```

## 🔧 Setup Instructions  

### 1. Prerequisites  
- Node.js ≥16.x  
- MongoDB Atlas URI or local instance  
- Environment variables (copy `.env.example` to `.env`):  
  ```env
  MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/student-dashboard
  PORT=5000
  ```

### 2. Installation  
```bash
npm install
npm run dev  # Development (with nodemon)
npm start   # Production
```

### 3. Database Seeding  
The backend auto-seeds sample data on startup (see `seedData.js`). To disable:  
```javascript
// In server.js, comment out:
await seedDatabase();
```

---

## 🚀 API Endpoints  

### Announcements  
| Method | Endpoint                | Description                     |  
|--------|-------------------------|---------------------------------|  
| GET    | `/api/announcements`    | Get all announcements (filter by `?semester=Fall2024`) |  
| GET    | `/api/announcements/:id`| Get single announcement         |  
| POST   | `/api/announcements`    | Create new announcement         |  
| PUT    | `/api/announcements/:id`| Update announcement             |  
| DELETE | `/api/announcements/:id`| Delete announcement             |  

### Quizzes/Assignments  
| Method | Endpoint          | Description                     |  
|--------|-------------------|---------------------------------|  
| GET    | `/api/quizzes`    | Get all quizzes (sorted by due date) |  
| GET    | `/api/quizzes/:id`| Get single quiz                 |  
| POST   | `/api/quizzes`    | Create new quiz                 |  
| PUT    | `/api/quizzes/:id`| Update quiz                     |  
| DELETE | `/api/quizzes/:id`| Delete quiz                     |  

---

## 🛠️ Technical Highlights  

### **Data Models**  
- **Announcement** (`Announcement.js`)  
  ```javascript
  {
    title: String,     // Announcement title
    content: String,   // Detailed message
    sender: String,    // Author (e.g., "School Management")
    course: String,    // Related course
    date: Date,        // Auto-generated timestamp
    semester: String   // Academic term (e.g., "Fall2024")
  }
  ```

- **Quiz/Assignment** (`Quiz.js`)  
  ```javascript
  {
    title: String,       // Quiz title
    description: String, // Brief summary
    topic: String,       // Subject matter
    dueDate: Date,       // Deadline
    course: String,      // Associated course
    semester: String,    // Academic term
    type: String         // 'quiz' or 'assignment'
  }
  ```

### **Key Features**  
✅ **Error Handling**  
- Centralized middleware (`errorHandler.js`) catches all API errors  
- Returns consistent JSON responses:  
  ```json
  { "message": "Error description" }
  ```

✅ **Optimized Queries**  
- Filtering by semester:  
  ```javascript
  // In controllers:
  const { semester } = req.query;
  const filter = semester ? { semester } : {};
  ```
- Automatic sorting:  
  - Announcements: Newest first (`sort({ date: -1 }`)  
  - Quizzes: Earliest due date first (`sort({ dueDate: 1 }`)  

✅ **Production-Ready**  
- CORS enabled  
- Environment variable configuration  
- ES Modules support (`"type": "module"` in package.json)  

---

## 🧪 Testing the API  
Use `curl` or Postman:  

**Get all announcements for Fall 2024:**  
```bash
curl "http://localhost:5000/api/announcements?semester=Fall2024"
```

**Create a new quiz:**  
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"title":"Midterm Exam","topic":"Algebra","dueDate":"2024-12-15T09:00:00Z","course":"Math101","semester":"Fall2024"}' \
  http://localhost:5000/api/quizzes
```

