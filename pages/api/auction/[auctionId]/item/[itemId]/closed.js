import auctioo from "app/utils/auctioo";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

apiHandler.put(async (req, res) => {
  const { auctionId, itemId } = req.query;

  try {
    const result = await auctioo.put(`/events/${auctionId}/items/${itemId}/closed`);

    if (!result.data.success) {
      throw new Error(result.data.message);
    }
    res.status(200).json({ success: true, message: "Successfully closed item bid" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

export default apiHandler;
