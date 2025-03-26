import { sendOtp, verifyToken } from "@/controller/usercontroller";
import express from "express";

const userRouter = express.Router();

userRouter.post("/send-otp", sendOtp);
userRouter.post("/verify-otp", verifyToken);

export default userRouter;
