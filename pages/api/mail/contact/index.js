// Templates
import ContactEmail from "app/template/mail/contactEmail";

// Libs
import nextConnect from "next-connect";
import mailer from "app/utils/mailer";

const apiHandler = nextConnect();

// GET HANDLER
apiHandler.post(async (req, res) => {
  const { name, email, message } = req.body; // Data for mail template
  try {
    const sendMail = mailer({
      to: process.env.SMTP_MAIL_FROM,
      from: email,
      subject: "New Contact from Artchive.id Website",
      html: ContactEmail({ name: name, message: message }),
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
