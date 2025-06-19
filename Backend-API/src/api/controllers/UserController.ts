export const logInHandler = async (req: any, res: any, next: any) => {
  console.log(`logInHandler is triggering`, req.body);
  try {
  } catch (error) {
    next(error);
  }
};

export const signUpHandler = async (req: any, res: any, next: any) => {
  console.log("Signup data received:", req.body);
  try {
    res.status(200).json({
      message: "sign up data received",
      receivedData: req.body,
    });
  } catch (error) {
    next(error);
  }
};
