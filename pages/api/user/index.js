// Query
import { CREATE_USER, GET_TOTAL_USER, GET_USER } from "app/database/query/user";

// Helper
import { hashPassword } from "app/helpers/auth";
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "Users";

// GET HANDLER
apiHandler.get(async (req, res) => {
  const { page, limit, role, email, fullName } = req.query;
  try {
    const result = await GET_USER({ page, limit, role, email, fullName });
    const total = await GET_TOTAL_USER();
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

// POST HANDLER
apiHandler.post(async (req, res) => {
  const { email, fullName, password, role } = req.body;
  // Hash password
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
        message: `Successfully Create New ${messageHead}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed Create New ${messageHead}`,
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
