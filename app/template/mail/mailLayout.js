// Libs
import moment from "moment";
import ReactDOMServer from "react-dom/server";

// Site Details
const siteName = `${process.env.NEXT_PUBLIC_SITE_NAME}`;
const siteURL = `${process.env.NEXT_PUBLIC_SITE_URL}`;
const currentYear = moment().format("YYYY");
const currentAddress = "Padma Street, Denpasar, Bali, Indonesia, 80238";

export default function EmailLayout(mailContent) {
  const emailHTML = `<head>
                      <meta name="viewport" content="width=device-width" />
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                      <title>${siteName}</title>
                      <style>
                        /* -------------------------------------
                            GLOBAL RESETS
                        ------------------------------------- */
                        img {
                          border: none;
                          -ms-interpolation-mode: bicubic;
                          max-width: 100%; }
                        body {
                          /* background-color: #f6f6f6; */
                          background-color: #fff;
                          font-family: sans-serif;
                          -webkit-font-smoothing: antialiased;
                          font-size: 14px;
                          line-height: 1.4;
                          margin: 0;
                          padding: 0; 
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%; }
                        table {
                          border-collapse: separate;
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          width: 100%; }
                          table td {
                            font-family: sans-serif;
                            font-size: 14px;
                            vertical-align: top; }
                        /* -------------------------------------
                            BODY & CONTAINER
                        ------------------------------------- */
                        .body {
                          /* background-color: #f6f6f6; */
                          background-color: #fff;
                          width: 100%; }
                        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
                        .container {
                          display: block;
                          Margin: 0 auto !important;
                          /* makes it centered */
                          max-width: 580px;
                          padding: 10px;
                          width: 580px; }
                        /* This should also be a block element, so that it will fill 100% of the .container */
                        .content {
                          box-sizing: border-box;
                          display: block;
                          Margin: 0 auto;
                          max-width: 580px;
                          padding: 10px; }
                        /* -------------------------------------
                            HEADER, FOOTER, MAIN
                        ------------------------------------- */
                        .main {
                          background: #fff;
                          /* border-radius: 3px; */
                          border: 1px solid #e2e2e2;
                          width: 100%; }
                        .wrapper {
                          box-sizing: border-box;
                          padding: 40px 20px 20px 20px; }
                        .footer {
                          clear: both;
                          padding-top: 10px;
                          text-align: center;
                          width: 100%; }
                          .footer td,
                          .footer p,
                          .footer span,
                          .footer a {
                            color: #999999;
                            font-size: 12px;
                            text-align: center; }
                        /* -------------------------------------
                            TYPOGRAPHY
                        ------------------------------------- */
                        h1,
                        h2,
                        h3,
                        h4 {
                          color: #000000;
                          font-family: sans-serif;
                          font-weight: 400;
                          line-height: 1.4;
                          margin: 0;
                          Margin-bottom: 30px; }
                        h1 {
                          font-size: 35px;
                          font-weight: 300;
                          text-align: center;
                          text-transform: capitalize; }
                        p,
                        ul,
                        ol {
                          font-family: sans-serif;
                          font-size: 14px;
                          font-weight: normal;
                          margin: 0;
                          Margin-bottom: 15px; }
                          p li,
                          ul li,
                          ol li {
                            list-style-position: inside;
                            margin-left: 5px; }
                        a {
                          color: #e5890a;
                          text-decoration: underline; }
                        /* -------------------------------------
                            BUTTONS
                        ------------------------------------- */
                        .btn {
                          box-sizing: border-box;
                          width: 100%; }
                          .btn > tbody > tr > td {
                            padding-bottom: 15px; }
                          .btn table {
                            width: auto; }
                          .btn table td {
                            background-color: #ffffff;
                            border-radius: 5px;
                            text-align: center; }
                          .btn a {
                            background-color: #ffffff;
                            border: solid 1px #e5890a;
                            box-sizing: border-box;
                            color: #e5890a;
                            cursor: pointer;
                            display: inline-block;
                            font-size: 14px;
                            font-weight: bold;
                            margin: 0;
                            padding: 12px 25px;
                            text-decoration: none;
                            text-transform: capitalize; }
                        .btn-primary table td {
                          /* background-color: #99d031; */ }
                        .btn-primary a {
                          background-color: #e5890a;
                          border-color: #e5890a;
                          color: #ffffff; }
                        /* -------------------------------------
                            OTHER STYLES THAT MIGHT BE USEFUL
                        ------------------------------------- */
                        .last {
                          margin-bottom: 0; }
                        .first {
                          margin-top: 0; }
                        .align-center {
                          text-align: center; }
                        .align-right {
                          text-align: right; }
                        .align-left {
                          text-align: left; }
                        .clear {
                          clear: both; }
                        .mt0 {
                          margin-top: 0; }
                        .mb0 {
                          margin-bottom: 0; }
                        .preheader {
                          color: transparent;
                          display: none;
                          height: 0;
                          max-height: 0;
                          max-width: 0;
                          opacity: 0;
                          overflow: hidden;
                          mso-hide: all;
                          visibility: hidden;
                          width: 0; }
                        .powered-by a {
                          text-decoration: none; }
                        hr {
                          border: 0;
                          border-bottom: 1px solid #f6f6f6;
                          Margin: 20px 0; }
                        li{
                          display: inline;
                          list-style: none;
                        }

                        li a{
                          text-decoration: none;
                        }

                        li a:hover{
                          text-decoration: none;
                        }

                        .logo{
                          text-align: left;
                          width: 100%;
                          padding: 20px 0;
                          /* border-bottom: 1px solid #def6fe; */
                          /* border-bottom: 1px solid #c3f0ff; */
                          background: white;
                        }
                        .logo a{
                          text-decoration: none;
                        }
                        .logo a:hover{
                          text-decoration: none;
                        }
                        p{
                          line-height: 20px;
                          word-break: break-word;
                        }
                        .email-tick{
                          width: 14px;
                          height: 14px;
                        }

                        /* -------------------------------------
                            RESPONSIVE AND MOBILE FRIENDLY STYLES
                        ------------------------------------- */
                        @media only screen and (max-width: 620px) {
                          table[class=body] h1 {
                            font-size: 28px !important;
                            margin-bottom: 10px !important; }
                          table[class=body] p,
                          table[class=body] ul,
                          table[class=body] ol,
                          table[class=body] td,
                          table[class=body] span,
                          table[class=body] a {
                            font-size: 16px !important; }
                          table[class=body] .wrapper,
                          table[class=body] .article {
                            padding: 10px !important; }
                          table[class=body] .content {
                            padding: 0 !important; }
                          table[class=body] .container {
                            padding: 0 !important;
                            width: 100% !important; }
                          table[class=body] .main {
                            border-left-width: 0 !important;
                            border-radius: 0 !important;
                            border-right-width: 0 !important; }
                          table[class=body] .btn table {
                            width: 100% !important; }
                          table[class=body] .btn a {
                            width: 100% !important; }
                          table[class=body] .img-responsive {
                            height: auto !important;
                            max-width: 100% !important;
                            width: auto !important; }}
                        /* -------------------------------------
                            PRESERVE THESE STYLES IN THE HEAD
                        ------------------------------------- */
                        @media all {
                          .ExternalClass {
                            width: 100%; }
                          .ExternalClass,
                          .ExternalClass p,
                          .ExternalClass span,
                          .ExternalClass font,
                          .ExternalClass td,
                          .ExternalClass div {
                            line-height: 100%; }
                          .apple-link a {
                            color: inherit !important;
                            font-family: inherit !important;
                            font-size: inherit !important;
                            font-weight: inherit !important;
                            line-height: inherit !important;
                            text-decoration: none !important; } 
                          .btn-primary table td:hover {
                            /*background-color: #34495e !important;*/ }
                          .btn-primary a:hover {
                            background-color: transparent !important;
                            border-color: #e5890a !important; 
                            color: #e5890a !important;
                          } 
                        }
                      </style>
                    </head>
                    <body class="">
                    <!-- HEADER SECTION -->
                      <table border="0" cellpadding="0" cellspacing="0" class="body">
                        <tr>
                          <td>&nbsp;</td>
                          <td class="container">
                            <div class="content">
                              
                              <span class="preheader"></span>
                              <div class="logo">
                                <a href="${siteURL}" target="_blank">
                                  <img style="margin: 0 auto; height:40px;" src="${siteURL}/images/logo.png" height="55px" alt="Artchive.id">
                                </a>
                              </div>
                              <div style="height:150px;">
                                <img style="height:150px; width:100%; object-position:center; object-fit:cover; border-radius:5px 5px 0 0;" src="${siteURL}/images/email-header.jpg">
                              </div>
                              <! --------------------------------------- >

                              <!-- BODY SECTION -->
                              ${mailContent}
                              <! --------------------------------------- >
                            </div>


                            <!-- FOOTER SECTION -->
                            <br><br><br>
                            <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                              <tr>
                                <td align="center">
                                  <table border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                      <tr>
                                        <td align="center">
                                            <img src="${siteURL}/images/logo-without-text.png" alt="artchive.id" style="height:20px; width:100%; object-position:center; object-fit:contain;"/>
                                            <br><br>
                                            <p style="margin-bottom:0px">Copyright © ${currentYear} Artchive.id</p>
                                            <p style="margin-bottom:0px">${currentAddress}</p>
                                            <br>
                                            <div style="text-align:center; margin-bottom:30px; width:100%; padding:0px 0 20px;">
                                                <a href="https://www.facebook.com/" target="_blank">
                                                    <img style="margin: 0 auto; height:15px;" src="${siteURL}/images/facebook.png" height="35px" alt="Artchive.id">
                                                </a>
                                                <a href="https://www.instagram.com/" target="_blank">
                                                    <img style="margin: 0 auto; height:15px;" src="${siteURL}/images/instagram.png" height="35px" alt="Artchive.id">
                                                </a>
                                            </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                            <! --------------------------------------- >
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                      </table>
                    </body>`;

  return ReactDOMServer.renderToStaticMarkup(
    <html dangerouslySetInnerHTML={{ __html: emailHTML }} />
  );
}
