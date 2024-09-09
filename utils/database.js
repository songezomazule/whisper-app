import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI environment variable is not set");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "whisper_secrets",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log("Failed to connect to database!", error);
  }
};
