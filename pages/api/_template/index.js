import { CREATE_DATA, GET_DATA } from "app/database/query/_template";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

// GET HANDLER
apiHandler.get(async (req, res) => {
  try {
    const result = await GET_DATA();
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

// POST HANDLER
apiHandler.post(async (req, res) => {
  try {
    const result = await CREATE_DATA({});
    if (result) {
      res.status(200).json({
        success: true,
        message: "Successfully create data",
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Failed create data to database",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: "Failed create data",
    });
  }
});

export default apiHandler;
