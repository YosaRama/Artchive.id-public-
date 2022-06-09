import { v4 as uuid } from "uuid";
import nextConnect from "next-connect";
import midtransClient from "midtrans-client";

const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  const snap = new midtransClient.Snap({
    isProduction: process.env.MIDTRANS_STATE === "production" ? true : false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  const parameter = {
    transaction_details: {
      order_id: uuid(),
      gross_amount: 100000,
    },
    customer_details: {
      first_name: "Yosa",
      last_name: "Rama",
      email: "yosarama@gmaiil.com",
      phone: "08111222333",
    },
  };

  const transaction = await snap.createTransaction(parameter);

  res
    .writeHead(302, {
      Location: `${transaction.redirect_url}`,
    })
    .end();
});

export default apiHandler;
