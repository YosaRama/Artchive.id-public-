import { prisma } from "../connection";

//***** OPTION QUERY ***** //

//***** GET QUERY ***** //

export const GET_TEMPLATE = ({ page = 0, limit = 15, role, email, fullName }) => {
  // Handle Pagination
  const skip = limit != "all" ? +page * +limit : undefined;
  return prisma.TEMPLATE.findMany({
    // Handle pagination
    skip: skip ? +skip : undefined, // Disable by undefined
    take: limit != "all" ? +limit : undefined, // Disable by undefined
    // Handle query condition
    where: {
      // Can disable by empty object
      AND: {
        role: role ? role : {},
        email: email ? { contains: email } : {},
        full_name: fullName ? { contains: fullName } : {},
      },
    },
    // Handle order
    orderBy: {
      id: "desc",
    },
  });
};

export const GET_TEMPLATE_BY_ID = ({ id }) => {
  return prisma.TEMPLATE.findUnique({
    where: { id: +id },
  });
};

export const GET_TEMPLATE_BY_EMAIL = ({ email }) => {
  return prisma.TEMPLATE.findUnique({ where: { email: email } });
};

export const GET_TOTAL_TEMPLATE = () => {
  return prisma.TEMPLATE.count();
};

//***** CREATE QUERY ***** //

export const CREATE_TEMPLATE = ({ email, password, fullName, role }) => {
  return prisma.TEMPLATE.create({
    data: {
      email: email,
      password: password,
      full_name: fullName,
      role: role,
    },
  });
};

//***** UPDATE QUERY ***** //

export const UPDATE_TEMPLATE = ({ id, fullName, email }) => {
  return prisma.TEMPLATE.update({
    data: { email: email, full_name: fullName },
    where: { id: +id },
  });
};

export const UPDATE_TEMPLATE_PASSWORD = ({ password, id }) => {
  return prisma.TEMPLATE.update({
    where: { id: +id },
    data: { password: password },
  });
};

//***** OPTION QUERY ***** //

export const DELETE_TEMPLATE = ({ id }) => {
  return prisma.TEMPLATE.delete({ where: { id: +id } });
};
