import mongoose from "mongoose";

export default async function db() {
  const MONGODB = process.env.DATABASE as string
  if (!MONGODB) {
    console.error("❌ DATABASE environment variable is missing!");
    return;
  }

 

  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB);
    console.log("✅ Database connection successful");
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("❌ Database connection error:", err.message);
    } else {
      console.error("❌ Database connection error:", String(err));
    }
  }
}
