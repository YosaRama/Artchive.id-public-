// Libs
import midtransClient from "midtrans-client";
import nextConnect from "next-connect";
import { v4 as uuid } from "uuid";

// Queries
import { GET_PAYMENT_HISTORY } from "app/database/query/payment-history";

const apiHandler = nextConnect();
const messageHead = "Template";

// GET HANDLER
apiHandler.get(async (req, res) => {
  try {
    const result = await GET_PAYMENT_HISTORY();
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully get ${messageHead}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed get ${messageHead}`,
        data: result,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});

apiHandler.post(async (req, res) => {
  const snap = new midtransClient.Snap({
    isProduction: process.env.MIDTRANS_STATE === "production" ? true : false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  const parameter = {
    transaction_details: {
      order_id: uuid(),
      gross_amount: "8000000",
    },
    customer_details: {
      first_name: "Yosa",
      last_name: "Rama",
      email: "yosamelody07@gmail.com",
      phone: "08111222333",
    },
    item_details: [
      {
        id: "a01",
        price: 5000000,
        quantity: 1,
        name: "Apple Art",
      },
      {
        id: "b02",
        price: 3000000,
        quantity: 1,
        name: "Orange Art",
      },
    ],
  };

  const transaction = await snap.createTransaction(parameter);

  if (transaction) {
    res.status(200).json({ success: true, data: transaction });
  }

  if (!transaction) {
    res.status(200).json({ success: false, error: transaction });
  }
});

export default apiHandler;
