// Import database query
import { prisma } from "../connection";

//? ============== OPTION QUERY ============= ?//

// * ====================================== * //

//? ============== GET QUERY ============= ?//

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

// Create main media
export const CREATE_MAIN_MEDIA = ({ filename, mimetype, url, mediumUrl, uploadBy }) => {
  return prisma.media.create({
    data: {
      filename: filename,
      mimetype: mimetype,
      url: url,
      medium_url: mediumUrl,
      upload_by: uploadBy,
    },
  });
};
// ==================================

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

// * ====================================== * //
