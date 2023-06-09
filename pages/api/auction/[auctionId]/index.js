// Helper
import auctioo from "app/utils/auctioo";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  const { auctionId } = req.query;
  try {
    const result = await auctioo.get(`/events/${auctionId}`);
    const data = await result.data;

    res.status(200).json({ success: true, message: "Successfully auction details", data: data });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

apiHandler.put(async (req, res) => {
  const { auctionId } = req.query;
  const { name, organizer, start_date, end_date, description } = req.body;

  try {
    const dataPayload = {
      name: name,
      organizer: organizer,
      start_date: start_date,
      end_date: end_date,
      description: description,
    };
    await auctioo.put(`/events/${auctionId}`, dataPayload);
    res.status(200).json({ success: true, message: "Successfully update auction details" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

apiHandler.delete(async (req, res) => {
  const { auctionId } = req.query;
  try {
    await auctioo.delete(`/events/${auctionId}`);
    res.status(200).json({ success: true, message: "Successfully delete auction" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

export default apiHandler;
