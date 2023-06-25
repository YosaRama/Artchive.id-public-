// Libs
import nextConnect from "next-connect";
const apiHandler = nextConnect();

// Queries
import { GET_ALL_ARTWORK_SLUG, GET_ARTWORK } from "app/database/query/artwork";
import { GET_ALL_ARTIST_SLUG } from "app/database/query/user";
import { sendOtpMessage } from "app/utils/whatsapp";

apiHandler.get(async (req, res) => {
  try {
    const result = await sendOtpMessage({
      phoneNumber: "6281236947277",
      fullName: "Yosa Rama",
      otpCode: "ART-123-432",
    });
    res.status(200).json({ success: true, message: "Successfully get data", data: result });
  } catch (error) {
    res.status(200).json({ success: false, message: "Something Wrong!", error: error.message });
  }
});

export default apiHandler;
