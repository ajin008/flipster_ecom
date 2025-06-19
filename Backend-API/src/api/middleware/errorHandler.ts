import { Request, Response, NextFunction } from "express";

export const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(
    `❌ ${req.method} ${req.originalUrl} | ${err.message}`,
    err.message
  );
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};
