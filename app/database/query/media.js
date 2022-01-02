// Import database query
import { prisma } from "../connection";

//? ============== OPTION QUERY ============= ?//

// * ====================================== * //

//? ============== GET QUERY ============= ?//

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

// Create main media
export const CREATE_MAIN_MEDIA = ({ filename, mimetype, url }) => {
  return prisma.media.create({
    data: {
      parent_id: 0,
      dimension: "MAIN",
      filename: filename,
      mimetype: mimetype,
      url: url,
    },
  });
};
// ==================================

// Create medium media
export const CREATE_MEDIUM_MEDIA = ({ parentId, filename, mimetype, url }) => {
  return prisma.media.create({
    data: {
      parent_id: parentId,
      dimension: "MEDIUM",
      filename: filename,
      mimetype: mimetype,
      url: url,
    },
  });
};

// =========================

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

// * ====================================== * //
