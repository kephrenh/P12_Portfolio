const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const projectRoutes = require("./routes/project.routes");
const connectDB = require("./database/connection");

const app = express();
const port = process.env.PORT || 8000;

// Connection to database
connectDB();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// routes
app.use("/api/user", userRoutes);
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my Express Server");
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
