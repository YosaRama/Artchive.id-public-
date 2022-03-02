// Import database query
import { prisma } from "../connection";

//? ============== OPTION QUERY ============= ?//

// * ====================================== * //

//? ============== GET QUERY ============= ?//

// Get Data (Filter by Role, Email, FullName)
export const GET_GENRE = ({ page = 1, limit = 15 }) => {
  // Handle Pagination
  const skip = limit != "all" ? (+page - 1) * +limit : undefined;
  return prisma.genre.findMany({
    skip: skip ? +skip : undefined, // Disable by undefined
    take: limit != "all" ? +limit : undefined, // Disable by undefined
    // ===========================

    // Handle order
    orderBy: {
      id: "desc",
    },
    // ==========================
  });
};
// ==================================

// Get total all data
export const GET_TOTAL_GENRE = () => {
  return prisma.genre.count({});
};
// ==================================

// Get Data by Specific ID
export const GET_GENRE_BY_ID = ({ id }) => {
  return prisma.genre.findUnique({
    where: { id: +id },
  });
};
// ==================================

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

// Create new data
export const CREATE_GENRE = ({ title }) => {
  return prisma.genre.create({
    data: {
      title: title,
    },
  });
};
// ==================================

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

// Update data with specific ID details without password
export const UPDATE_GENRE = ({ id, title }) => {
  return prisma.genre.update({
    data: { title: title },
    where: { id: +id },
  });
};
// ==================================

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

// Delete data with specific ID
export const DELETE_GENRE = ({ id }) => {
  return prisma.genre.delete({ where: { id: +id } });
};
// ==================================

// * ====================================== * //
