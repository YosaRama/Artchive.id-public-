// Query
import { CREATE_DATA, GET_DATA } from "dashboard/database/query/_template";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "Template"; //TODO : Change with entity name//

//? ============== GET ENDPOINT ============= ?//
apiHandler.get(async (req, res) => {
  try {
    const result = await GET_DATA();
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
// * ====================================== * //

//? ============== POST ENDPOINT ============= ?//
apiHandler.post(async (req, res) => {
  try {
    const result = await CREATE_DATA({});
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
// * ====================================== * //

export default apiHandler;
