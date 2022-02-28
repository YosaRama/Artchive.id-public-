// Query
import { GET_USER_BY_EMAIL } from "app/database/query/user";

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
  const userDetails = await GET_USER_BY_EMAIL({ email });
  const userId = userDetails.id;
  try {
    const sendMail = await mailer({
      to: email,
      from: `${process.env.SMTP_MAIL_FROM}`,
      subject: "Account Verification",
      html: RegisterVerification({
        fullName: fullName,
        link: `${process.env.SITE_URL}register/thank-you/${userId}/${email}/${encodeURIComponent(
          hashEmail
        )}`,
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
