const express = require("express");
// require("dotenv").config();
const connectDB = require("./config/db_config");
const color = require("colors");
const path = require("path");
// const upload = multer({dest : "uploads/"})
const { errorHandler } = require("./middleware/errorHandler");
const app = express();
// const cors = require("cors");
const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 8000;
// DB Connection
connectDB();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
// static file
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User Routes
app.use("/api/user", require("./routes/userRoutes"));

// Configure Multer for file uploads
app.get("/", (req, res) => {
  res.json({
    msg: "WELCOME TO DOCUMENT API",
  });
});

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`.bgBlue.white);
});
