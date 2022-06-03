// Libs
import { prisma } from "../connection";

//? Set ARTICLES Source
const queryFrom = prisma.article;

//? ============== OPTION QUERY ============= ?//
export const CHECK_ARTICLE_BY_SLUG = ({ slug }) => {
  return queryFrom.findUnique({
    where: {
      slug: slug,
    },
  });
};

// * ====================================== * //

//? ============== GET QUERY ============= ?//

export const GET_ARTICLES = ({ page = 1, limit = 15, excludeSlug }) => {
  //? Handle Pagination
  const skip = limit != "all" ? (+page - 1) * +limit : undefined;
  return queryFrom.findMany({
    skip: skip ? +skip : undefined,
    take: limit != "all" ? +limit : undefined,
    include: {
      updated_by: true,
      created_by: true,
      thumbnail: true,
    },

    //? Handle order
    orderBy: {
      id: "desc",
    },

    //? Handle Filter
    where: {
      NOT: excludeSlug ? { slug: excludeSlug } : {},
    },
  });
};

export const GET_TOTAL_ARTICLES = () => {
  return queryFrom.count();
};

export const GET_ARTICLES_BY_ID = ({ id }) => {
  return queryFrom.findUnique({
    include: {
      thumbnail: true,
    },
    where: { id: +id },
  });
};

export const GET_ARTICLE_BY_SLUG = ({ slug }) => {
  return queryFrom.findUnique({
    where: { slug: slug },
    include: {
      thumbnail: true,
    },
  });
};

export const GET_ALL_ARTICLES_SLUG = () => {
  return queryFrom.findMany({
    select: { slug: true },
  });
};

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

export const CREATE_ARTICLES = ({ data }) => {
  const { title, slug, author, status, content, createdId, thumbnailId, shortDescription } = data;

  return queryFrom.create({
    data: {
      title: title,
      slug: slug,
      author: author,
      status: status,
      content: content,
      short_description: shortDescription,
      created_id: createdId,
      thumbnail_id: thumbnailId,
    },
  });
};

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

export const UPDATE_ARTICLES = ({ id, data }) => {
  const { title, content, status, author, updatedId, thumbnailId, shortDescription } = data;

  return queryFrom.update({
    data: {
      title: title,
      content: content,
      status: status,
      author: author,
      updated_id: updatedId,
      short_description: shortDescription,
      thumbnail_id: thumbnailId,
    },
    where: { id: +id },
  });
};
// ==================================

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

export const DELETE_ARTICLES = ({ id }) => {
  return queryFrom.delete({ where: { id: +id } });
};
// ==================================

// * ====================================== * //
