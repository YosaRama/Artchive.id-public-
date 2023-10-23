import auctioo from "app/utils/auctioo";

const GET_AUCTION_DETAILS_USER_LIST = async ({ auctionId, code = "" }) => {
  const result = await auctioo.get(`/events/${auctionId}/users?code=${code}`);

  if (!result.data.success) {
    throw new Error(result.data.message);
  }

  return result?.data;
};

export { GET_AUCTION_DETAILS_USER_LIST };
