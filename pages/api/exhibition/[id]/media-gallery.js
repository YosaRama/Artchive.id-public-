// Libs
import nextConnect from "next-connect";
const apiHandler = nextConnect();
const messageHead = "Artwork on Exhibitions";

// Queries
import {
  UPDATE_EXHIBITION_MEDIA_GALLERY,
  DELETE_EXHIBITION_MEDIA_GALLERY,
} from "app/database/query/exhibition";

apiHandler.put(async (req, res) => {
  const id = req.query.id;
  const { galleryId } = req.body;

  try {
    const result = await UPDATE_EXHIBITION_MEDIA_GALLERY({ id: id, mediaGallery: galleryId });
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
  const { id, galleryId } = req.query;
  console.log(galleryId);

  try {
    const result = await DELETE_EXHIBITION_MEDIA_GALLERY({ id, mediaGallery: galleryId });
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
