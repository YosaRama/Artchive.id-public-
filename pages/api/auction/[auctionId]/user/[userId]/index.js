// Helper
import auctioo from "dashboard/utils/auctioo";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  const { auctionId, userId } = req.query;
  try {
    const result = await auctioo.get(`/events/${auctionId}/users/${userId}`);

    if (!result.data.success) {
      throw new Error(result.data.message);
    }

    const data = await result.data.result;
    res
      .status(200)
      .json({ success: true, message: "Successfully retrieve user details", data: data });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

apiHandler.put(async (req, res) => {
  const { auctionId, userId } = req.query;
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

    const result = await auctioo.put(`/events/${auctionId}/users/${userId}`, dataPayload);
    if (!result.data.success) {
      throw new Error(result.data.message);
    }

    res.status(200).json({ success: true, message: "Successfully update user details" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

apiHandler.delete(async (req, res) => {
  const { auctionId, userId } = req.query;

  try {
    const result = await auctioo.delete(`/events/${auctionId}/users/${userId}`);
    if (!result.data.success) {
      throw new Error(result.data.message);
    }
    res.status(200).json({ success: true, message: "Successfully delete user" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

export default apiHandler;
