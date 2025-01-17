const certificateTemplate = ({
  id,
  watermark,
  artworkImage,
  qrCode,
  title,
  artist,
  certificateSerial,
  size,
  signature,
  description,
  material,
}) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <title>Certificate Template</title>
      <style>
        body {
          position: relative;
          margin: 0;
          font-size: 12px;
          font-family: "Open Sans", sans-serif;
        }
        p {
          margin: 0;
          line-height: 1.75;
        }
        strong {
          font-weight: 700;
        }
        .main-container {
          width: 100%;
          height: 595px;
          max-width: 100%;
          max-height: 595px;
          position: relative;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 115% 95%;
        }
        .watermark {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .watermark img {
          position: absolute;
          width: 50%;
          height: 50%;
          top: 25%;
          left: 25%;
          -o-object-fit: contain;
             object-fit: contain;
          opacity: 0.1;
        }
        .container {
          height: 85%;
          width: 80%;
          margin: 0 auto;
          position: relative;
          top: 7.5%;
        }
        .icon-img img {
          width: auto;
          height: 25px;
          -o-object-fit: contain;
          object-fit: contain;
        }
        .title-img img {
          width: auto;
          height: 50px;
          -o-object-fit: contain;
          object-fit: contain;
        }
        .subtitle-section {
          margin: 5px auto 20px;
        }
        .artwork-section {
          margin: 5px auto;
          height: 200px;
        }
        .artwork-img {
          text-align: right;
          position:relative;
        }
        .artwork-img img {
          position:relative;
          max-width: calc(100% - 20px);
          max-height: 200px;
          -o-object-fit: contain;
          object-fit: contain;
          margin-right:20px;
        }
        .signature-section {
          margin: 0px 0;
        }
        .signature-img {
          border-bottom: 1px solid #eda624;
          width: 50%;
          margin: auto;
          padding-bottom: 10px;
        }
        .signature-img img {
          width: auto;
          height: 70px;
          -o-object-fit: contain;
          object-fit: contain;
        }
        .qrcode-img {
          text-align: center;
          width: 80px;
          height: 80px;
          -o-object-fit: contain;
          object-fit: contain;
        }
        .serial-number {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-item-align: end;
          align-self: flex-end;
          position: relative;
          margin-top: 20px;
          font-size:8px;
        }
        .align-center {
          text-align: center;
        }
        .flex-box {
          width: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          position: relative;
        }
        .col-12 {
          width: 100%;
        }
        .col-6 {
          width: 50%;
        }
        .flex-center {
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
      </style>
    </head>
    <body>
    <div class="main-container">
    ${
      watermark
        ? '<div class="watermark"><img src="http://localhost:3000/images/logo.png"/></div>'
        : ""
    }
      <div class="container">
        <div class="col-12 icon-img align-center">
          <img src=http://localhost:3000/images/logo.png />
        </div>
        <div class="col-12 title-img align-center">
          <img src="http://localhost:3000/images/certificate-title.svg" />
        </div>
        <div class="subtitle-section col-12">
          <p class="align-center" style="margin: 0">
            This artwork is one-of-a-kind authentic, original artwork.
          </p>
          <p class="align-center" style="margin: 0">
            All copyright and reproduction rights are reserved by the artist
          </p>
        </div>

        <div class="col-12">
          <div class="flex-box artwork-section col-12">
            <div class="col-6 artwork-img">
              <img src="${
                artworkImage ? artworkImage : "http://localhost:3000/images/artwork-2.jpg"
              }" />
            </div>
            <div class="col-6">
              <p><strong>Title : </strong><span>${title ? title : "Artwork Title"}</span></p>
              <p><strong>Artist : </strong><span>${artist ? artist : "Another Artist"}</span></p>
              <p><strong>Media : </strong><span>${
                material ? material : "Media on canvas"
              }</span></p>
              <p><strong>Size : </strong><span>${size ? size : "100 x 150"} cm</span></p>
              <p>
                <strong>Artwork Details : </strong><br />
                <span> ${description ? description : ""} </span>
              </p>
            </div>
          </div>
        </div>

        <div class="flex-box signature-section">
          <div class="col-6 flex-box flex-center">
            <div class="qrcode-img">${qrCode ? qrCode : ""}</div>
          </div>
          <div class="col-6 align-center">
            <div class="signature-img">${
              signature
                ? '<img src="' + signature + '" />'
                : "<div style='width:100%; height:70px'></div>"
            }</div>
            <div class="col-6 align-center" style="margin: auto">
              <p style="width: 100%; font-size: 12px">${artist ? artist : ""}</p>
            </div>
          </div>
        </div>
        <div class="align-center serial-number flex-center col-12">
          <p style="margin: 0">${certificateSerial}</p>
        </div>
      </div>
    </div>
  </body>
  </html>`;
};

export default certificateTemplate;
