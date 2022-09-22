// Libs
import { prisma } from "../connection";

// Set Data Source
const queryFrom = prisma.order;

//? ============== GET QUERY ============= ?//
export const GET_ORDER = ({ page = 1, limit = 15, userId, status }) => {
  //? Handle Pagination
  const skip = limit != "all" ? (+page - 1) * +limit : undefined;
  return queryFrom.findMany({
    skip: skip ? +skip : undefined, // Disable by undefined
    take: limit != "all" ? +limit : undefined, // Disable by undefined

    //? Handle query condition
    where: {
      AND: {
        user_id: userId ? +userId : {},
        status: status ? status : {},
      },
    },

    //? Data
    include: {
      order_item: {
        select: {
          height: true,
          width: true,
          title: true,
          artist: { select: { full_name: true } },
          material: true,
          markup_price: true,
          media_cover: true,
          slug: true,
        },
      },
    },

    //? Handle order
    orderBy: {
      id: "desc",
    },
  });
};

export const GET_TOTAL_ORDER = ({ userId, status }) => {
  return queryFrom.count({
    //? Handle query condition
    where: {
      AND: {
        user_id: userId ? +userId : {},
        status: status ? status : {},
      },
    },
  });
};

export const GET_ORDER_BY_ID = ({ id }) => {
  return queryFrom.findUnique({
    where: { id: +id },
    include: {
      user: { include: { profile: true } },
      order_item: { include: { artist: true, media_cover: true } },
    },
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
          return { id: item.id };
        }),
      },
      user_id: +userId,
      notes: notes ? notes : null,
    },
  });
};
// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

//? Update order after success from midtrans
export const UPDATE_ORDER_AFTER_PROCEED = ({ orderId, data }) => {
  const { fraud, status, transactionId, artworkIdList, userId } = data;
  return prisma.$transaction([
    queryFrom.update({
      where: { order_id: orderId },
      data: { fraud: fraud, status: status, transaction_id: transactionId },
    }),
    prisma.artwork.updateMany({ where: { id: { in: artworkIdList } }, data: { status: "SOLD" } }),
    prisma.cart.updateMany({
      where: { user_id: userId, artwork_id: { in: artworkIdList } },
      data: { status: true },
    }),
  ]);
};

//? Update from admin dashboard
export const UPDATE_ORDER_DETAILS = ({ data, id }) => {
  return queryFrom.update({
    where: { id: +id },
    data: {
      shipping_address: data?.shippingAddress,
      notes: data?.notes,
      recipient_name: data?.recipientName,
      recipient_phone_number: data?.recipientPhone,
      shipping_city: data?.shippingCity,
      shipping_country: data?.shippingCountry,
      shipping_zip_code: data?.shippingPostalCode,
      status: data?.status,
    },
  });
};

// * ====================================== * //
