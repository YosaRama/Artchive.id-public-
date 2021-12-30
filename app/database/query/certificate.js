// Import database query
import { prisma } from "../connection";

//? ============== OPTION QUERY ============= ?//

// * ====================================== * //

//? ============== GET QUERY ============= ?//

// Get Data (Filter by Role, Email, FullName)
export const GET_DATA = ({ page = 0, limit = 15, role, email, fullName }) => {
  // Handle Pagination
  const skip = limit != "all" ? +page * +limit : undefined;
  return prisma.data.findMany({
    skip: skip ? +skip : undefined, // Disable by undefined
    take: limit != "all" ? +limit : undefined, // Disable by undefined
    // ===========================

    // Handle query condition
    where: {
      AND: {
        role: role ? role : {}, // Can disable by empty object
        email: email ? { contains: email } : {}, // Can disable by empty object
        full_name: fullName ? { contains: fullName } : {}, // Can disable by empty object
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

// Get Data by Specific Email
export const GET_DATA_BY_EMAIL = ({ email }) => {
  return prisma.data.findUnique({ where: { email: email } });
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
export const CREATE_CERTIFICATE = ({ artistId, artworkId, serialNumber, url }) => {
  return prisma.certificate.create({
    data: {
      user: {
        connect: {
          id: artistId,
        },
      },
      artwork: {
        connect: {
          id: artworkId,
        },
      },
      url: url,
      serial_no: serialNumber,
    },
  });
};
// ==================================

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

// Update data with specific ID details without password
export const UPDATE_DATA = ({ id, fullName, email }) => {
  return prisma.data.update({
    data: { email: email, full_name: fullName },
    where: { id: +id },
  });
};
// ==================================

// Update data with specific ID password only
export const UPDATE_DATA_PASSWORD = ({ password, id }) => {
  return prisma.data.update({
    where: { id: +id },
    data: { password: password },
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
