import { createUser, findUserByEmail } from "../repositories/ UserRepository";
import bcrypt from "bcrypt";

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
