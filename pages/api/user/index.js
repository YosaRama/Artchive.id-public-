// Query
import {
  CHECK_USER_BY_SLUG,
  CREATE_USER,
  GET_TOTAL_USER,
  GET_USER,
  GET_USER_BY_EMAIL,
} from "dashboard/database/query/user";

// Libs
import { hashPassword } from "dashboard/helpers/auth";
import nextConnect from "next-connect";
import { slugParse } from "dashboard/helpers/slugParse";

const apiHandler = nextConnect();
const messageHead = "Users";

//#region GET HANDLER
apiHandler.get(async (req, res) => {
  const { page, limit, role, email, fullName, client, phone } = req.query;
  try {
    const result = await GET_USER({
      page,
      limit,
      role,
      email,
      fullName,
      client,
      phoneNumber: phone,
    });
    const total = await GET_TOTAL_USER({ role, email, fullName, client, phoneNumber: phone });

    // Clean up Data
    delete result["password"];
    // ========================

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
        total: total,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});
//#endregion

// POST HANDLER
apiHandler.post(async (req, res) => {
  const { email, fullName, password, role } = req.body;
  // Hash password
  const hashedPassword = await hashPassword(password);
  // Create Slug
  const slug = await slugParse({
    slugData: fullName,
    checkSlugFunc: CHECK_USER_BY_SLUG,
  });
  // Handle Check Exist User
  const existUser = await GET_USER_BY_EMAIL({ email: email });

  try {
    if (existUser) {
      res.status(200).json({
        success: "EXIST",
        message: `User Exist`,
      });
    }
    const result = await CREATE_USER({
      email,
      fullName,
      password: hashedPassword,
      role,
      slug,
      provider: "CREDENTIALS",
    });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully Create New ${messageHead}`,
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
