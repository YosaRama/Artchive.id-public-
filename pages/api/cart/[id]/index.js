// Query
import { DELETE_CART } from "dashboard/database/query/cart";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "Cart";

// DELETE SINGLE HANDLER
apiHandler.delete(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await DELETE_CART({ id });
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
