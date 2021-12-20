import {
  DELETE_USER,
  GET_USER_BY_EMAIL,
  GET_USER_BY_ID,
  UPDATE_USER,
  UPDATE_USER_PASSWORD,
} from "app/database/query/user";
import { hashPassword } from "app/helpers/auth";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

// GET SINGLE HANDLER
apiHandler.get(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await GET_USER_BY_ID({ id });
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
  const { email, fullName } = req.body;
  try {
    const result = await UPDATE_USER({ id, email, fullName });
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

// PATCH SINGLE HANDLER FOR RESET PASSWORD
apiHandler.patch(async (req, res) => {
  const id = req.query.id;
  const { email, password } = req.body;
  const hashedPassword = hashPassword(password);
  try {
    const userFound = await GET_USER_BY_EMAIL({ email });
    if (!userFound) {
      res.status(200).json({
        success: false,
        message: "User not found!",
      });
    }
    const result = await UPDATE_USER_PASSWORD({ password: hashedPassword });
    if (result) {
      res
        .status(200)
        .json({ success: true, message: "Success update password" });
    } else {
      res.status(200).json({ success: false, message: "Something Error!" });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Failed patch data",
    });
  }
});

// DELETE SINGLE HANDLER
apiHandler.delete(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await DELETE_USER({ id });
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
