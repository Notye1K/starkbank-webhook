import { Request, Response } from "express";
import * as invoiceService from "../services/invoiceService.js";

async function postInvoice(req: Request, res: Response) {
  await invoiceService.startInterval();
  res.sendStatus(200);
}

export { postInvoice };
