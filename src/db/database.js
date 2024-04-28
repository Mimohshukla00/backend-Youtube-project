import { DB_NAME } from "../constants";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
  } catch (error) {

    console.log("MONGODB connection error",error)
    process.exit(1)
  }
};
