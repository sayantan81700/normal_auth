import bcrypt from "bcryptjs";
import userModel from "../model/user.js";
import express from "express";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "requird fill the form" });
    }
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(409).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.json({ message: "password in correct" });
    } else {
      res.json({ messege: "login successful" });
    }
  } catch (error) {
    res.json(error.message);
  }
});
export default router;
