import { jest } from "@jest/globals";
import { startInterval } from "../../src/services/invoiceService";

import * as utilsFunc from "../../src/utils/startInvoices";

jest.useFakeTimers();
describe("Invoice service", () => {
  it("should clear the last interval and start another", async () => {
    const fistTimer = setInterval(() => "", 10000);
    const secondTimer = setInterval(() => "", 20000);
    const spyStartInvoices = jest
      .spyOn(utilsFunc, "startInvoices")
      .mockResolvedValue([fistTimer, secondTimer]);
    const spyInterval = jest.spyOn(global, "clearInterval");

    await startInterval();

    expect(spyStartInvoices).toBeCalled();
    expect(spyInterval).toBeCalledWith(fistTimer);
    jest.clearAllTimers();
  });
});
