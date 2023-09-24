// Helper
import auctioo from "app/utils/auctioo";
import nextConnect from "next-connect";
import moment from "moment";
import { GET_ARTWORK_BY_SKU } from "app/database/query/artwork";

const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  const { auctionId, search } = req.query;
  try {
    const result = await auctioo.get(`/events/${auctionId}/items`);

    if (!result.data.success) {
      throw new Error(result.data.message);
    }

    const auctiooData = await result.data.result;
    const data = await Promise.all(
      auctiooData?.map(async (item) => {
        const artworkDetails = await GET_ARTWORK_BY_SKU({ sku: item.item_id });
        return {
          auction_details: item,
          artwork_details: artworkDetails,
        };
      })
    );

    let dataParse;
    if (search) {
      dataParse = data.filter(
        (item) =>
          item?.artwork_details?.title?.toLowerCase()?.includes(search?.toLowerCase()) ||
          item?.auction_details?.lot == search
      );
    } else {
      dataParse = data;
    }

    res
      .status(200)
      .json({ success: true, message: "Successfully retrieve item list", data: dataParse });
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
    start_estimation,
    end_estimation,
    item_status,
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
      start_estimation: start_estimation,
      end_estimation: end_estimation,
      item_status: item_status,
      started_at: moment(started_at).toISOString(),
      stopped_at: moment(stopped_at).toISOString(),
    };
    const result = await auctioo.post(`/events/${auctionId}/items`, dataPayload);

    if (!result.data.success) {
      throw new Error(result.data.message);
    }

    res.status(200).json({ success: true, message: "Successfully add auction items" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

export default apiHandler;
