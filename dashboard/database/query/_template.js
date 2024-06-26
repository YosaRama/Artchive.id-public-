// Libs
import { prisma } from "../connection";

// Set Data Source
const queryFrom = prisma.someData;

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

export const CREATE_DATA = ({ something }) => {
  return queryFrom.create({
    data: {
      something: something,
    },
  });
};

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

export const UPDATE_DATA = ({ id, something }) => {
  return queryFrom.update({
    data: { something: something },
    where: { id: +id },
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
