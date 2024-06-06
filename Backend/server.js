const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
  console.log("Database connection successful");
});

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`app on port ${port}`);
});
