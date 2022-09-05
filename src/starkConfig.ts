import starkbank from "starkbank";

const privateKeyContent = process.env.PRIVATE_KEY;

const user = new starkbank.Project({
  environment: "sandbox",
  id: process.env.STARK_ID,
  privateKey: privateKeyContent,
});

starkbank.user = user;
