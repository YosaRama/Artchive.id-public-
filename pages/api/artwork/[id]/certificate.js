// Libs
import nextConnect from "next-connect";
import pdf from "html-pdf";
import QRCode from "qrcode";
import moment from "moment";
const apiHandler = nextConnect();

// Upload Libs
import aws from "aws-sdk";

// Template
import certificateTemplate from "app/template/certificateTemplate";

//? ============== AWS CONFIGURATION ============= ?//

aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_KEY_ID,
});
const bucketName = process.env.S3_BUCKET_NAME;
const s3 = new aws.S3();

// * ====================================== * //

//? ============== Upload certificate on S3 ============= ?//
apiHandler.post(async (req, res) => {
  // Artwork ID
  const { id } = req.query;
  // ====================

  // Certificate Data
  //TODO : Property get from database with artwork ID
  const {
    title,
    artist,
    artistId,
    artworkDate,
    size,
    signature,
    description,
    media,
    artworkImage,
  } = req.body;
  // ====================

  // Certificate ID
  const certificateId = `ARTCHIVE/ART-${id}/${artworkDate}/${artistId}/${moment().format(
    "DDMMYYYY"
  )}`;
  // ====================

  //? ============== Generate QR Code ============= ?//

  const qrCode = QRCode.toString(
    `${process.env.NEXT_PUBLIC_S3_URL}/certificate-${id}.pdf`,
    { type: "svg" },
    function (err, res) {
      return res;
    }
  );

  // * ====================================== * //

  //? ============== Certificate HTML Template ============= ?//

  const certificate = certificateTemplate({
    id: id,
    artworkImage: artworkImage,
    qrCode: qrCode,
    title: title,
    artist: artist,
    certificateId: certificateId,
    size: size,
    signature: signature,
    signatureName: artist,
    description: description,
    media: media,
  });

  // * ====================================== * //

  pdf
    .create(certificate, { format: "A4", orientation: "landscape", quality: "100", type: "pdf" })
    .toBuffer(function (err, buffer) {
      s3.upload(
        {
          Bucket: process.env.S3_BUCKET_NAME,
          ACL: "public-read",
          ContentType: "application/pdf",
          Body: buffer,
          Key: `certificate-${id}.pdf`,
        },
        function (err, data) {
          if (!err) {
            res.status(200).json({ status: true, data: data, message: "Success save certificate" });
          } else {
            res.status(200).json({ status: false, data: data, message: err });
          }
        }
      );
    });
});

// * ====================================== * //

export default apiHandler;
