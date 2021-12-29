// Libs
import propTypes from "prop-types";
import { Upload } from "antd";

// Icons
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function UploadBox(props) {
  const { onUpload, loading } = props;
  const uploadButton = (
    <div className="upload-button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Upload
      name="uploadFile"
      listType="picture-card"
      showUploadList={false}
      customRequest={onUpload}
      {...props}
    >
      {uploadButton}
    </Upload>
  );
}

UploadBox.propTypes = {
  onUpload: propTypes.func,
  loading: propTypes.bool,
};

export default UploadBox;
