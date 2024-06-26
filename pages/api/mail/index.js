// Templates
import RegisterVerification from "dashboard/template/mail/registerVerification";

// Libs
import nextConnect from "next-connect";
import mailer from "dashboard/utils/mailer";

const apiHandler = nextConnect();

// GET HANDLER
apiHandler.post(async (req, res) => {
  const {} = req.body; // Data for mail template
  try {
    const sendMail = mailer({
      to: "yosamelody07@gmail.com",
      from: "halo@yosa.com",
      subject: "Just Testing",
      html: RegisterVerification({ fullName: "Yosa Rama", link: "/register" }),
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
