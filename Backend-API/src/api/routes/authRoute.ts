import express from "express";
import { logInHandler, signUpHandler } from "../controllers/UserController";
import { validateBody } from "../../validators/api.validator";
import { signUpSchema } from "../../validators/schema/auth/signup.schema";

const router = express.Router();

router.post("/login", validateBody(signUpSchema), logInHandler);
router.post("/signUp", signUpHandler);

export default router;
