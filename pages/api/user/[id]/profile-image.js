// Query
import { UPDATE_USER_PROFILE_IMAGE } from "dashboard/database/query/user";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "profile image";

// EDIT SINGLE HANDLER
apiHandler.put(async (req, res) => {
  const id = req.query.id;
  const { profileId } = req.body;
  try {
    const result = await UPDATE_USER_PROFILE_IMAGE({ id, profileId });
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
