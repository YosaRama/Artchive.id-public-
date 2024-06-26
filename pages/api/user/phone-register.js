// Libs
import moment from "moment";

// Query
import { CHECK_USER_BY_SLUG, CREATE_USER } from "dashboard/database/query/user";

// Helper
import nextConnect from "next-connect";
import { slugParse } from "dashboard/helpers/slugParse";

const apiHandler = nextConnect();

//#region Handle validation
apiHandler.post(async (req, res) => {
  const { phone, fullName, role, otpCode } = req.body;
  try {
    const slug = await slugParse({
      slugData: fullName,
      checkSlugFunc: CHECK_USER_BY_SLUG,
    });
    const result = await CREATE_USER({
      email: "",
      password: "",
      fullName: fullName,
      phoneNumber: phone,
      provider: "PHONE_NUMBER",
      role: role,
      slug: slug,
      status: true,
      otpCode: otpCode,
      otpExpired: moment().add(10, "minutes").toISOString(),
    });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully create new user by phone number`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed create new user by phone number`,
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

export default apiHandler;
