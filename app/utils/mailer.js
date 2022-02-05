// Libs
import nodemailer from "nodemailer";

async function mailer({ from, to, subject, html }) {
  //? ============== Create Transport ============= ?//
  let transporter = nodemailer.createTransport({
    host: `${process.env.SMTP_HOST}`,
    port: `${process.env.SMTP_PORT}`,
    secure: false, //TODO : Change to true when use port 465
    auth: {
      user: `${process.env.SMTP_USER}`,
      pass: `${process.env.SMTP_PASS}`,
    },
  });
  // * ====================================== * //

  //? ============== Send Email ============= ?//
  let send = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    html: html,
  });
  // * ====================================== * //

  if (send) {
    return true;
  } else {
    false;
  }
}

export default mailer;
