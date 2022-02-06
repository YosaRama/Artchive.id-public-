// Templates
import RegisterWelcomeEmail from "app/template/mail/welcomeEmail";

// Libs
import nextConnect from "next-connect";
import mailer from "app/utils/mailer";

const apiHandler = nextConnect();

// GET HANDLER
apiHandler.post(async (req, res) => {
  const { email } = req.body; // Data for mail template
  try {
    const sendMail = mailer({
      to: email,
      from: `${process.env.SMTP_MAIL_FROM}`,
      subject: "Welcome to Artchive.id",
      html: RegisterWelcomeEmail(),
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
