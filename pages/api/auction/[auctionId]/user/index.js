// Helper
import { GET_AUCTION_DETAILS_USER_LIST } from "app/database/query/auction";
import auctioo from "app/utils/auctioo";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  const { auctionId, search, searchBy } = req.query;
  try {
    const result = await GET_AUCTION_DETAILS_USER_LIST({ auctionId: auctionId });

    const data = await result.result;

    const dataParse =
      search && searchBy
        ? data.filter((item) => item?.[searchBy].toLowerCase()?.includes(search?.toLowerCase()))
        : data;

    res
      .status(200)
      .json({ success: true, message: "Successfully retrieve users list", data: dataParse });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

apiHandler.post(async (req, res) => {
  const { auctionId } = req.query;
  const { email, facebook, instagram, name, phone_number, status, status_description } = req.body;

  try {
    const dataPayload = {
      email: email,
      facebook: facebook,
      instagram: instagram,
      name: name,
      phone_number: phone_number,
      status: status,
      status_description: status_description,
    };
    const result = await auctioo.post(`/events/${auctionId}/users`, dataPayload);

    if (!result.data.success) {
      throw new Error(result.data.message);
    }

    res.status(200).json({ success: true, message: "Successfully add new user" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

export default apiHandler;
