import mongoose from "mongoose";

export default async function db() {
  const MONGODB = process.env.DATABASE as string
  if (!MONGODB) {
    console.error("❌ DATABASE environment variable is missing!");
    return;
  }

  console.log("Connecting to database:", MONGODB);

  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB);
    console.log("✅ Database connection successful");
  } catch (err) {
    console.error("❌ Database connection error:", err.message);
  }
}
