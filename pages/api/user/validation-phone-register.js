// Query
import { GET_USER_BY_PHONE_NUMBER, UPDATE_USER_OTP } from "app/database/query/user";
import { generateOtp } from "app/utils/otp-generator";
import { sendOtpMessage } from "app/utils/whatsapp";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();

//#region Handle validation
apiHandler.post(async (req, res) => {
  const { phone, fullName } = req.body;
  try {
    const result = await GET_USER_BY_PHONE_NUMBER({ phoneNumber: `${phone}` });
    const otpCode = generateOtp();
    if (!result) {
      const sendOtp = await sendOtpMessage({
        phoneNumber: phone,
        fullName: fullName,
        otpCode: otpCode,
      });
      if (sendOtp) {
        res.status(200).json({
          success: true,
          message: `Successfully send otp to ${phone}`,
          data: {
            otp_code: otpCode,
          },
        });
      }
    } else {
      res.status(200).json({
        success: false,
        message: `Your account is already registered, please try to login`,
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
