// Templates
import RegisterVerification from "app/template/mail/registerVerification";

// Libs
import nextConnect from "next-connect";
import mailer from "app/utils/mailer";

// Helper
import { hashPassword } from "app/helpers/auth";

const apiHandler = nextConnect();

// GET HANDLER
apiHandler.post(async (req, res) => {
  const { email, fullName } = req.body; // Data for mail template
  const hashEmail = await hashPassword(email);
  try {
    const sendMail = mailer({
      to: email,
      from: `${process.env.SMTP_MAIL_FROM}`,
      subject: "Account Verification",
      html: RegisterVerification({
        fullName: fullName,
        link: `/register/thank-you/${email}/${encodeURIComponent(hashEmail)}`,
      }),
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
