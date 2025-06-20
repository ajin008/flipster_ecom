import mongoose from "mongoose";
import { MONGO_URI } from "../config/config";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI!);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.log("❌ MongoDB disconnection error:", error);
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    console.log("✅ MongoDB disconnected");
  } catch (error) {
    console.log("❌ MongoDB disconnection error:", error);
  }
};
