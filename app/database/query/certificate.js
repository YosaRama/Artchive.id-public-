// Import database query
import { prisma } from "../connection";

//? ============== OPTION QUERY ============= ?//

// * ====================================== * //

//? ============== GET QUERY ============= ?//

export const GET_CERTIFICATE_LAST_ID = () => {
  return prisma.certificate.findFirst({ select: { id: true }, orderBy: { id: "desc" } });
};

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

// Create new data
export const CREATE_CERTIFICATE = ({ artistId, artworkId, serialNumber, url, type }) => {
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
      type: type,
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
