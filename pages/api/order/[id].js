// Query
import { GET_ORDER_BY_ID, UPDATE_ORDER_DETAILS } from "app/database/query/order";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "Order";

//? ============== GET ENDPOINT ============= ?//
apiHandler.get(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await GET_ORDER_BY_ID({ id });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully get single ${messageHead} - ${id}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed get single ${messageHead} - ${id}`,
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

//? ============== EDIT ENDPOINT ============= ?//
apiHandler.put(async (req, res) => {
  const { id } = req.query;
  const data = req.body;
  try {
    const result = await UPDATE_ORDER_DETAILS({ data, id });
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
// * ====================================== * //

export default apiHandler;
