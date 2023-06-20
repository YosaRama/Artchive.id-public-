// Helper
import { GET_ARTWORK_BY_SKU } from "app/database/query/artwork";
import auctioo from "app/utils/auctioo";
import moment from "moment-timezone";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  const { auctionId, itemId } = req.query;
  try {
    const result = await auctioo.get(`/events/${auctionId}/items/${itemId}`);

    if (!result.data.success) {
      throw new Error(result.data.message);
    }

    const auctiooData = await result.data.result;
    const artworkData = await GET_ARTWORK_BY_SKU({ sku: auctiooData?.item_id });

    const data = {
      auction_details: auctiooData,
      artwork_details: artworkData,
    };

    res.status(200).json({
      success: true,
      message: "Successfully retrieve item details",
      data: data,
    });
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
    start_estimation,
    end_estimation,
    item_status,
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
      start_estimation: start_estimation,
      end_estimation: end_estimation,
      item_status: item_status,
    };

    const result = await auctioo.put(`/events/${auctionId}/items/${itemId}`, dataPayload);

    if (!result.data.success) {
      throw new Error(result.data.message);
    }
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
