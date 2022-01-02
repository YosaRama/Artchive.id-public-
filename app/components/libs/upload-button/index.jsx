// Libs
import propTypes from "prop-types";
import { Button, Upload } from "antd";

// Icons
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";

function UploadButton(props) {
  const { onUpload, loading, children } = props;
  const uploadButton = (
    <div className="upload-button">
      <Button style={{ marginTop: 8 }}>
        {loading ? <LoadingOutlined /> : <UploadOutlined />}
        {children}
      </Button>
    </div>
  );
  return (
    <Upload name="uploadFile" showUploadList={false} customRequest={onUpload} {...props}>
      {uploadButton}
    </Upload>
  );
}

UploadButton.propTypes = {
  onUpload: propTypes.func,
  loading: propTypes.bool,
  children: propTypes.string,
};

export default UploadButton;
