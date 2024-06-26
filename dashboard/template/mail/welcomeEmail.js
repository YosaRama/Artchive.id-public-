// Layout
import mailLayout from "dashboard/template/mail/mailLayout";

// Site Details
const siteURL = `${process.env.NEXT_PUBLIC_SITE_URL}`;

export default function RegisterWelcomeEmail() {
  const mailContent = `<table class="main">
                          <!-- START MAIN CONTENT AREA -->
                          <tr>
                            <td class="wrapper">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td align="center">
                                    <h3 style="font-weight:bold; font-size:28px;">Welcome to Artchive.id</h3>
                                    <p>
                                      Thank you for join with us!. You're now part of Artchive.id community. Artchive.id is Online Gallery Platform, 
                                      you can <strong>Find Luxury Artwork</strong>, <strong>Buy Amazing Artwork</strong>, 
                                      <strong>Selling Your Incredible Artwork</strong>, and <strong>Get Featured Artwork NFT</strong>.    
                                    </p>
                                    <p>
                                      If you have some question just feel free contact us on our social media 
                                      or email us at <span><a href="mailto:info@artchive.id">info@artchive.id</a></span>
                                    </p>
                                    <br>
                                    <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                                      <tbody>
                                        <tr>
                                          <td align="center">
                                            <table border="0" cellpadding="0" cellspacing="0">
                                              <tbody>
                                                <tr>
                                                  <td>
                                                    <a href="${siteURL}" target="_blank" style="color:#ffffff;">Explore Now</a>
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
