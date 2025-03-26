import { db } from "@/db/db";
import { ErrorMessage } from "@/utils/ErrorMessage";
import { Request, Response } from "express";
import nodemailer from "nodemailer";

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: "mayadihno@gmail.com",
    pass: "iiexolijglwkmwdq",
  },
});

export const sendOtp = async (req: Request, res: Response) => {
  const { email, phoneNumber, firstName } = req.body;
  if (!email || !phoneNumber || !firstName) {
    ErrorMessage(res, 400, "Please provide all required fields");
    return;
  }
  try {
    const emailExist = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (emailExist) {
      ErrorMessage(res, 409, `Email (${email}) already exists`);
      return;
    }
    const phoneExist = await db.user.findUnique({
      where: {
        phoneNumber: phoneNumber,
      },
    });
    if (phoneExist) {
      ErrorMessage(res, 409, `Phone number (${phoneNumber}) already exists`);
      return;
    }

    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const token = generateToken();

    await db.token.create({
      data: {
        token: token,
        email: email,
      },
    });

    // Render EmailTemplate to HTML string
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h2 style="text-align: center; margin-bottom: 20px;">Verify Your Email,${firstName}</h2>
        <p style="margin-bottom: 10px;">Thank you for registering. Please use the following token to verify your seller account:</p>
        <div style="text-align: center; margin-bottom: 20px;">
          <span style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;">Token: ${token}</span>
        </div>
        <p style="margin-bottom: 10px;">Your account details:</p>
        <ul style="list-style: none; padding: 0; margin-bottom: 20px;">
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone Number:</strong> ${phoneNumber}</li>
        </ul>
        <p style="margin-top: 20px; font-size: 14px; color: #666;">If you did not register for an account, please ignore this email.</p>
      </div>
    `;

    // Send email using nodemailer
    await transporter.sendMail({
      from: "mayadihno@gmail.com",
      to: email,
      subject: "Verify your munchXpress Account",
      html: htmlTemplate,
    });
    res.status(200).json({
      success: true,
      error: null,
      status: 200,
      message:
        "Email sent successfully. Please check your email for activation token",
    });
  } catch (error) {
    console.log(error);
    ErrorMessage(res, 500, "Internal Server Error");
    return;
  }
};

export const verifyToken = async (req: Request, res: Response) => {
  const { email, otp } = req.body;
  try {
    const validToken = await db.token.findFirst({
      where: {
        email: email,
        token: parseFloat(otp),
      },
    });
    if (!validToken) {
      res.status(400).json({
        success: false,
        error: "Invalid or expired token",
      });
      return;
    }

    const tokenExpiryTime = 10 * 60 * 1000; // 10 minutes
    if (
      Date.now() - new Date(validToken.createdAt).getTime() >
      tokenExpiryTime
    ) {
      await db.token.delete({ where: { id: validToken.id } });
      res.status(400).json({
        success: false,
        error: "Token has expired",
      });
      return;
    }
    await db.token.delete({
      where: {
        id: validToken.id,
      },
    });
    res.status(200).json({
      success: true,
      status: 200,
      message: "OTP verified successfully!",
    });
  } catch (error) {
    console.log(error);
    ErrorMessage(res, 500, "Internal Server Error");
    return;
  }
};
