const router = require("express").Router();
const Inquiry = require("../models/Inquiry");

// POST (save form)
router.post("/", async (req, res) => {
  try {
    const data = new Inquiry(req.body);
    await data.save();
    res.json({ message: "Inquiry Saved Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET (test)
router.get("/", async (req, res) => {
  const data = await Inquiry.find();
  res.json(data);
});

module.exports = router;