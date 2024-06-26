// Libs
import { prisma } from "../connection";

// Set Data Source
const queryFrom = prisma.paymentHistory;

//? ============== OPTION QUERY ============= ?//

// * ====================================== * //

//? ============== GET QUERY ============= ?//

export const GET_PAYMENT_HISTORY = ({ page = 1, limit = 15, something }) => {
  //? Handle Pagination
  const skip = limit != "all" ? (+page - 1) * +limit : undefined;
  return queryFrom.findMany({
    skip: skip ? +skip : undefined, // Disable by undefined
    take: limit != "all" ? +limit : undefined, // Disable by undefined

    //? Handle query condition
    where: {
      AND: {
        something: something ? something : {}, // Can disable by empty object
      },
    },

    //? Handle order
    orderBy: {
      id: "desc",
    },
  });
};

export const GET_TOTAL_PAYMENT_HISTORY = ({ role, email, fullName }) => {
  return queryFrom.count({
    //? Handle query condition
    where: {
      AND: {
        role: role ? role : {},
        email: email ? { contains: email } : {},
        full_name: fullName ? { contains: fullName } : {},
      },
    },
  });
};

export const GET_PAYMENT_HISTORY_BY_ID = ({ id }) => {
  return queryFrom.findUnique({
    where: { id: +id },
  });
};

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

export const CREATE_PAYMENT_HISTORY = (data) => {
  return queryFrom.create({
    data: {
      currency: data.currency,
      fraud_status: data.fraudStatus,
      gross_amount: data.grossAmount,
      merchant_id: data.merchantId,
      order_id: data.orderId,
      payment_type: data.paymentType,
      signature_key: data.signatureKey,
      transaction_id: data.transactionId,
      transaction_status: data.transactionStatus,
      transaction_time: data.transactionTime,
      artwork_id: data.artworkId,
      user_id: data.userId,
    },
  });
};

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

export const UPDATE_PAYMENT_HISTORY = ({ id, something }) => {
  return queryFrom.update({
    data: { something: something },
    where: { id: +id },
  });
};
// ==================================

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

export const DELETE_PAYMENT_HISTORY = ({ id }) => {
  return queryFrom.delete({ where: { id: +id } });
};
// ==================================

// * ====================================== * //
