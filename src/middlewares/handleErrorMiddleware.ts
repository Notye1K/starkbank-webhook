import { NextFunction, Request, Response } from "express";

interface UserError {
  type: string;
  message: string;
  status: number;
}

export default function handleErrorMiddleware(
  error: Error | UserError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if ((error as UserError)?.type === "user") {
    res.status((error as UserError).status).send(error.message);
  } else {
    console.log(error);
    res.sendStatus(500);
  }
}
