// Layout
import mailLayout from "app/template/mail/mailLayout";

// Site Details
const siteURL = `${process.env.SITE_URL}`;

export default function RegisterVerification() {
  const mailContent = `<table class="main">
                          <!-- START MAIN CONTENT AREA -->
                          <tr>
                            <td class="wrapper">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td>
                                    <p>Hi [EMAIL],</p>
                                    <br>
                                    <p>Thank you for registration lorem ipsum dolor sit amet</p>
                                    <br>
                                    <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                                    <tbody>
                                      <tr>
                                        <td align="left">
                                          <table border="0" cellpadding="0" cellspacing="0">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <a href="${siteURL}" target="_blank" style="color:#ffffff;">Verify Your Account</a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <!-- END MAIN CONTENT AREA -->
                        </table>`;
  return mailLayout(mailContent);
}
