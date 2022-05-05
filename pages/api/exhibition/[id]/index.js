// Libs
import moment from "moment";

// Query
import {
  GET_EXHIBITION_BY_ID,
  UPDATE_EXHIBITION_DETAILS,
  DELETE_EXHIBITION,
} from "app/database/query/exhibition";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "Exhibitions";

// GET SINGLE HANDLER
apiHandler.get(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await GET_EXHIBITION_BY_ID({ id });
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

// EDIT SINGLE HANDLER
apiHandler.put(async (req, res) => {
  const id = req.query.id;
  const request = req.body;

  //? ============== Handle Data Parse ============= ?//
  const data = {
    ...request,
    startDate: moment(request.startDate).format(),
    endDate: moment(request.endDate).format(),
  };
  // * ====================================== * //

  try {
    const result = await UPDATE_EXHIBITION_DETAILS({ id: id, data: data });
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

// DELETE SINGLE HANDLER
apiHandler.delete(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await DELETE_EXHIBITION({ id });
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
