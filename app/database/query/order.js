// Libs
import { prisma } from "../connection";

// Set Data Source
const queryFrom = prisma.order;

//? ============== OPTION QUERY ============= ?//

// * ====================================== * //

//? ============== GET QUERY ============= ?//

export const GET_DATA = ({ page = 1, limit = 15, something }) => {
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

export const GET_TOTAL_DATA = ({ role, email, fullName }) => {
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

export const GET_DATA_BY_ID = ({ id }) => {
  return queryFrom.findUnique({
    where: { id: +id },
  });
};

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

export const CREATE_ORDER = (data) => {
  const {
    orderId,
    recipientName,
    recipientPhone,
    shippingAddress,
    shippingCity,
    shippingCountry,
    shippingPostalCode,
    total,
    transactionTime,
    artworks,
    notes,
    userId,
  } = data;
  return queryFrom.create({
    data: {
      order_id: orderId,
      recipient_name: recipientName,
      recipient_phone_number: recipientPhone,
      shipping_address: shippingAddress,
      shipping_city: shippingCity,
      shipping_country: shippingCountry,
      shipping_zip_code: shippingPostalCode,
      total_amount: `${total}`,
      transaction_time: transactionTime,
      order_item: {
        connect: artworks.map((item) => {
          return { sku: item.id };
        }),
      },
      user_id: +userId,
      notes: notes,
    },
  });
};

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

export const UPDATE_ORDER = ({ orderId, data }) => {
  const { fraud, status, transactionId } = data;
  return queryFrom.update({
    where: { order_id: orderId },
    data: { fraud: fraud, status: status, transaction_id: transactionId },
  });
};
// ==================================

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

export const DELETE_DATA = ({ id }) => {
  return queryFrom.delete({ where: { id: +id } });
};
// ==================================

// * ====================================== * //
