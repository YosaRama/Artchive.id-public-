// Libs
import { Col, Image } from "antd";
import propTypes from "prop-types";

// Components
import AppUploadBox from "../upload-box";
import AppUploadButton from "../upload-button";

// Data Hook
import { useUploads } from "app/hooks/upload";

// Styles
import s from "./index.module.scss";

function AppUploadImage(props) {
  const { userId, artworkId, uploadImage, setUploadImage, imageHeight, uploadDisabled } = props;

  //? ============== Handle Upload ============= ?//
  const { loading: uploadLoading, onUpload } = useUploads();
  const handleUpload = async (file) => {
    const result = await onUpload({
      file: file.file,
      userId: userId ? userId : null,
      artworkId: artworkId ? artworkId : null,
    });
    if (result.success) {
      setUploadImage({ id: result.data.id, url: result.data.url });
    }
  };
  // * ====================================== * //

  return (
    <>
      {uploadImage ? (
        <>
          <Col>
            <Col>
              <Image
                alt=""
                src={`${process.env.NEXT_PUBLIC_S3_URL}/${uploadImage?.url}`}
                height={imageHeight ? imageHeight : ""}
                style={{ objectFit: "cover" }}
              />
            </Col>
            <Col style={{ textAlign: "center" }}>
              <AppUploadButton onUpload={handleUpload} loading={uploadLoading}>
                Change Image
              </AppUploadButton>
            </Col>
          </Col>
        </>
      ) : (
        <Col style={{ height: imageHeight ? imageHeight : "" }}>
          <AppUploadBox
            onUpload={handleUpload}
            loading={uploadLoading}
            className={s.uploadBox}
            disabled={uploadDisabled}
          />
        </Col>
      )}
    </>
  );
}

AppUploadImage.propTypes = {
  userId: propTypes.number,
  artworkId: propTypes.number,
  uploadImage: propTypes.any.isRequired,
  setUploadImage: propTypes.func.isRequired,
  imageHeight: propTypes.number,
  uploadDisabled: propTypes.bool,
};

export default AppUploadImage;
