// Helper
import auctioo from "app/utils/auctioo";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  const { auctionId, itemId } = req.query;
  try {
    const result = await auctioo.get(`/events/${auctionId}/items/${itemId}`);
    const data = await result.data;

    res
      .status(200)
      .json({ success: true, message: "Successfully retrieve item details", result: data });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

apiHandler.put(async (req, res) => {
  const { auctionId, itemId } = req.query;
  const {
    current_price,
    final_price,
    initial_price,
    is_showing,
    item_id,
    max_stepup,
    started_at,
    step,
    stopped_at,
  } = req.body;

  try {
    const dataPayload = {
      current_price: current_price,
      final_price: final_price,
      initial_price: initial_price,
      is_showing: is_showing,
      item_id: item_id,
      max_stepup: max_stepup,
      step: step,
      started_at: moment(started_at).toISOString(),
      stopped_at: moment(stopped_at).toISOString(),
    };

    await auctioo.put(`/events/${auctionId}/items/${itemId}`, dataPayload);
    res.status(200).json({ success: true, message: "Successfully update item details" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

apiHandler.delete(async (req, res) => {
  const { auctionId, itemId } = req.query;

  try {
    await auctioo.delete(`/events/${auctionId}/items/${itemId}`);
    res.status(200).json({ success: true, message: "Successfully delete item details" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

export default apiHandler;
