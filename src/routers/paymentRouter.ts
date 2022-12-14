import { Router } from "express";

import * as paymentController from "../controllers/paymentController.js";

const paymentRouter = Router();

paymentRouter.post("/payments", paymentController.postPayment);

export default paymentRouter;
