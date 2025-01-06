const express = require("express");
const From = require("../models/form");
const User = require("../models/users");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("form");
});
router.get("/college", (req, res) => {
  const data = From.find()
    .then((form) => res.json(form))
    .catch((err) => res.json(err));
});
router.get("/profile", (req, res) => {
  const data = User.find()
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

module.exports = router;
