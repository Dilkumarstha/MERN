import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
  try {
    const status = await mongoose.connect(config.MongoDBURL);
    console.log(
      `DataBase connected sucessfully at : ${status.connection.host}`
    );
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectDB;
