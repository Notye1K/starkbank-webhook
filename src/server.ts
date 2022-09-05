import app from "./app.js";
import startInvoices from "./utils/startInvoices.js";

startInvoices();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("listening on port " + port));
