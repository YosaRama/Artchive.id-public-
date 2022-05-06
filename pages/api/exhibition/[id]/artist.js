// Libs
import nextConnect from "next-connect";
const apiHandler = nextConnect();
const messageHead = "Artist on Exhibitions";

// Queries
import { UPDATE_EXHIBITION_ARTIST, DELETE_EXHIBITION_ARTIST } from "app/database/query/exhibition";

apiHandler.put(async (req, res) => {
  const id = req.query.id;
  const { artistId } = req.body;

  try {
    const result = await UPDATE_EXHIBITION_ARTIST({ id: id, artistId: artistId });
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
  const { id, artistId } = req.query;

  try {
    const result = await DELETE_EXHIBITION_ARTIST({ id, artistId: artistId });
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
