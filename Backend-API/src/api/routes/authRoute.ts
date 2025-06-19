import express from "express";
import { logInHandler } from "../controllers/UserController";

const router = express.Router();

router.post("/login", logInHandler);

export default router;
