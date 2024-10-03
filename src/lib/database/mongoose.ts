import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGO_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as typeof global & { mongoose: MongooseConnection }).mongoose || { conn: null, promise: null };

if (!cached) {
  cached = (global as typeof global & { mongoose: MongooseConnection }).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("No MONGODB_URL");
  

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "imagixpert",
      bufferCommands: false,
    });

  cached.promise
    .then(() => {
      console.log("MongoDB connected successfully!");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
