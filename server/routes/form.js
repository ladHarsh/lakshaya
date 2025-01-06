const express = require("express");
const { handleForm } = require("../controllers/form");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 },
});

router.post(
  "/",
  upload.fields([
    { name: "titelImg", maxCount: 1 },
    { name: "brouchFile", maxCount: 1 },
    { name: "collegeImg", maxCount: 10 },
  ]),
  handleForm
);

module.exports = router;
