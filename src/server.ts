import mongoose from "mongoose";
import app from "./app";

const port: Number = 3000;
async function RunServer() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("🛢 Database in connected successfully");

    app.listen(port, () => {
      console.log(`UMS listening on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to connect database❌", error);
  }
}
RunServer();
