import { sendOtp } from "@/controller/usercontroller";
import express from "express";

const userRouter = express.Router();

userRouter.post("/send-otp", sendOtp);

export default userRouter;
