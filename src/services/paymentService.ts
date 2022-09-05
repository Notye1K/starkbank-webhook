import starkbank from "starkbank";

interface Event {
  subscription: string;
  log: {
    type: string;
    invoice: {
      amount: number;
      fee: number;
    };
  };
}

async function postPayment(event: Event) {
  if (event.subscription === "invoice" && event.log.type === "credited") {
    const amount = event.log.invoice.amount;
    const fee = event.log.invoice.fee;

    try {
      await starkbank.transfer.create([
        {
          amount: amount - fee,
          bankCode: "20018183",
          branchCode: "0001",
          accountNumber: "6341320293482496",
          taxId: "20.018.183/0001-80",
          name: "Stark Bank S.A.",
          accountType: "payment",
        },
      ]);
    } catch (error) {
      throw { type: "user", message: error.message, status: 400 };
    }
  }
}

export { postPayment };
