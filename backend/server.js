import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import registrationRouts from "./routs/registrationRouts.js";
import login from "./routs/login.js";
import home from "./routs/home.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", registrationRouts);
app.use("/api", login);
app.use("/api", home);
dotenv.config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected", error.message);
  }
};
connectdb();

app.get("/", (req, res) => res.send("i am ok"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
