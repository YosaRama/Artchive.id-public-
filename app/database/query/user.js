// Import database query
import { prisma } from "../connection";

//? ============== OPTION QUERY ============= ?//

// * ====================================== * //

//? ============== GET QUERY ============= ?//

// Get User (Filter by Role, Email, FullName)
export const GET_USER = ({ page = 0, limit = 15, role, email, fullName }) => {
  // Handle Pagination
  const skip = limit != "all" ? +page * +limit : undefined;
  return prisma.user.findMany({
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

// Get User by Specific ID
export const GET_USER_BY_ID = ({ id }) => {
  return prisma.user.findUnique({
    where: { id: +id },
  });
};
// ==================================

// Get User by Specific Email
export const GET_USER_BY_EMAIL = ({ email }) => {
  return prisma.user.findUnique({ where: { email: email } });
};
// ==================================

// Get total all user
export const GET_TOTAL_USER = ({ role, email, fullName }) => {
  return prisma.user.count({
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

// Create new user
export const CREATE_USER = ({ email, password, fullName, role }) => {
  return prisma.user.create({
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

// Update user with specific ID details without password
export const UPDATE_USER = ({ id, fullName, email }) => {
  return prisma.user.update({
    data: { email: email, full_name: fullName },
    where: { id: +id },
  });
};
// ==================================

// Update user with specific ID password only
export const UPDATE_USER_PASSWORD = ({ password, id }) => {
  return prisma.user.update({
    where: { id: +id },
    data: { password: password },
  });
};
// ==================================

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

// Delete user with specific ID
export const DELETE_USER = ({ id }) => {
  return prisma.user.delete({ where: { id: +id } });
};
// ==================================

// * ====================================== * //
