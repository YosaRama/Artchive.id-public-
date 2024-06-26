// Query
import { CREATE_ARTWORK_GALLERY, DELETE_ARTWORK_GALLERY } from "dashboard/database/query/artwork";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "Artwork gallery image";

// ADD GALLERY IMAGE
apiHandler.post(async (req, res) => {
  const id = req.query.id;
  const { galleryId } = req.body;
  try {
    const result = await CREATE_ARTWORK_GALLERY({ id, gallery_id: galleryId });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully add ${messageHead} - ${id}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed add ${messageHead} - ${id}`,
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

// DELETE GALLERY IMAGE
apiHandler.put(async (req, res) => {
  const id = req.query.id;
  const { galleryId } = req.body;
  try {
    const result = await DELETE_ARTWORK_GALLERY({ id, gallery_id: galleryId });
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
