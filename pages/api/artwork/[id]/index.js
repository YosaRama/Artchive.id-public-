// Libs
import nextConnect from "next-connect";

// Query
import { GET_ARTWORK_BY_ID, UPDATE_ARTWORK, DELETE_ARTWORK } from "app/database/query/artwork";

// Helper
import { stringCapitalize } from "app/helpers/capitalize";

const apiHandler = nextConnect();
const messageHead = "artwork";

// GET SINGLE HANDLER
apiHandler.get(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await GET_ARTWORK_BY_ID({ id });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully get single ${messageHead} - ${id}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed get single ${messageHead} - ${id}`,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});

// EDIT SINGLE HANDLER
apiHandler.put(async (req, res) => {
  const id = req.query.id;
  const {
    sku,
    artist_id,
    title,
    year,
    material,
    description,
    genre_id,
    type,
    height,
    width,
    price,
    markupPrice,
    status,
    approve,
    curatorial_pick,
  } = req.body;
  const titleParse = stringCapitalize(title);

  try {
    const result = await UPDATE_ARTWORK({
      id,
      sku,
      artist_id,
      title: titleParse,
      year,
      material,
      description,
      genre_id,
      type,
      height,
      width,
      price,
      markupPrice,
      status,
      approve,
      curatorial_pick,
    });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully update ${messageHead} - ${id}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed update ${messageHead} - ${id}`,
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

// DELETE SINGLE HANDLER
apiHandler.delete(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await DELETE_ARTWORK({ id });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully delete ${messageHead} - ${id}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed delete ${messageHead} - ${id}`,
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
