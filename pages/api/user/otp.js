// Query
import { GET_USER_BY_PHONE_NUMBER, UPDATE_USER_OTP } from "app/database/query/user";
import { generateOtp } from "app/utils/otp-generator";
import { sendOtpMessage } from "app/utils/whatsapp";
import moment from "moment";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();

//#region Get Endpoint
apiHandler.get(async (req, res) => {
  const { phone, otp } = req.body;
  try {
    const currentTime = moment();
    const result = await GET_USER_BY_PHONE_NUMBER({ phoneNumber: phone });
    const tokenExpired = result.otp_expired_date;
    const isValid = currentTime.isBefore(moment(tokenExpired)) && otp === result.otp_code;
    if (isValid) {
      res.status(200).json({
        success: true,
        message: "Successfully get OTP",
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});

//#region Post Endpoint
apiHandler.post(async (req, res) => {
  const { phone } = req.body;
  try {
    const result = await GET_USER_BY_PHONE_NUMBER({ phoneNumber: `${phone}` });
    const otpCode = generateOtp();
    if (result) {
      const sendOtp = await sendOtpMessage({
        phoneNumber: result.phone_number,
        fullName: result.full_name,
        otpCode: otpCode,
      });
      const saveOtp = await UPDATE_USER_OTP({ id: result.id, otp: otpCode });
      if (sendOtp && saveOtp) {
        res.status(200).json({
          success: true,
          message: `Successfully send otp to ${phone}`,
          data: result,
        });
      }
    } else {
      res.status(200).json({
        success: false,
        message: `Failed send otp to ${phone}`,
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
