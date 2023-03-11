import axios from "axios";

export async function sendOtpMessage({ phoneNumber, fullName, otpCode }) {
  try {
    const result = await axios({
      url: `${process.env.FACEBOOK_API_URL}/${process.env.FACEBOOK_PHONE_NUMBER_ID}/messages`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FACEBOOK_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        messaging_product: "whatsapp",
        to: phoneNumber,
        type: "template",
        template: {
          name: "otp_message",
          language: {
            code: "en_us",
          },
          components: [
            {
              type: "body",
              parameters: [
                {
                  type: "text",
                  text: fullName,
                },
                {
                  type: "text",
                  text: otpCode,
                },
              ],
            },
            {
              type: "button",
              index: 0,
              sub_type: "url",
              parameters: [
                {
                  type: "text",
                  text: otpCode,
                },
              ],
            },
          ],
        },
      },
    });
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
