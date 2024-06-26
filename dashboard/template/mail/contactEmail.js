// Layout
import mailLayout from "dashboard/template/mail/mailLayout";

// Site Details
const siteURL = `${process.env.NEXT_PUBLIC_SITE_URL}`;

export default function ContactEmail({ name, message }) {
  const mailContent = `
  <table class="main">
    <!-- START MAIN CONTENT AREA -->
    <tr>
      <td class="wrapper">
        <table border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <p>Hi Admin,</p>
              </br>
              <p>You have new message from Artchive.id Website.</p>
              <p>
                <strong>Name</strong>
                </br>
                ${name}
              </p>
              <p style="border-bottom: #d9d9d9 solid 1px; padding-bottom: 40px;">
                <strong>Message</strong>
                </br>
                ${message}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- END MAIN CONTENT AREA -->
  </table>
  `;
  return mailLayout(mailContent);
}
