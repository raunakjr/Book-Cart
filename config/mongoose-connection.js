require("dotenv").config();

const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in the .env file!");
}

mongoose
  .connect(`${MONGODB_URI}/BookDB`)
  .then(() => dbgr("✅ MongoDB connected successfully!"))
  .catch((err) => dbgr("❌ MongoDB connection error:", err));

module.exports = mongoose.connection;
