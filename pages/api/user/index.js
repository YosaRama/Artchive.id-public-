import { CREATE_USER, GET_TOTAL_USER, GET_USER } from "app/database/query/user";
import { CREATE_DATA, GET_DATA } from "app/database/query/_template";
import { hashPassword } from "app/helpers/auth";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

// GET HANDLER
apiHandler.get(async (req, res) => {
  try {
    const result = await GET_USER();
    const total = await GET_TOTAL_USER();
    if (result) {
      res.status(200).json({
        success: true,
        message: "Successfully get data",
        data: result,
        total: total,
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
  const { email, fullName, password, role } = req.body;
  const hashedPassword = await hashPassword(password);
  try {
    const result = await CREATE_USER({
      email,
      fullName,
      password: hashedPassword,
      role,
    });
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
