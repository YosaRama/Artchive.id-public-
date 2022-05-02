// Libs
import { Button, Col, Form, Input, Switch } from "antd";
import { useState } from "react";

// Data Hook
import AppUploadImages from "../upload-images";

function AppFormArticles() {
  //? ============== Handle Upload ============= ?//
  const [uploadImage, setUploadImage] = useState();
  // * ====================================== * //
  return (
    <>
      <Form layout="vertical">
        <Form.Item label="Thumbnail">
          <Col style={{ height: 500, marginBottom: 30 }}>
            <AppUploadImages
              uploadImage={uploadImage}
              setUploadImage={setUploadImage}
              imageHeight={500}
            />
          </Col>
        </Form.Item>
        <Form.Item name={"title"} label="Article Title">
          <Input />
        </Form.Item>
        <Form.Item name={"author"} label="Author">
          <Input />
        </Form.Item>
        <Form.Item name={"content"} label="Content">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={"status"} label="Published">
          <Switch checkedChildren="YES" unCheckedChildren="NO" />
        </Form.Item>
        <Col span={24}>
          <Button type="primary" style={{ width: "100%", height: "40px" }}>
            SAVE
          </Button>
        </Col>
      </Form>
    </>
  );
}

export default AppFormArticles;
