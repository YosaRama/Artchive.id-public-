// Query
import { GET_ORDER, GET_TOTAL_ORDER } from "app/database/query/order";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "Order";

//? ============== Get API ============= ?//
apiHandler.get(async (req, res) => {
  const { userId, status, page, limit } = req.query;

  try {
    const result = await GET_ORDER({ userId: userId, status: status, page: page, limit: limit });
    const total = await GET_TOTAL_ORDER({ userId: userId, status: status });
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
// * ====================================== * //

export default apiHandler;
