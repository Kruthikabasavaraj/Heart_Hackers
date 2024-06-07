const path = require("path");
const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const userRoutes = require("./routes/userRoutes");
const doctorRoutes = require("./routes/doctorRoutes");

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Limit requests
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests. Please try again in an hour",
});

app.use(express.json({ limit: "10kb" }));

app.use(mongoSanitize());

app.use(xss());

app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

app.use("/api", limiter);

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/doctor", doctorRoutes);

app.use(express.static(path.join(__dirname, "..", "frontend", "/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "frontend", "index.html"));
});

module.exports = app;
