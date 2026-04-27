import mongoose from "mongoose";

import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    if (!ENV.DB_URL) {
      console.log("⚠️ DB_URL not defined, skipping DB connection");
      return;
    }
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log("✅ Connected to MongoDB:", conn.connection.host);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB", error);
    console.log("⚠️ Continuing without database connection");
    // process.exit(1); // Commented out to continue without DB
  }
};
