// Query
import { UPDATE_ARTWORK_COVER_IMAGE } from "app/database/query/artwork";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "Artwork Image";

// EDIT SINGLE HANDLER
apiHandler.put(async (req, res) => {
  const id = req.query.id;
  const { coverId } = req.body;
  try {
    const result = await UPDATE_ARTWORK_COVER_IMAGE({ id, cover_id: coverId });
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

export default apiHandler;
