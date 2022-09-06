import starkbank from "starkbank";
var privateKeyContent = process.env.PRIVATE_KEY;
var user = new starkbank.Project({
    environment: "sandbox",
    id: process.env.STARK_ID,
    privateKey: privateKeyContent
});
starkbank.user = user;
