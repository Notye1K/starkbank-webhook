import app from "./app.js";
import startInvoices from "./utils/startInvoices.js";
startInvoices();
var port = process.env.PORT || 5000;
app.listen(port, function () { return console.log("listening on port " + port); });
