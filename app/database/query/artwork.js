// Import database query
import { prisma } from "../connection";

//? ============== OPTION QUERY ============= ?//

// * ====================================== * //

//? ============== GET QUERY ============= ?//

// Get Data (Filter by Role, Email, FullName)
export const GET_ARTWORK = ({ page = 0, limit = 15 }) => {
  // Handle Pagination
  const skip = limit != "all" ? +page * +limit : undefined;
  return prisma.artwork.findMany({
    skip: skip ? +skip : undefined, // Disable by undefined
    take: limit != "all" ? +limit : undefined, // Disable by undefined
    // ===========================

    // Get Relational Data
    include: {
      artist: {
        select: {
          id: true,
          email: true,
          full_name: true,
          profile: {
            select: {
              id: true,
              url: true,
            },
          },
          signature: {
            select: {
              id: true,
              url: true,
            },
          },
        },
      },
      media: { select: { id: true, url: true } },
    },
    // ==================

    // Handle query condition
    // where: {
    //   AND: {
    //     role: role ? role : {}, // Can disable by empty object
    //     email: email ? { contains: email } : {}, // Can disable by empty object
    //     full_name: fullName ? { contains: fullName } : {}, // Can disable by empty object
    //   },
    // },
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
export const GET_ARTWORK_BY_ID = ({ id }) => {
  return prisma.artwork.findUnique({
    // Handle query condition
    where: { id: +id },
    // ==========================

    // Get Relational Data
    include: {
      artist: {
        select: {
          id: true,
          email: true,
          full_name: true,
          profile: {
            select: {
              id: true,
              url: true,
            },
          },
          signature: {
            select: {
              id: true,
              url: true,
            },
          },
        },
      },
      media: { select: { id: true, url: true } },
    },
    // ==================
  });
};
// ==================================

// Get total all data
export const GET_TOTAL_ARTWORK = () => {
  return prisma.artwork.count({
    // Handle query condition
    // where: {
    //   AND: {
    //     role: role ? role : {}, // Can disable by empty object
    //     email: email ? { contains: email } : {}, // Can disable by empty object
    //     full_name: fullName ? { contains: fullName } : {}, // Can disable by empty object
    //   },
    // },
    // ========================== });
  });
};
// ==================================

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

// Create new data
export const CREATE_ARTWORK = ({ email, password, fullName, role }) => {
  return prisma.data.create({
    data: {
      email: email,
      password: password,
      full_name: fullName,
      role: role,
    },
  });
};
// ==================================

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

// Update data with specific ID details without password
export const UPDATE_ARTWORK = ({ id, fullName, email }) => {
  return prisma.data.update({
    data: { email: email, full_name: fullName },
    where: { id: +id },
  });
};
// ==================================

// Update data with specific ID password only
export const UPDATE_ARTWORK_PASSWORD = ({ password, id }) => {
  return prisma.data.update({
    where: { id: +id },
    data: { password: password },
  });
};
// ==================================

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

// Delete data with specific ID
export const DELETE_ARTWORK = ({ id }) => {
  return prisma.data.delete({ where: { id: +id } });
};
// ==================================

// * ====================================== * //
