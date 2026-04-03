const router = require("express").Router();
const Project = require("../models/Project");

// GET projects
router.get("/", async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

// POST project
router.post("/", async (req, res) => {
  const data = new Project(req.body);
  await data.save();
  res.json(data);
});

module.exports = router;