// Libs
import nextConnect from "next-connect";
import pdf from "html-pdf";
import QRCode from "qrcode";
import moment from "moment";
import { v4 as uuid } from "uuid";
const apiHandler = nextConnect();

// Upload Libs
import aws from "aws-sdk";

// Template
import certificateTemplate from "dashboard/template/certificateTemplate";
import { CREATE_CERTIFICATE, GET_CERTIFICATE_LAST_ID } from "dashboard/database/query/certificate";

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
  const lastCertificateId = await GET_CERTIFICATE_LAST_ID();
  const certificateId = lastCertificateId ? lastCertificateId.id + 1 : 1;
  // ====================

  // Certificate Data
  const {
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
  const certificateKeys = `ARTIST-${artistId}/ART-${id}/CERTIFICATE/${uuid()}-certificate-${certificateId}.pdf`;
  const certificateMainKeys = `ARTIST-${artistId}/ART-${id}/CERTIFICATE/${uuid()}-main-certificate-${certificateId}.pdf`;
  // ====================

  //? ============== Generate QR Code ============= ?//

  const qrCode = QRCode.toString(
    `${process.env.NEXT_PUBLIC_S3_URL}/${certificateMainKeys}`,
    { type: "svg" },
    function (err, res) {
      return res;
    }
  );

  // * ====================================== * //

  //? ============== Certificate HTML Template ============= ?//

  const certificateWithoutBarcode = certificateTemplate({
    id: id,
    watermark: true,
    artworkImage: artworkImage,
    title: title,
    artist: artist,
    certificateSerial: certificateSerial,
    size: size,
    signature: signature,
    signatureName: artist,
    description: description,
    material: material,
  });

  const certificate = certificateTemplate({
    id: id,
    watermark: false,
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
    .create(certificateWithoutBarcode, {
      format: "A4",
      orientation: "landscape",
      quality: "100",
      type: "pdf",
    })
    .toBuffer(async function (err, buffer) {
      s3.upload(
        {
          Bucket: bucketName,
          ACL: "public-read",
          ContentType: "application/pdf",
          Body: buffer,
          Key: certificateMainKeys,
        },
        async function (err, data) {
          if (!err) {
            try {
              const mainResult = await CREATE_CERTIFICATE({
                artistId: +artistId,
                artworkId: +id,
                serialNumber: certificateSerial,
                url: certificateMainKeys,
                type: "MAIN",
              });

              pdf
                .create(certificate, {
                  format: "A4",
                  orientation: "landscape",
                  quality: "100",
                  type: "pdf",
                })
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
                        const result = await CREATE_CERTIFICATE({
                          artistId: +artistId,
                          artworkId: +id,
                          serialNumber: certificateSerial,
                          url: certificateKeys,
                          type: "EDITION",
                        });
                        res.status(200).json({
                          success: true,
                          data: data,
                          message: "Success serve all certificate",
                        });
                      } else {
                        res.status(200).json({ success: false, data: data, message: err });
                      }
                    }
                  );
                });
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
