// Import database query
import { prisma } from "../connection";

//? ============== OPTION QUERY ============= ?//

// * ====================================== * //

//? ============== GET QUERY ============= ?//

// Get Data (Filter by Role, Email, FullName)
export const GET_ARTWORK = ({ page = 1, limit = 15, client = false }) => {
  // Handle Pagination
  const skip = limit != "all" ? (+page - 1) * +limit : undefined;
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
      media_cover: { select: { id: true, url: true } },
      media_gallery: { select: { id: true, url: true } },
    },
    // ==================

    // Handle query condition
    where: {
      AND: {
        OR: [
          { status: client == "true" ? "SOLD" : {} },
          { status: client == "true" ? "PUBLISH" : {} },
        ],
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
      media_cover: { select: { id: true, url: true } },
      media_gallery: { select: { id: true, url: true } },
      certificate: {
        select: { id: true, url: true },
        orderBy: { id: "desc" },
        where: {
          type: "EDITION",
        },
      },
      genre: {
        select: {
          id: true,
          title: true,
        },
      },
    },
    // ==================
  });
};
// ==================================

// Get total all data
export const GET_TOTAL_ARTWORK = ({ client }) => {
  return prisma.artwork.count({
    // Handle query condition
    where: {
      AND: {
        OR: [
          { status: client == "true" ? "SOLD" : {} },
          { status: client == "true" ? "PUBLISH" : {} },
        ],
      },
    },
    // ==========================
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
  cover_id,
  type,
  height,
  width,
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
      width: width,
      price: price,
      status: status,
      approve: approve,
      artist: {
        connect: {
          id: artist_id,
        },
      },
      genre: {
        connect:
          (genre_id &&
            genre_id.map((item) => {
              return { id: item };
            })) ||
          [],
      },
      media_gallery: {
        connect:
          (media_id &&
            media_id.map((item) => {
              return { id: item };
            })) ||
          [],
      },
      media_cover: {
        connect: {
          id: cover_id,
        },
      },
    },
    //============================

    // Get Relational Data
    include: {
      genre: true,
      artist: true,
      media_cover: { select: { id: true, url: true } },
      media_gallery: { select: { id: true, url: true } },
    },
    // ==================
  });
};
// ==================================

// Create media galleries
export const CREATE_ARTWORK_GALLERY = ({ id, gallery_id }) => {
  return prisma.artwork.update({
    where: {
      id: +id,
    },
    data: {
      media_gallery: {
        connect: {
          id: gallery_id,
        },
      },
    },
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
  type,
  height,
  width,
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
      width: width,
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
        connect: genre_id
          ? genre_id.map((item) => {
              return { id: item };
            })
          : [],
      },
    },
    //====================

    // Get Relational Data
    include: {
      genre: true,
      artist: true,
      media_cover: { select: { id: true, url: true } },
      media_gallery: { select: { id: true, url: true } },
    },
    // ==================
  });
};
// ==================================

// Update artwork image
export const UPDATE_ARTWORK_COVER_IMAGE = ({ id, cover_id }) => {
  return prisma.artwork.update({
    where: {
      id: +id,
    },
    data: {
      media_cover: {
        connect: {
          id: cover_id,
        },
      },
    },
  });
};

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

// Delete data with specific ID
export const DELETE_ARTWORK = ({ id }) => {
  return prisma.artwork.delete({ where: { id: +id } });
};
// ==================================

// Delete data with specific ID
export const DELETE_ARTWORK_GALLERY = ({ id, gallery_id }) => {
  return prisma.artwork.update({
    where: { id: +id },
    data: {
      media_gallery: {
        disconnect: {
          id: gallery_id,
        },
      },
    },
  });
};
// ==================================

// * ====================================== * //
