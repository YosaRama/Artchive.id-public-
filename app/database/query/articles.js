// Libs
import { prisma } from "../connection";

//? Set ARTICLES Source
const queryFrom = prisma.article;

//? ============== OPTION QUERY ============= ?//

// * ====================================== * //

//? ============== GET QUERY ============= ?//

export const GET_ARTICLES = ({ page = 1, limit = 15 }) => {
  //? Handle Pagination
  const skip = limit != "all" ? (+page - 1) * +limit : undefined;
  return queryFrom.findMany({
    skip: skip ? +skip : undefined,
    take: limit != "all" ? +limit : undefined,

    //? Handle order
    orderBy: {
      id: "desc",
    },
  });
};

export const GET_TOTAL_ARTICLES = () => {
  return queryFrom.count();
};

export const GET_ARTICLES_BY_ID = ({ id }) => {
  return queryFrom.findUnique({
    where: { id: +id },
  });
};

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

export const CREATE_ARTICLES = ({ data }) => {
  const { title, author, status, content, createdId } = data;

  return queryFrom.create({
    data: {
      title: title,
      author: author,
      status: status,
      content: content,
      created_id: createdId,
    },
  });
};

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

export const UPDATE_ARTICLES = ({ id, data }) => {
  const { title, content, status, author, updatedId } = data;

  return queryFrom.update({
    data: {
      title: title,
      content: content,
      status: status,
      author: author,
      updated_id: updatedId,
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
