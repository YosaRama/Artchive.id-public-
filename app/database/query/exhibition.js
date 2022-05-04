// Libs
import { prisma } from "../connection";

// Set Data Source
const queryFrom = prisma.exhibition;

//? ============== OPTION QUERY ============= ?//

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
      created_by_id: createdBy,
      start_time: startTime,
      end_time: endTime,
      thumbnail_id: thumbnail,
    },
  });
};

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

export const UPDATE_EXHIBITION_DETAILS = ({
  id,
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
}) => {
  return queryFrom.update({
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
      created_by_id: createdBy,
      start_time: startTime,
      end_time: endTime,
      thumbnail_id: thumbnail,
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
  return queryFrom.update({ where: { id: +id }, data: { artists: { connect: { id: artistId } } } });
};

export const UPDATE_EXHIBITION_ARTWORK = ({ id, artworkId }) => {
  return queryFrom.update({
    where: { id: +id },
    data: { artwork: { connect: { id: artworkId } } },
  });
};

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

export const DELETE_EXHIBITION = ({ id }) => {
  return queryFrom.delete({ where: { id: +id } });
};

export const DELETE_EXHIBITION_ARTIST = ({ id, artistId }) => {
  return queryFrom.update({
    where: { id: +id },
    data: { artists: { disconnect: { id: artistId } } },
  });
};

export const DELETE_EXHIBITION_ARTWORK = ({ id, artworkId }) => {
  return queryFrom.update({
    where: { id: +id },
    data: { artworks: { disconnect: { id: artworkId } } },
  });
};

// * ====================================== * //
