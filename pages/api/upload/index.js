// Libs
import nextConnect from "next-connect";

// Upload Libs
import multer from "multer";
import multerS3 from "multer-s3";
import multerS3Sharp from "multer-sharp-s3";
import aws from "aws-sdk";

const apiHandler = nextConnect();

//? ============== AWS CONFIGURATION ============= ?//

aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_KEY_ID,
});
const bucketName = process.env.S3_BUCKET_NAME;
const s3 = new aws.S3();

// * ====================================== * //

//? ============== STORAGE CONFIGURATION ============= ?//

// S3 Sharp Storage
const sharpStorage = multerS3Sharp({
  s3,
  Bucket: bucketName,
  multiple: true,
  ACL: "public-read",
  Key: async (req, file, cb) => {
    const fileName = blockId + file.originalname;
    cb(null, fileName);
  },
  resize: [
    { suffix: "2560px.jpg", width: 2560 }, // XXL File
    { suffix: "1920px.jpg", width: 1920 }, // Xl File
    { suffix: "1440px.jpg", width: 1440 }, // L File
    { suffix: "1024px.jpg", width: 1024 }, // M File
    { suffix: "768px.jpg", width: 768 }, // S File
    { suffix: "500px.jpg", width: 500 }, // ThumbFile
    { suffix: "original.jpg" },
  ],
});

const sharpUpload = multer({
  storage: sharpStorage,
});
// ===================

// S3 Storage without sharping
const storage = multerS3({
  s3: s3,
  bucket: bucketName,
  acl: "public-read",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    console.log(req.body.artistId);
    const fileName = file.originalname;
    cb(null, fileName);
  },
});

const s3Upload = multer({
  storage: storage,
});
// ===================

// Without Storage
const upload = multer();
// ===================

// * ====================================== * //

//? ============== UPLOAD API ============= ?//

// Upload with multer s3 sharp
// apiHandler.post(multerS3Sharp.single("uploadFile"), async (req, res) => {
//   const file = req.file;
//   res.status(200).json({ file });
// });
// ========================

// Upload with multer s3
apiHandler.post(s3Upload.single("uploadFile"), async (req, res) => {
  const file = req.file;
  if (file) {
    res.status(200).json({ status: true, file: file });
  } else {
    res.status(200).json({ status: false, file: file, message: "Failed upload file" });
  }
});
// ========================

// Upload with AWS-SDK
// apiHandler.post(upload.single("uploadFile"), async (req, res) => {
//   s3.upload(
//     {
//       Bucket: process.env.S3_BUCKET_NAME,
//       ACL: "public-read",
//       ContentType: req.file.mimetype,
//       Body: req.file.buffer,
//       Key: "image-test.jpg",
//     },
//     function (err, data) {
//       if (!err) {
//         res.status(200).json({ data });
//       }
//     }
//   );
// });
// ==========================

// * ====================================== * //

//? ============== API CONFIGURATION ============= ?//

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

// * ====================================== * //

export default apiHandler;
