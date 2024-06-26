// Libs
import { getSession } from "next-auth/react";
import nextConnect from "next-connect";
import { v4 as uuid } from "uuid";

// Upload Libs
import multer from "multer";
import multerS3 from "multer-s3";
import multerS3Sharp from "multer-sharp-s3";
import aws from "aws-sdk";

// Queries
import { CREATE_MAIN_MEDIA } from "dashboard/database/query/media";

const apiHandler = nextConnect();

//#region AWS CONFIGURATION
aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_KEY_ID,
});
const bucketName = process.env.S3_BUCKET_NAME;
const s3 = new aws.S3();
//#endregion

//#region STORAGE CONFIGURATION
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
//#endregion

//#region S3 Storage without sharping
const storage = multerS3({
  s3: s3,
  bucket: bucketName,
  acl: "public-read",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    const { userId, artworkId } = req.body;
    const fullPath =
      userId && artworkId
        ? `STAGING/USER-${userId}/ART-${artworkId}/${uuid()}-${file.originalname}`
        : userId
        ? `STAGING/USER-${userId}/${uuid()}-${file.originalname}`
        : `Default/${uuid()}-${file.originalname}`;
    cb(null, fullPath);
  },
});

const s3Upload = multer({
  storage: storage,
});
//#endregion

//#region Handle upload
const upload = process.env.IS_STAGING == "true" ? s3Upload : sharpUpload;
//#endregion

//#region UPLOAD API
apiHandler.post(upload.single("uploadFile"), async (req, res) => {
  const session = await getSession({ req });

  const file = req.file;
  const filename = file.originalname;
  const mimetype = file.mimetype;
  const mainUrl = file.original ? file.original?.Key : file.key;
  const mediumUrl = file.medium?.Key;

  try {
    const mainResult = await CREATE_MAIN_MEDIA({
      filename: filename,
      mimetype: mimetype,
      url: mainUrl,
      mediumUrl: mediumUrl ? mediumUrl : mainUrl,
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
//#endregion

//#region API CONFIGURATION
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
//#endregion

export default apiHandler;
