// Libs
import { prisma } from "../connection";

// Set Data Source
const queryFrom = prisma.cart;

//? ============== GET QUERY ============= ?//

export const GET_CART_BY_USER_ID = ({ userId }) => {
  return queryFrom.findMany({
    where: { user_id: +userId },
    select: {
      artwork: {
        select: {
          title: true,
          markup_price: true,
          width: true,
          height: true,
          type: true,
          media_cover: {
            select: {
              url: true,
            },
          },
          artist: {
            select: {
              full_name: true,
            },
          },
        },
      },
    },
  });
};

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

export const CREATE_CART = (data) => {
  const { artworkId, userId } = data;
  return queryFrom.create({
    data: {
      artwork_id: +artworkId,
      user_id: +userId,
    },
  });
};

// * ====================================== * //

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

export const DELETE_CART = ({ id }) => {
  return queryFrom.delete({ where: { id: +id } });
};
// ==================================

// * ====================================== * //
