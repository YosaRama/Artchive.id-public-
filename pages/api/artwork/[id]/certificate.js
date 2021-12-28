// Libs
import nextConnect from "next-connect";
import pdf from "html-pdf";
const apiHandler = nextConnect();

// Upload Libs
import aws from "aws-sdk";

//? ============== AWS CONFIGURATION ============= ?//

aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_KEY_ID,
});
const bucketName = process.env.S3_BUCKET_NAME;
const s3 = new aws.S3();

// * ====================================== * //

//? ============== Certificate HTML Template ============= ?//

const certificateTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href=""/>
    <title>Certificate Template</title>
</head>
<body>
    <h1>This is Certificate Template</h1>
</body>
</html>`;

// * ====================================== * //

//? ============== Upload certificate on S3 ============= ?//
apiHandler.post(async (req, res) => {
  const { id } = req.query;
  const {} = req.body;

  pdf
    .create(certificateTemplate, { orientation: "landscape", format: "A4" })
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
