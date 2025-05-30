import userModel from "../model/user.js";
import express from "express";

const router = express.Router();

router.get("/home", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
