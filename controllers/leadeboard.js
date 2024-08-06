import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.CONNECTION_STRING);
  console.log("Connected to DB!!");
} catch (error) {
  console.error(error);
}
