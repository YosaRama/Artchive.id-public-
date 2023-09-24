import auctioo from "app/utils/auctioo";

const GET_AUCTION_DETAILS_USER_LIST = async ({ auctionId, phoneNumber = "" }) => {
  const result = await auctioo.get(`/events/${auctionId}/users?phone_number=${phoneNumber}`);

  if (!result.data.success) {
    throw new Error(result.data.message);
  }

  return result?.data;
};

export { GET_AUCTION_DETAILS_USER_LIST };
