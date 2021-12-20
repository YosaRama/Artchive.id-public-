import { prisma } from "../connection";

const Query = () => {};

//***** OPTION QUERY ***** //

//***** GET QUERY ***** //

export const GET_USER = ({ page = 0, limit = 15 }) => {
  const skip = +page * +limit;
  return prisma.user.findMany({ skip: +skip, take: +limit });
};

export const GET_USER_BY_ID = ({ id }) => {
  return prisma.user.findUnique({
    where: { id: +id },
  });
};

export const GET_USER_BY_EMAIL = ({ email }) => {
  return prisma.user.findUnique({ where: { email: email } });
};

export const GET_TOTAL_USER = () => {
  return prisma.user.count();
};

//***** CREATE QUERY ***** //

export const CREATE_USER = ({ email, password, fullName, role }) => {
  return prisma.user.create({
    data: {
      email: email,
      password: password,
      full_name: fullName,
      role: role,
    },
  });
};

//***** UPDATE QUERY ***** //

export const UPDATE_USER = ({ id, fullName, email }) => {
  return prisma.user.update({
    data: { email: email, full_name: fullName },
    where: { id: +id },
  });
};

export const UPDATE_USER_PASSWORD = ({ password, id }) => {
  return prisma.user.update({
    where: { id: +id },
    data: { password: password },
  });
};

//***** OPTION QUERY ***** //

export const DELETE_USER = ({ id }) => {
  return prisma.user.delete({ where: { id: +id } });
};
