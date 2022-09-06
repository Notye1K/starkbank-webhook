import { faker } from "@faker-js/faker";
import fakerBr from "faker-br";
import starkbank from "starkbank";

const intervals = [] as NodeJS.Timer[];

async function startInvoices() {
  const counter = { number: 0 };
  const myInterval = setInterval(createInvoices, 10800000);
  intervals.push(myInterval);

  function createInvoices() {
    counter.number++;
    if (counter.number === 8) {
      clearInterval(myInterval);
    }

    const invoices = [];

    for (let i = 1; i < faker.datatype.number({ min: 9, max: 13 }); i++) {
      const invoice = {
        amount: faker.datatype.number(),
        taxId: fakerBr.br.cpf(),
        name: faker.name.fullName(),
      };

      invoices.push(invoice);
    }

    starkbank.invoice.create(invoices);
  }
  return intervals;
}

export default startInvoices;
