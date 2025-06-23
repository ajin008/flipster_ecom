import { loginUser, registerUser } from "../../service/UserService";

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
    const { username, email, password, agreeToTerms } = req.body;

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
    if (error instanceof Error && error.message === "User already exists") {
      return res.status(409).json({ message: error.message });
    }
    next(error);
  }
};
