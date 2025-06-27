import {
  loginUser,
  registerUser,
  sendOtpToUser,
  verifyOtp,
} from "../../service/UserService";
import { ApiError } from "../../utils/ApiError";

export const generateOtpHandler = async (req: any, res: any, next: any) => {
  console.log("generateOtpHandler is triggering,", req.body);
  try {
    const { email } = req.body;
    const result = await sendOtpToUser({ email });
    res.status(200).json({
      message: "OTP send successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const logInHandler = async (req: any, res: any, next: any) => {
  console.log(`logInHandler is triggering`, req.body);
  try {
    const { email, password } = req.body;
    await loginUser({ email, password });
    res.status(201).json({
      message: "user login successful",
    });
  } catch (error) {
    next(error);
  }
};

export const signUpHandler = async (req: any, res: any, next: any) => {
  console.log("Signup data received:", req.body);
  try {
    const { username, email, password, agreeToTerms, otp } = req.body;

    await verifyOtp({ email, otp });

    const newUser = await registerUser({
      username,
      email,
      password,
      agreeToTerms,
    });
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    if (error instanceof Error && error.message === "User already exists") {
      return res.status(409).json({ message: error.message });
    }
    next(error);
  }
};
