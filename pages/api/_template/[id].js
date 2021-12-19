import {
  DELETE_DATA,
  GET_DATA_BY_ID,
  UPDATE_DATA,
} from "app/database/query/_template";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

// GET SINGLE HANDLER
apiHandler.get(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await GET_DATA_BY_ID({ id });
    if (result) {
      res.status(200).json({
        success: true,
        message: "Successfully get data",
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Failed get data from database",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: "Failed get data",
    });
  }
});

// EDIT SINGLE HANDLER
apiHandler.put(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await UPDATE_DATA({ id });
    if (result) {
      res.status(200).json({
        success: true,
        message: "Successfully update data",
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Failed update data from database",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: "Failed update data",
    });
  }
});

// DELETE SINGLE HANDLER
apiHandler.delete(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await DELETE_DATA({ id });
    if (result) {
      res.status(200).json({
        success: true,
        message: "Successfully delete data",
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Failed delete data from database",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: "Failed delete data",
    });
  }
});

export default apiHandler;
