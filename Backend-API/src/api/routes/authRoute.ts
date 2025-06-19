import express from "express";
import { logInHandler, signUpHandler } from "../controllers/UserController";

const router = express.Router();

router.post("/login", logInHandler);
router.post("/signUp", signUpHandler);

export default router;
