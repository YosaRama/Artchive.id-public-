// Libs
import { prisma } from "../connection";

// Set Data Source
const queryFrom = prisma.exhibition;

//? ============== OPTION QUERY ============= ?//
export const CHECK_EXHIBITION_BY_SLUG = ({ slug }) => {
  return queryFrom.findUnique({
    where: {
      slug: slug,
    },
  });
};

// * ====================================== * //

//? ============== GET QUERY ============= ?//

export const GET_EXHIBITION = ({ page = 1, limit = 15 }) => {
  //? Handle Pagination
  const skip = limit != "all" ? (+page - 1) * +limit : undefined;
  return queryFrom.findMany({
    skip: skip ? +skip : undefined, // Disable by undefined
    take: limit != "all" ? +limit : undefined, // Disable by undefined

    //? Handle order
    orderBy: {
      id: "desc",
    },
  });
};

export const GET_TOTAL_EXHIBITION = () => {
  return queryFrom.count({});
};

export const GET_EXHIBITION_BY_ID = ({ id }) => {
  return queryFrom.findUnique({
    where: { id: +id },
    include: {
      artists: {
        select: {
          user: {
            select: {
              full_name: true,
              slug: true,
              profile: true,
            },
          },
        },
      },
    },
  });
};

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

export const CREATE_EXHIBITION = (data) => {
  const {
    title,
    slug,
    shortDescription,
    description,
    startDate,
    endDate,
    organizedBy,
    address,
    lat,
    lng,
    catalogueLink,
    createdBy,
    startTime,
    endTime,
    thumbnail,
  } = data;
  return queryFrom.create({
    data: {
      title: title,
      slug: slug,
      short_description: shortDescription,
      description: description,
      start_date: startDate,
      end_date: endDate,
      organized_by: organizedBy,
      address: address,
      lat: lat,
      lng: lng,
      catalogue_link: catalogueLink,
      created_by: createdBy,
      start_time: startTime,
      end_time: endTime,
      thumbnail_id: thumbnail,
    },
  });
};

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

export const UPDATE_EXHIBITION_DETAILS = ({ id, data }) => {
  const {
    title,
    shortDescription,
    description,
    startDate,
    endDate,
    organizedBy,
    address,
    lat,
    lng,
    catalogueLink,
    createdBy,
    startTime,
    endTime,
    thumbnail,
    updatedBy,
  } = data;

  return queryFrom.update({
    data: {
      title: title,
      short_description: shortDescription,
      description: description,
      start_date: startDate,
      end_date: endDate,
      organized_by: organizedBy,
      address: address,
      lat: lat,
      lng: lng,
      catalogue_link: catalogueLink,
      created_by_id: createdBy,
      start_time: startTime,
      end_time: endTime,
      thumbnail_id: thumbnail,
      updated_by: updatedBy,
    },
    where: { id: +id },
  });
};

export const UPDATE_EXHIBITION_MEDIA_GALLERY = ({ id, mediaGallery }) => {
  return queryFrom.update({
    where: { id: +id },
    data: {
      media_gallery: {
        connect: {
          id: mediaGallery,
        },
      },
    },
  });
};

export const UPDATE_EXHIBITION_ARTIST = ({ id, artistId }) => {
  return queryFrom.update({
    where: { id: +id },
    data: { artists: { create: { user_id: artistId } } },
  });
};

export const UPDATE_EXHIBITION_ARTWORK = ({ id, artworkId, price }) => {
  return queryFrom.update({
    where: { id: +id },
    data: { artworks: { create: { artwork_id: artworkId, exhibition_price: price } } },
  });
};

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

export const DELETE_EXHIBITION = ({ id }) => {
  return queryFrom.delete({ where: { id: +id } });
};

export const DELETE_EXHIBITION_MEDIA_GALLERY = ({ id, mediaGallery }) => {
  return queryFrom.update({
    where: { id: +id },
    data: { media_gallery: { disconnect: { id: mediaGallery } } },
  });
};

export const DELETE_EXHIBITION_ARTIST = ({ id, artistId }) => {
  return queryFrom.update({
    where: { id: +id },
    data: {
      artists: { delete: { exhibition_id_user_id: { user_id: artistId, exhibition_id: +id } } },
    },
  });
};

export const DELETE_EXHIBITION_ARTWORK = ({ id, artworkId }) => {
  return queryFrom.update({
    where: { id: +id },
    data: {
      artworks: {
        delete: { exhibition_id_artwork_id: { artwork_id: +artworkId, exhibition_id: +id } },
      },
    },
  });
};

// * ====================================== * //
