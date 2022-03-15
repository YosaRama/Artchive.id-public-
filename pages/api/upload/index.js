// Libs
import nextConnect from "next-connect";
import { v4 as uuid } from "uuid";

// Upload Libs
import multer from "multer";
import multerS3 from "multer-s3";
import multerS3Sharp from "multer-sharp-s3";
import aws from "aws-sdk";
import { CREATE_MAIN_MEDIA } from "app/database/query/media";
import { getSession } from "next-auth/react";

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
    const { userId, artworkId } = req.body;
    const fullPath =
      userId && artworkId
        ? `USER-${userId}/ART-${artworkId}/${uuid()}-${file.originalname}`
        : userId
        ? `USER-${userId}/${uuid()}-${file.originalname}`
        : `Default/${uuid()}-${file.originalname}`;
    cb(null, fullPath);
  },
  resize: [
    { suffix: "medium", width: 1440 }, // L File
    { suffix: "original" },
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
    const { userId, artworkId } = req.body;
    const fullPath =
      userId && artworkId
        ? `USER-${userId}/ART-${artworkId}/${file.originalname}`
        : `Default/${file.originalname}`;
    cb(null, fullPath);
  },
});

const s3Upload = multer({
  storage: storage,
});
// ===================

// Without Storage
// const upload = multer();
// ===================

// * ====================================== * //

//? ============== UPLOAD API ============= ?//

// Upload with multer s3 sharp
apiHandler.post(sharpUpload.single("uploadFile"), async (req, res) => {
  //? ============== Handle Session ============= ?//
  const session = await getSession({ req });
  // * ====================================== * //

  //? ============== Handle File ============= ?//
  const file = req.file;
  const filename = file.originalname;
  const mimetype = file.mimetype;
  const mainUrl = file.original.Key;
  const mediumUrl = file.medium.Key;
  // * ====================================== * //

  try {
    const mainResult = await CREATE_MAIN_MEDIA({
      filename: filename,
      mimetype: mimetype,
      url: mainUrl,
      mediumUrl: mediumUrl,
      uploadBy: session.user.id,
    });
    if (mainResult) {
      res.status(200).json({ success: true, file: file, data: mainResult });
    }
  } catch (error) {
    res
      .status(200)
      .json({ success: false, file: file, message: "Failed upload file", error: error.message });
  }
});
// ========================

// Upload with multer s3
// apiHandler.post(s3Upload.single("uploadFile"), async (req, res) => {
//   const file = req.file;
//   const filename = file.originalname;
//   const mimetype = file.mimetype;
//   const url = file.location.replace(`${process.env.NEXT_PUBLIC_S3_URL}/`, "");
//   try {
//     const result = await CREATE_MAIN_MEDIA({ filename: filename, mimetype: mimetype, url: url });
//     if (result) {
//       res.status(200).json({ success: true, file: file, data: result });
//     } else {
//       res.status(200).json({ success: false, file: file, data: result });
//     }
//   } catch (error) {
//     res.status(200).json({ success: false, file: file, message: "Failed upload file" });
//   }
// });
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
