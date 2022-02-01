// Query
import {
  GET_ARTWORK,
  CREATE_ARTWORK,
  GET_TOTAL_ARTWORK,
  CHECK_ARTWORK_BY_SLUG,
} from "app/database/query/artwork";

// Libs
import { slugParse } from "app/helpers/slugParse";
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "artwork";

// GET HANDLER
apiHandler.get(async (req, res) => {
  const { page, limit, client, artistId, slug, genreId } = req.query;
  try {
    const result = await GET_ARTWORK({ page, limit, client, artistId, slug, genreId });
    const total = await GET_TOTAL_ARTWORK({ client, artistId, slug, genreId });
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
    cover_id,
    type,
    height,
    width,
    price,
    status,
    approve,
  } = req.body;
  try {
    // Create Slug
    const slug = await slugParse({ slugData: title, checkSlugFunc: CHECK_ARTWORK_BY_SLUG });
    // ============
    const result = await CREATE_ARTWORK({
      sku,
      artist_id,
      title,
      slug,
      year,
      material,
      description,
      genre_id,
      media_id,
      cover_id,
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
