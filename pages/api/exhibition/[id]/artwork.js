// Libs
import nextConnect from "next-connect";
const apiHandler = nextConnect();
const messageHead = "Artwork on Exhibitions";

// Queries
import {
  UPDATE_EXHIBITION_ARTWORK,
  DELETE_EXHIBITION_ARTWORK,
} from "app/database/query/exhibition";

apiHandler.put(async (req, res) => {
  const id = req.query.id;
  const { artworkId, price } = req.body;

  try {
    const result = await UPDATE_EXHIBITION_ARTWORK({ id: id, artworkId: artworkId, price: price });
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

apiHandler.delete(async (req, res) => {
  const { id, artworkId } = req.query;

  try {
    const result = await DELETE_EXHIBITION_ARTWORK({ id, artworkId: artworkId });
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
