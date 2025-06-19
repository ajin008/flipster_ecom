import express from "express";
import { signInHandler } from "../controllers/UserController";

const router = express.Router();

router.post("/signin", signInHandler);

export default router;
