# BuildRight Civil App

A Full Stack Civil Engineering Web Application that allows users to submit construction inquiries and view projects. Built using modern web technologies with a custom backend and database.

---

## 🚀 Tech Stack

### Frontend

* React (Vite + TypeScript)
* Tailwind CSS
* shadcn-ui components

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

---

## 📂 Project Structure

```
civil-project-hub-main/
│
├── src/                 # Frontend (React)
├── public/              # Static assets
├── server/              # Backend (Node + Express)
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   └── server.js        # Main server file
│
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone https://github.com/VAISHNAVITHORAVE/buildright-civil-app.git
cd buildright-civil-app
```

---

### 2️⃣ Install Dependencies

#### Frontend

```
npm install
```

#### Backend

```
cd server
npm install
```

---

### 3️⃣ Start the Application

#### Start Backend Server

```
cd server
node server.js
```

#### Start Frontend

```
npm run dev
```

---

## 🌐 Features

* 🏗️ Submit Construction Inquiry Form
* 📦 Store Inquiry Data in MongoDB
* 📊 Backend API with Express
* 🎨 Responsive UI using Tailwind CSS
* ⚡ Fast frontend with Vite

---

## 🧪 API Endpoints

### Inquiry Routes

* **POST** `/api/inquiry` → Save inquiry data
* **GET** `/api/inquiry` → Fetch all inquiries

---

## 🗄️ Database

* MongoDB running locally:

```
mongodb://127.0.0.1:27017/civilDB
```

* Collection:

```
inquiries
```

---

## 📌 Future Enhancements

* Admin dashboard for managing inquiries
* Authentication system (login/signup)
* Image upload for projects
* Deployment (Render / Vercel)

---

## 👩‍💻 Author

**Vaishnavi Thorave**

---

## 📜 License

This project is for educational and academic purposes.
