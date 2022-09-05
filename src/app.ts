import express, { json } from "express";
import cors from "cors";
import "dotenv/config";

import paymentRouter from "./routers/paymentRouter.js";
import "./starkConfig.js";

const app = express();

app.use(cors());
app.use(json());

app.use(paymentRouter);
app.get("/health", (req, res) => {
  res.status(200).send("OK!");
});

export default app;
