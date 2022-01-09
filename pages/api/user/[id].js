// Query
import {
  DELETE_USER,
  GET_USER_BY_EMAIL,
  GET_USER_BY_ID,
  UPDATE_USER,
  UPDATE_USER_PASSWORD,
} from "app/database/query/user";

// Libs
import { hashPassword } from "app/helpers/auth";
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "User";

// GET SINGLE HANDLER
apiHandler.get(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await GET_USER_BY_ID({ id });

    // Clean up Data
    delete result["password"];
    // ========================

    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully Get ${messageHead} - ${id}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed Get ${messageHead} - ${id}`,
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

// EDIT SINGLE HANDLER
apiHandler.put(async (req, res) => {
  const id = req.query.id;
  const { email, fullName, city, address, instagramUrl, facebookUrl } = req.body;
  try {
    const result = await UPDATE_USER({
      id,
      email,
      fullName,
      city,
      address,
      instagramUrl,
      facebookUrl,
    });
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

// PATCH SINGLE HANDLER FOR RESET PASSWORD
apiHandler.patch(async (req, res) => {
  const id = req.query.id;
  const { email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  try {
    const userFound = await GET_USER_BY_EMAIL({ email });
    if (!userFound) {
      res.status(200).json({
        success: false,
        message: "User not found!",
      });
    }
    const result = await UPDATE_USER_PASSWORD({
      password: hashedPassword,
      id: +id,
    });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Success Update ${messageHead} - ${id} Password`,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Something Error!",
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
    const result = await DELETE_USER({ id });
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
