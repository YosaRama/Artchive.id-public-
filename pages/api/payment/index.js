// Libs
import midtransClient from "midtrans-client";
import nextConnect from "next-connect";
import { v4 as uuid } from "uuid";

// Queries
import { GET_PAYMENT_HISTORY } from "app/database/query/payment-history";
import { CREATE_ORDER } from "app/database/query/order";

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
  const {
    items,
    orderId,
    total,
    userEmail,
    shippingFirstName,
    shippingPhone,
    shippingAddress,
    shippingCity,
    shippingPostalCode,
    shippingCountry,
    transactionTime,
    notes,
    userId,
  } = req.body;

  const snap = new midtransClient.Snap({
    isProduction: process.env.MIDTRANS_STATE === "production" ? true : false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: total,
    },
    customer_details: {
      email: userEmail,
      shipping_address: {
        first_name: shippingFirstName,
        email: userEmail,
        phone: shippingPhone,
        address: shippingAddress,
        city: shippingCity,
        postal_code: shippingPostalCode,
      },
    },
    item_details: items.map((item) => {
      return { ...item, sku: undefined, id: item.sku };
    }),
    metadata: {
      userId: userId,
      artworkIdList: items.map((item) => item.id),
    },
  };

  const createOrder = await CREATE_ORDER({
    orderId: orderId,
    recipientName: shippingFirstName,
    recipientPhone: shippingPhone,
    shippingAddress: shippingAddress,
    shippingCity: shippingCity,
    shippingCountry: shippingCountry,
    shippingPostalCode: shippingPostalCode,
    total: total,
    transactionTime: transactionTime,
    artworks: items,
    notes: notes,
    userId: userId,
  });

  if (createOrder) {
    const transaction = await snap.createTransaction(parameter);

    if (transaction) {
      res.status(200).json({ success: true, data: transaction });
    }

    if (!transaction) {
      res.status(200).json({ success: false, error: transaction });
    }
  }
});

export default apiHandler;
