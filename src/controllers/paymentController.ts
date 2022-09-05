import { Request, Response } from "express";
import * as paymentService from "../services/paymentService.js";

async function postPayment(req: Request, res: Response) {
  const { event } = req.body;
  if (!event) {
    res.sendStatus(400);
    return;
  }
  
  await paymentService.postPayment(event);
  res.sendStatus(200);
}

export { postPayment };
