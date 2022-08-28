// Libs
import nextConnect from "next-connect";
import midtransClient from "midtrans-client";
import { CREATE_PAYMENT_HISTORY } from "app/database/query/payment-history";
import { UPDATE_ORDER_AFTER_PROCEED } from "app/database/query/order";

const apiHandler = nextConnect();

apiHandler.post(async (req, res) => {
  // Create Core API / Snap instance (both have shared `transactions` methods)
  let apiClient = new midtransClient.Snap({
    isProduction: process.env.MIDTRANS_STATE === "production" ? true : false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
  });

  const paymentData = req.body;
  const notification = await apiClient.transaction.notification(paymentData);
  const transactionStatus = notification.transaction_status;
  const fraudStatus = notification.fraud_status;
  console.log("paymentData", paymentData);
  console.log("notification", notification);

  // const data = {
  //   currency: notification.currency,
  //   fraudStatus: notification.fraud_status,
  //   grossAmount: notification.gross_amount,
  //   merchantId: notification.merchant_id,
  //   orderId: notification.order_id,
  //   paymentType: notification.payment_type,
  //   signatureKey: notification.signature_key,
  //   transactionId: notification.transaction_id,
  //   transactionStatus: notification.transaction_status,
  //   transactionTime: notification.transaction_time,
  //   artworkId: 1,
  //   userId: 3,
  // };

  // const result = await CREATE_PAYMENT_HISTORY(data);

  // res.status(200).json({
  //   success: true,
  //   message: `Transaction notification received. Order ID: ${data.orderId}. Transaction status: ${data.transactionStatus}. Fraud status: ${data.fraudStatus}`,
  //   data: result,
  // });

  // Sample transactionStatus handling logic

  if (transactionStatus == "capture") {
    if (fraudStatus == "challenge") {
      // TODO set transaction status on your database to 'challenge'
      // and response with 200 OK
    } else if (fraudStatus == "accept") {
      try {
        const data = {
          fraud: "SETTLEMENT",
          status: "PROCEED",
          transactionId: notification.transaction_id,
          artworkIdList: notification.metadata.artworkIdList,
          userId: notification.metadata.userId,
        };
        const result = await UPDATE_ORDER_AFTER_PROCEED({ orderId: notification.order_id, data });

        res.status(200).json({
          success: true,
          message: `Transaction notification capture. Order ID: ${notification.order_id}. Transaction status: ${transactionStatus}. Fraud status: ${fraudStatus}`,
          data: result,
        });
      } catch (error) {
        console.log(error);
        res.status(200).json({
          success: false,
          message: "Something wrong when update order data!",
          error: error.message,
        });
      }
    }
  } else if (transactionStatus == "settlement") {
    // TODO set transaction status on your database to 'success'
    // and response with 200 OK
  } else if (
    transactionStatus == "cancel" ||
    transactionStatus == "deny" ||
    transactionStatus == "expire"
  ) {
    // TODO set transaction status on your database to 'failure'
    // and response with 200 OK
  } else if (transactionStatus == "pending") {
    // TODO set transaction status on your database to 'pending' / waiting payment
    // and response with 200 OK
  }
});

export default apiHandler;
