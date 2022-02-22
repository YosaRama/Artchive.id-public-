// Libs
import moment from "moment";
import { prisma } from "../connection";

//? ============== OPTION QUERY ============= ?//
export const CHECK_USER_BY_SLUG = ({ slug }) => {
  return prisma.user.findUnique({
    where: {
      slug: slug,
    },
  });
};

// * ====================================== * //

//? ============== GET QUERY ============= ?//

// Get User (Filter by Role, Email, FullName)
export const GET_USER = ({ page = 1, limit = 15, role, email, fullName, client = false }) => {
  const skip = limit != "all" ? (+page - 1) * +limit : undefined;
  return prisma.user.findMany({
    skip: skip ? +skip : undefined,
    take: limit != "all" ? +limit : undefined,
    include: {
      profile: true,
      signature: true,
      banner: true,
    },
    where: {
      AND: {
        role: role ? role : {},
        email: email ? { contains: email } : {},
        full_name: fullName ? { contains: fullName } : {},
      },
      NOT: { status: client == "true" ? false : {} },
    },
    orderBy: {
      id: "desc",
    },
  });
};
// ==================================

// Get total all user
export const GET_TOTAL_USER = ({ role, email, fullName, client }) => {
  return prisma.user.count({
    where: {
      AND: {
        role: role ? role : {},
        email: email ? { contains: email } : {},
        full_name: fullName ? { contains: fullName } : {},
      },
      NOT: { status: client == "true" ? false : {} },
    },
  });
};
// ==================================

// Get User by Specific ID
export const GET_USER_BY_ID = ({ id }) => {
  return prisma.user.findUnique({
    where: { id: +id },
    include: {
      profile: true,
      banner: true,
      signature: true,
      artwork: {
        include: {
          media_cover: true,
          artist: true,
        },
      },
      collection: true,
    },
  });
};
// ==================================

// Get User by Specific Email
export const GET_USER_BY_EMAIL = ({ email }) => {
  return prisma.user.findUnique({
    where: { email: email },
    include: {
      profile: true,
    },
  });
};
// ==================================

// * ====================================== * //

//? ============== CREATE QUERY ============= ?//

// Create new user
export const CREATE_USER = ({ email, password, fullName, role, slug, provider }) => {
  return prisma.user.create({
    data: {
      email: email,
      slug: slug,
      password: password,
      full_name: fullName,
      role: role,
      status: false,
      provider: provider,
    },
  });
};
// ==================================

// * ====================================== * //

//? ============== UPDATE QUERY ============= ?//

// Update user with specific ID details without password
export const UPDATE_USER = ({
  id,
  fullName,
  email,
  city,
  address,
  instagramUrl,
  facebookUrl,
  biography,
  birthDate,
}) => {
  return prisma.user.update({
    data: {
      email: email,
      full_name: fullName,
      city: city,
      address: address,
      instagram_url: instagramUrl,
      facebook_url: facebookUrl,
      biography: biography,
      birth_date: moment(birthDate).toISOString(),
    },
    where: { id: +id },
  });
};
// ==================================

// Update user with specific ID password only
export const UPDATE_USER_PASSWORD = ({ password, id }) => {
  return prisma.user.update({
    where: { id: +id },
    data: { password: password },
  });
};
// ==================================

// Update user profile
export const UPDATE_USER_PROFILE_IMAGE = ({ profileId, id }) => {
  return prisma.user.update({
    where: { id: +id },
    data: {
      profile: {
        connect: {
          id: profileId,
        },
      },
    },
  });
};
// ==================================

// Update user banner
export const UPDATE_USER_PROFILE_BANNER = ({ bannerId, id }) => {
  return prisma.user.update({
    where: { id: +id },
    data: {
      banner: {
        connect: {
          id: bannerId,
        },
      },
    },
  });
};
// ==================================

// Update user banner
export const UPDATE_USER_STATUS = ({ status, id }) => {
  return prisma.user.update({
    where: { id: +id },
    data: {
      status: status,
    },
  });
};
// ==================================

// Update user banner
export const UPDATE_USER_ROLE = ({ role, id }) => {
  return prisma.user.update({
    where: { id: +id },
    data: {
      role: role,
    },
  });
};
// ==================================

// * ====================================== * //

//? ============== DELETE QUERY ============= ?//

// Delete user with specific ID
export const DELETE_USER = ({ id }) => {
  return prisma.user.delete({ where: { id: +id } });
};
// ==================================

// * ====================================== * //
