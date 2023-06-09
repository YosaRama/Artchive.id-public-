// Helper
import auctioo from "app/utils/auctioo";
import nextConnect from "next-connect";
import moment from "moment";

const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  const { auctionId } = req.query;
  try {
    const result = await auctioo.get(`/event/${auctionId}/items`);
    const data = await result.data;

    res.status(200).json({ success: true, message: "Successfully retrieve item list", data: data });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

apiHandler.post(async (req, res) => {
  const { auctionId } = req.query;
  const {
    current_price,
    final_price,
    initial_price,
    item_id,
    max_stepup,
    step,
    started_at,
    stopped_at,
  } = req.body;

  try {
    const dataPayload = {
      current_price: current_price,
      final_price: final_price,
      initial_price: initial_price,
      is_showing: true,
      item_id: item_id,
      max_stepup: max_stepup,
      step: step,
      started_at: moment(started_at).toISOString(),
      stopped_at: moment(stopped_at).toISOString(),
    };
    await auctioo.post(`/events/${auctionId}/items`, dataPayload);
    res.status(200).json({ success: true, message: "Successfully add auction items" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

export default apiHandler;
