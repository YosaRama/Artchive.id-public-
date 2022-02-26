// Layout
import mailLayout from "app/template/mail/mailLayout";

// Site Details
const siteURL = `${process.env.SITE_URL}`;
console.log(siteURL);

export default function RegisterVerification({ fullName, link }) {
  const mailContent = `<table class="main">
                          <!-- START MAIN CONTENT AREA -->
                          <tr>
                            <td class="wrapper">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td>
                                    <p>Hi ${fullName},</p>
                                    <br>
                                    <p>Welcome to <strong>Artchive.id</strong>,</p>
                                    <br>
                                    <p>To complete email verification, please press the button below.</p>
                                    <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                                    <tbody>
                                      <tr>
                                        <td align="left">
                                          <table border="0" cellpadding="0" cellspacing="0">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <a href="${link}" target="_blank" style="color:#ffffff;">Verify Your Account</a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <p>Or verify using this link: <span><a href="${link}">${link}</a></span></p>
                                  <br>
                                  <p>If you didn't create an account on Artchive.id using this address, please just ignore this email.</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <!-- END MAIN CONTENT AREA -->
                        </table>`;
  return mailLayout(mailContent);
}
