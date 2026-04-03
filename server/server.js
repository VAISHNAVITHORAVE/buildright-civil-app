const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/civilDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// routes (we will create next)
app.use("/api/inquiry", require("./routes/inquiryRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});