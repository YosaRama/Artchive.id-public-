// Helper
import auctioo from "app/utils/auctioo";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  const { auctionId } = req.query;
  try {
    const result = await auctioo.get(`/events/${auctionId}`);

    if (!result.data.success) {
      throw new Error(result.data.message);
    }

    const data = await result.data;
    res.status(200).json({ success: true, message: "Successfully auction details", data: data });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

apiHandler.put(async (req, res) => {
  const { auctionId } = req.query;
  const { name, start_date, end_date, description, mission, vision, thumbnail } = req.body;

  try {
    const dataPayload = {
      name: name,
      organizer: process.env.IS_STAGING === "true" ? "staging-artchive.id" : "artchive.id",
      start_date: start_date,
      end_date: end_date,
      description: description,
      mission: mission,
      vision: vision,
      thumbnail: thumbnail,
    };
    const result = await auctioo.put(`/events/${auctionId}`, dataPayload);

    if (!result.data.success) {
      throw new Error(result.data.message);
    }

    res.status(200).json({ success: true, message: "Successfully update auction details" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

apiHandler.delete(async (req, res) => {
  const { auctionId } = req.query;
  try {
    const result = await auctioo.delete(`/events/${auctionId}`);

    if (!result.data.success) {
      throw new Error(result.data.message);
    }

    res.status(200).json({ success: true, message: "Successfully delete auction" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

export default apiHandler;
