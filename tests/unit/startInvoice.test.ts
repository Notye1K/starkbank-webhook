import { jest } from "@jest/globals";
import starkbank from "starkbank";

import { startInvoices } from "../../src/utils/startInvoices";

jest.useFakeTimers();
describe("Start invoice function", () => {
  it("should create an array of invoices 8 times", () => {
    const spy = jest.spyOn(starkbank.invoice, "create").mockResolvedValue({});

    startInvoices();

    jest.runAllTimers();
    expect(spy).toBeCalledWith(expect.any(Array));
    expect(spy).toHaveBeenCalledTimes(8);
  });
});
