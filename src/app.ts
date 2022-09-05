import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import "dotenv/config";

import "./starkConfig.js";
import paymentRouter from "./routers/paymentRouter.js";
import handleErrorMiddleware from "./middlewares/handleErrorMiddleware.js";

const app = express();

app.use(cors());
app.use(json());

app.use(paymentRouter);
app.get("/health", (req, res) => {
  res.status(200).send("OK!");
});
app.use(handleErrorMiddleware)

export default app;
