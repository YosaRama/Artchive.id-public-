// Query
import { GET_ARTICLES, GET_TOTAL_ARTICLES, CREATE_ARTICLES } from "app/database/query/articles";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "Articles";

// GET HANDLER
apiHandler.get(async (req, res) => {
  const { page, limit } = req.query;
  try {
    const result = await GET_ARTICLES({ page, limit });
    const total = await GET_TOTAL_ARTICLES();
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
  const data = req.body;

  try {
    const result = await CREATE_ARTICLES({ data });
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
