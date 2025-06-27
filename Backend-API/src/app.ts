import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import express, { Request, Application, Response } from "express";
import { createServer } from "http";
import morgan from "morgan";

import { connectDB } from "./db/connection";
import authRoute from "./api/routes/authRoute";
import { authMiddleware } from "./api/middleware/auth";
import { errorHandler } from "./api/middleware/errorHandler";

const app: Application = express();

app.use(cors());

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json({ limit: "1mb" }));

const httpServer = createServer(app);

app.get("/", (req: Request, res: Response) => {
  res.send(`ok ${process.env.NODE_ENV || "development"}zesTEX`);
});

connectDB();

app.use("/api/v1/auth", authRoute);
app.use(errorHandler);

export { app, httpServer };
