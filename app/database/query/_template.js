import { prisma } from "../connection";

const Query = () => {};

//***** OPTION QUERY ***** //

//***** GET QUERY ***** //

export const GET_DATA = () => {
  return prisma.user.findMany();
};

export const GET_DATA_BY_ID = ({ id }) => {
  return prisma.user.findUnique();
};

export const GET_TOTAL_DATA = () => {
  return Query();
};

//***** CREATE QUERY ***** //

export const CREATE_DATA = ({ data }) => {
  return Query();
};

//***** UPDATE QUERY ***** //

export const UPDATE_DATA = ({ data }) => {
  return Query();
};

//***** OPTION QUERY ***** //

export const DELETE_DATA = ({ data }) => {
  return Query();
};
