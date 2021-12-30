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
import { CREATE_CERTIFICATE } from "app/database/query/certificate";

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
    certificateId,
    title,
    artist,
    artistId,
    artworkDate,
    size,
    signature,
    description,
    material,
    artworkImage,
  } = req.body;
  // ====================

  // Certificate Details
  const certificateSerial = `ARTCHIVE/ART-${id}/${artworkDate}/${artistId}/${moment().format(
    "DDMMYYYY"
  )}/${certificateId}`;
  const certificateKeys = `ARTIST-${artistId}/ART-${id}/CERTIFICATE/certificate-${certificateId}.pdf`;
  // ====================

  //? ============== Generate QR Code ============= ?//

  const qrCode = QRCode.toString(
    `${process.env.NEXT_PUBLIC_S3_URL}/${certificateKeys}`,
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
    certificateSerial: certificateSerial,
    size: size,
    signature: signature,
    signatureName: artist,
    description: description,
    material: material,
  });

  // * ====================================== * //

  pdf
    .create(certificate, { format: "A4", orientation: "landscape", quality: "100", type: "pdf" })
    .toBuffer(function (err, buffer) {
      s3.upload(
        {
          Bucket: bucketName,
          ACL: "public-read",
          ContentType: "application/pdf",
          Body: buffer,
          Key: certificateKeys,
        },
        async function (err, data) {
          if (!err) {
            try {
              const result = await CREATE_CERTIFICATE({
                artistId: +artistId,
                artworkId: +id,
                serialNumber: certificateSerial,
                url: certificateKeys,
              });
              if (result) {
                res
                  .status(200)
                  .json({ success: true, data: data, message: "Success save certificate" });
              } else {
                res
                  .status(200)
                  .json({ success: false, data: data, message: "Failed save certificate" });
              }
            } catch (error) {
              res.status(200).json({ success: false, data: data, message: error.message });
            }
          } else {
            res.status(200).json({ success: false, data: data, message: err });
          }
        }
      );
    });
});

// * ====================================== * //

export default apiHandler;
