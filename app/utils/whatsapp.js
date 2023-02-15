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
        to: "6282247352553",
        type: "template",
        template: {
          name: "otpmessage",
          language: {
            code: "id",
          },
          components: [
            {
              type: "header",
              parameters: [
                {
                  type: "image",
                  image: {
                    link: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
                  },
                },
              ],
            },
            {
              type: "body",
              parameters: [
                {
                  type: "text",
                  text: "Yosa Rama",
                },
                {
                  type: "text",
                  text: "ART-123-123",
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
