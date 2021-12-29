// Query
import { GET_ARTWORK, CREATE_ARTWORK, GET_TOTAL_ARTWORK } from "app/database/query/artwork";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "artwork";

// GET HANDLER
apiHandler.get(async (req, res) => {
  const { page, limit } = req.query;
  try {
    const result = await GET_ARTWORK({ page, limit });
    const total = await GET_TOTAL_ARTWORK();
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully get ${messageHead}`,
        data: result,
        total: total,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed get ${messageHead}`,
        data: result,
        total: total,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});

// POST HANDLER
apiHandler.post(async (req, res) => {
  const {
    sku,
    artist_id,
    title,
    year,
    material,
    description,
    genre_id,
    media_id,
    type,
    height,
    width,
    price,
    status,
    approve,
  } = req.body;
  try {
    const result = await CREATE_ARTWORK({
      sku,
      artist_id,
      title,
      year,
      material,
      description,
      genre_id,
      media_id,
      type,
      height,
      width,
      price,
      status,
      approve,
    });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully create ${messageHead}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed create ${messageHead}`,
        data: result,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});

export default apiHandler;
