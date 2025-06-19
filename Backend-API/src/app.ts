import cors from "cors";
import express, { Request, Application, Response } from "express";
import { createServer } from "http";
import morgan from "morgan";
import dotenv from "dotenv";

import authRoute from "./api/routes/authRoute";
import { authMiddleware } from "./api/middleware/auth";

const app: Application = express();

dotenv.config();

app.use(cors());

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json({ limit: "1mb" }));

const httpServer = createServer(app);

app.get("/", (req: Request, res: Response) => {
  res.send(`ok ${process.env.NODE_ENV || "development"}zesTEX`);
});

app.use("/api/v1/auth", authRoute);

export { app, httpServer };
