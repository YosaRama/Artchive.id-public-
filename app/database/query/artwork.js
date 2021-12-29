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
export const CREATE_ARTWORK = ({
  sku,
  artist_id,
  title,
  year,
  material,
  description,
  genre_id,
  media_id,
  type,
  height,
  length,
  price,
  status,
  approve,
}) => {
  return prisma.artwork.create({
    // Data
    data: {
      sku: sku,
      title: title,
      year: year,
      material: material,
      description: description,
      type: type,
      height: height,
      length: length,
      price: price,
      status: status,
      approve: approve,
      artist: {
        connect: {
          id: artist_id,
        },
      },
      genre: {
        connect: {
          id: genre_id,
        },
      },
      media: {
        connect: media_id.map((item) => {
          return { id: item };
        }),
      },
    },
    //============================

    // Get Relational Data
    include: {
      media: true,
      genre: true,
      artist: true,
    },
    // ==================
  });
};
// ==================================

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

// Update data with specific ID details without password
export const UPDATE_ARTWORK = ({
  id,
  sku,
  artist_id,
  title,
  year,
  material,
  description,
  genre_id,
  media_id,
  type,
  height,
  length,
  price,
  status,
  approve,
}) => {
  return prisma.artwork.update({
    // Handle query condition
    where: { id: +id },
    //====================

    // Data
    data: {
      sku: sku,
      title: title,
      year: year,
      material: material,
      description: description,
      type: type,
      height: height,
      length: length,
      price: price,
      status: status,
      approve: approve,
      artist: {
        connect: {
          id: artist_id,
        },
      },
      genre: {
        set: [],
        connect: {
          id: genre_id,
        },
      },
      media: {
        set: [],
        connect: media_id.map((item) => {
          return { id: item };
        }),
      },
    },
    //====================

    // Get Relational Data
    include: {
      media: true,
      genre: true,
      artist: true,
    },
    // ==================
  });
};
// ==================================

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

// Delete data with specific ID
export const DELETE_ARTWORK = ({ id }) => {
  return prisma.artwork.delete({ where: { id: +id } });
};
// ==================================

// * ====================================== * //
