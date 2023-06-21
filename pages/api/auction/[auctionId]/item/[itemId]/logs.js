// Helper
import auctioo from "app/utils/auctioo";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  const { auctionId, itemId } = req.query;
  try {
    const result = await auctioo.get(`/events/${auctionId}/items/${itemId}/logs`);

    if (!result.data.success) {
      throw new Error(result.data.message);
    }

    const logsData = await result.data.result;
    res.status(200).json({
      success: true,
      message: "Successfully retrieve logs data",
      data: logsData,
    });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

export default apiHandler;
