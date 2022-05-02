// Libs
import { Button, Col, Form, Input, Switch } from "antd";
import { useState } from "react";

// Components
import AppTextEditor from "../text-editor";

// Data Hook
import AppUploadImages from "../upload-images";

// Styles
import s from "./index.module.scss";

function AppFormArticles() {
  //? ============== Handle Text Editor ============= ?//
  const [textEditorValue, setTextEditorValue] = useState("");
  // * ====================================== * //

  //? ============== Handle Upload ============= ?//
  const [uploadImage, setUploadImage] = useState();
  // * ====================================== * //

  //? ============== Handle Submit ============= ?//
  const handleSubmit = () => {
    console.log(textEditorValue);
  };
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
        <Col className={s.contentForm}>
          <p>Contents</p>
          <Col className={s.editor}>
            <AppTextEditor value={textEditorValue} setValue={setTextEditorValue} />
          </Col>
        </Col>
        <Form.Item name={"status"} label="Published">
          <Switch checkedChildren="YES" unCheckedChildren="NO" />
        </Form.Item>
        <Col span={24}>
          <Button type="primary" style={{ width: "100%", height: "40px" }} onClick={handleSubmit}>
            SAVE
          </Button>
        </Col>
      </Form>
    </>
  );
}

export default AppFormArticles;
