// Libs
import nodemailer from "nodemailer";

async function mailer({ from, to, subject, html }) {
  //? ============== Create Transport ============= ?//
  let transporter = nodemailer.createTransport({
    host: `${process.env.SMTP_HOST}`,
    port: `${process.env.SMTP_PORT}`,
    auth: {
      user: `${process.env.SMTP_USER}`,
      pass: `${process.env.SMTP_PASS}`,
    },
  });
  // * ====================================== * //

  // //? ============== Send Email ============= ?//
  // let send = await transporter.sendMail({
  //   from: from,
  //   to: to,
  //   subject: subject,
  //   html: html,
  // });
  // // * ====================================== * //

  // if (send) {
  //   return true;
  // } else {
  //   false;
  // }

  const mailMessage = {
    from: from,
    to: to,
    subject: subject,
    html: html,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailMessage, function (err, info) {
      let sendStatus = "error";
      let sendInfo = "";
      if (err) sendInfo = err;
      else {
        sendStatus = "success";
        sendInfo = info;
      }
      resolve({ status: sendStatus, info: sendInfo });
    });
  });
}

export default mailer;
