// Libs
import nextConnect from "next-connect";
import midtransClient from "midtrans-client";

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

  let orderId = notification.order_id;
  let transactionStatus = notification.transaction_status;
  let fraudStatus = notification.fraud_status;

  res.status(200).json({
    success: true,
    message: `Transaction notification received. Order ID: ${orderId}. Transaction status: ${transactionStatus}. Fraud status: ${fraudStatus}`,
  });

  // Sample transactionStatus handling logic

  // if (transactionStatus == "capture") {
  //   if (fraudStatus == "challenge") {
  //     // TODO set transaction status on your database to 'challenge'
  //     // and response with 200 OK
  //   } else if (fraudStatus == "accept") {
  //     // TODO set transaction status on your database to 'success'
  //     // and response with 200 OK
  //   }
  // } else if (transactionStatus == "settlement") {
  //   // TODO set transaction status on your database to 'success'
  //   // and response with 200 OK
  // } else if (
  //   transactionStatus == "cancel" ||
  //   transactionStatus == "deny" ||
  //   transactionStatus == "expire"
  // ) {
  //   // TODO set transaction status on your database to 'failure'
  //   // and response with 200 OK
  // } else if (transactionStatus == "pending") {
  //   // TODO set transaction status on your database to 'pending' / waiting payment
  //   // and response with 200 OK
  // }
});

export default apiHandler;
