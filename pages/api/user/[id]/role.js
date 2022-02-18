// Query
import { UPDATE_USER_ROLE } from "app/database/query/user";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "user role";

// EDIT SINGLE HANDLER
apiHandler.patch(async (req, res) => {
  const id = req.query.id;
  const { role } = req.body;
  try {
    const result = await UPDATE_USER_ROLE({ id, role });
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
