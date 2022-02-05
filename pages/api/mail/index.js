// Templates
import RegisterVerification from "app/template/mail/registerVerification";

// Libs
import nextConnect from "next-connect";
import mailer from "app/utils/mailer";

const apiHandler = nextConnect();
const messageHead = "Template";

// GET HANDLER
apiHandler.get(async (req, res) => {
  try {
    const sendMail = mailer({
      to: "yosa@test.com",
      from: "halo@yosa.com",
      subject: "Just Testing",
      html: RegisterVerification(),
    });
    if (sendMail) {
      res.status(200).json({
        success: true,
        message: "Email has been send!",
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
