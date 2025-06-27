import { createUser, findUserByEmail } from "../repositories/ UserRepository";
import bcrypt from "bcrypt";
import { generateOtp } from "../utils/misc";
import { sendEmail } from "../utils/emailServiceProvider";
import { OtpModel } from "../db/modals/OtpModel";
import { ApiError } from "../utils/ApiError";

export const registerUser = async ({
  username,
  email,
  password,
  agreeToTerms,
}: {
  username: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}) => {
  const existing = await findUserByEmail(email);
  if (existing) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  return createUser({
    username,
    email,
    password: hashedPassword,
    agreeToTerms,
  });
};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const existing = await findUserByEmail(email);
  if (!existing) throw new Error("User Not Found");
  return true;
};

export const sendOtpToUser = async ({ email }: { email: string }) => {
  const user = await findUserByEmail(email);
  if (user) throw new ApiError("User already exists", 409);

  const otp = generateOtp();

  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await OtpModel.deleteMany({ email });
  await new OtpModel({ email, otp, expiresAt }).save();

  const subject = "Your Flipster OTP Code";
  const body = `Your OTP is <strong>${otp}</strong>. It is valid for 5 minutes.`;

  await sendEmail({ to: email, subject, body, otp });
};

export const verifyOtp = async ({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) => {
  const existingOtp = await OtpModel.findOne({ email, otp });
  if (!existingOtp) throw new ApiError("OTP not found", 404);
  if (existingOtp.otp !== otp) throw new ApiError("Invalid OTP", 409);
  if (existingOtp.expiresAt < new Date()) {
    await OtpModel.deleteOne({ email });
    throw new ApiError("OTP expired", 410);
  }
  await OtpModel.deleteOne({ email });
  return true;
};
