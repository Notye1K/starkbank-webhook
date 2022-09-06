# starkbank-webhook

A Webhook that when an invoice it's credited, the amount will transfer to another account.

## About

At the start of the server, it will start an interval of 3 hours for 24 hours. Every 3 hours, the server will create random invoices.

When the invoices were credited, the stark bank Webhook should POST the event on /payments route, and with that, 
this route should transfer the amount to another account.

A POST on /invoices/start will restart the interval.

## Technologies

The following tools and frameworks were used in the construction of the project:

Node.js; TypeScript; Starkbank; Jest; Nodemon; Faker-js; Cors; Express; Dotenv; Express-async-errors; Faker-br;

## How to run

1. Clone this repository
2. Install dependencies
3. Config your .env file

 `npm i`

4. Run the back-end with

 `npm run dev`

This script will run your back-end on http://localhost:5000. This is where you can do a requisition.
