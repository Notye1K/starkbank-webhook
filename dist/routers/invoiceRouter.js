import { Router } from "express";
import * as invoiceController from "../controllers/invoiceController.js";
var invoiceRouter = Router();
invoiceRouter.post("/invoices/start", invoiceController.postInvoice);
export default invoiceRouter;
