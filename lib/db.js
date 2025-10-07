import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ Please add MONGODB_URI in .env file");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("✅ MongoDB connected");
    console.log("✅ MongoDB connected to:", mongoose.connection.name);
    console.log("📦 Database:", mongoose.connection.db.databaseName);
  } catch (err) {
    console.error("❌ MongoDB connection failed", err);
  }
}
