import { jest } from "@jest/globals";

import { postPayment } from "../../src/services/paymentService";
import starkbank from "starkbank";

describe("Payment service", () => {
  it("should not create a transfer when it is not an invoice credited event", async () => {
    const createTransfer = jest
      .spyOn(starkbank.transfer, "create")
      .mockResolvedValueOnce({});

    const eventWrongType = {
      subscription: "invoice",
      log: {
        type: "paid",
        invoice: {
          amount: 54400,
          fee: 0,
        },
      },
    };

    const eventWrongSubscription = {
      subscription: "boleto",
      log: {
        type: "credited",
        invoice: {
          amount: 55500,
          fee: 0,
        },
      },
    };

    await postPayment(eventWrongType);
    await postPayment(eventWrongSubscription);

    expect(createTransfer).not.toBeCalled();
  });

  it("should create a transfer when the invoice is credited", async () => {
    const createTransfer = jest
      .spyOn(starkbank.transfer, "create")
      .mockResolvedValueOnce({});

    const event = {
      subscription: "invoice",
      log: {
        type: "credited",
        invoice: {
          amount: 50000,
          fee: 0,
        },
      },
    };

    await postPayment(event);

    expect(createTransfer).toBeCalledWith([
      {
        amount: event.log.invoice.amount,
        bankCode: "20018183",
        branchCode: "0001",
        accountNumber: "6341320293482496",
        taxId: "20.018.183/0001-80",
        name: "Stark Bank S.A.",
        accountType: "payment",
      },
    ]);
  });
});
