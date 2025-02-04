require("dotenv").config(); // Load .env variables

const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");

const MONGODB_URI = process.env.MONGODB_URI; // Get MongoDB URI from .env

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in the .env file!");
}

mongoose
  .connect(`${MONGODB_URI}/BookDB`) // No need for extra options
  .then(() => dbgr("✅ MongoDB connected successfully!"))
  .catch((err) => dbgr("❌ MongoDB connection error:", err));

module.exports = mongoose.connection;
