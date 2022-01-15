// Import database query
import { prisma } from "../connection";

//? ============== OPTION QUERY ============= ?//

// * ====================================== * //

//? ============== GET QUERY ============= ?//

// Get Data (Filter by Role, Email, FullName)
export const GET_DATA = ({ page = 0, limit = 15, something }) => {
  // Handle Pagination
  const skip = limit != "all" ? +page * +limit : undefined;
  return prisma.data.findMany({
    skip: skip ? +skip : undefined, // Disable by undefined
    take: limit != "all" ? +limit : undefined, // Disable by undefined
    // ===========================

    // Handle query condition
    where: {
      AND: {
        something: something ? something : {}, // Can disable by empty object
      },
    },
    // ==========================

    // Handle order
    orderBy: {
      id: "desc",
    },
    // ==========================
  });
};
// ==================================

// Get Data by Specific ID
export const GET_DATA_BY_ID = ({ id }) => {
  return prisma.data.findUnique({
    where: { id: +id },
  });
};
// ==================================

// Get total all data
export const GET_TOTAL_DATA = ({ role, email, fullName }) => {
  return prisma.data.count({
    // Handle query condition
    where: {
      AND: {
        role: role ? role : {}, // Can disable by empty object
        email: email ? { contains: email } : {}, // Can disable by empty object
        full_name: fullName ? { contains: fullName } : {}, // Can disable by empty object
      },
    },
    // ========================== });
  });
};
// ==================================

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

// Create new data
export const CREATE_DATA = ({ something }) => {
  return prisma.data.create({
    data: {
      something: something,
    },
  });
};
// ==================================

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

// Update data with specific ID details without password
export const UPDATE_DATA = ({ id, something }) => {
  return prisma.data.update({
    data: { something: something },
    where: { id: +id },
  });
};
// ==================================

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

// Delete data with specific ID
export const DELETE_DATA = ({ id }) => {
  return prisma.data.delete({ where: { id: +id } });
};
// ==================================

// * ====================================== * //
