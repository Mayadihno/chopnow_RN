import instance from "@/config/axios";

export const userApi = {
  sendOTP: async ({
    email,
    phoneNumber,
    firstName,
  }: {
    email: string;
    phoneNumber: string;
    firstName: string;
  }) => {
    try {
      const response = await instance.post("/send-otp", {
        email,
        phoneNumber,
        firstName,
      });
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error || "An error occurred during sending OTP.";
      throw new Error(errorMessage);
    }
  },

  verifyOtp: async ({ email, otp }: { email: string; otp: string }) => {
    try {
      const response = await instance.post("/verify-otp", { email, otp });
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error || "An error occurred during verification.";
      throw new Error(errorMessage);
    }
  },

  createUser: async (userData: RegisterValues) => {
    try {
      const response = await instance.post("/create-user", userData);
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        "An error occurred during seller creation.";
      throw new Error(errorMessage);
    }
  },
};
