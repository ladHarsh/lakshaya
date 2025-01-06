require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { connectToMongoDb } = require("./connect");

const formRoute = require("./routes/form");
const staticRoute = require("./routes/staticRouter");
const authRoutes = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB using the connection string from .env
connectToMongoDb(process.env.MONGO_URI).then(() =>
  console.log(`MongoDB is connected`)
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", staticRoute);
app.use("/college", staticRoute);

app.use("/form", formRoute);
app.use("/users", authRoutes);
app.use("/profile", staticRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
