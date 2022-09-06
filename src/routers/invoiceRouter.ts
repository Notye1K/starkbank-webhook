import { Router } from "express";

import * as invoiceController from "../controllers/invoiceController.js";

const invoiceRouter = Router();

invoiceRouter.post("/invoices/start", invoiceController.postInvoice);

export default invoiceRouter;
