// Helper
import auctioo from "app/utils/auctioo";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  const { auctionId } = req.query;
  try {
    const result = await auctioo.get(`/events/${auctionId}/users`);
    const data = await result.data;

    res
      .status(200)
      .json({ success: true, message: "Successfully retrieve users list", data: data });
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
    await auctioo.post(`/events/${auctionId}/users`, dataPayload);
    res.status(200).json({ success: true, message: "Successfully add new user" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

export default apiHandler;
