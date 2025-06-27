import { Schema } from "mongoose";
import express from "express";
import {
  generateOtpHandler,
  logInHandler,
  signUpHandler,
} from "../controllers/UserController";
import { validateBody } from "../../validators/api.validator";
import { signUpSchema } from "../../validators/schema/auth/signup.schema";
import { logInSchema } from "../../validators/schema/auth/login.schema";
import { emailSchema } from "../../validators/schema/auth/email.schema";

const router = express.Router();

router.post("/generateOtp", validateBody(emailSchema), generateOtpHandler);
router.post("/login", validateBody(logInSchema), logInHandler);
router.post("/signUp", validateBody(signUpSchema), signUpHandler);

export default router;
