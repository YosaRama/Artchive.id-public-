// Query
import { GET_CART_BY_USER_ID, CREATE_CART } from "dashboard/database/query/cart";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "cart";

// GET HANDLER
apiHandler.get(async (req, res) => {
  const { id } = req.query;
  try {
    const result = await GET_CART_BY_USER_ID({ userId: id });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully get ${messageHead}`,
        data: result,
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
    const result = await CREATE_CART(data);
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
