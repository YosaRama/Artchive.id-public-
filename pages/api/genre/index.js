// Query
import { GET_GENRE, CREATE_GENRE, GET_TOTAL_GENRE } from "dashboard/database/query/genre";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "Genre";

// GET HANDLER
apiHandler.get(async (req, res) => {
  const { limit, page } = req.query;
  try {
    const result = await GET_GENRE({ limit, page });
    const total = await GET_TOTAL_GENRE();
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
  const { title } = req.body;
  try {
    const result = await CREATE_GENRE({ title });
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
      error_code: error.code,
    });
  }
});

export default apiHandler;
