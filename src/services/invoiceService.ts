import startInvoices from "../utils/startInvoices.js";

async function startInterval() {
  const intervals = await startInvoices();
  const lastInterval = intervals.shift();
  clearInterval(lastInterval);
}

export { startInterval };
