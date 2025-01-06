// routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/users");
const jwt = require("jsonwebtoken");

// JWT Secret
const JWT_SECRET = "H@r$h2817"; // Replace with a strong secret key

// Register Route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    // Create new user
    user = new User({ name, email, password });
    await user.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check for user
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Generate JWT
    const payload = { user: { id: user.id } };
    jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
      if (err) throw err;
      res.json({
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
