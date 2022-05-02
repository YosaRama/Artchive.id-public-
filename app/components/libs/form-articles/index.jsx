// Libs
import propTypes from "prop-types";
import { Button, Col, Form, Input, Switch } from "antd";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Components
import AppTextEditor from "../text-editor";
import { WarningNotification } from "app/components/utils/notification";

// Data Hook
import AppUploadImages from "../upload-images";

// Styles
import s from "./index.module.scss";

function AppFormArticles(props) {
  const { onSubmit, isEdit, initialData } = props;
  const router = useRouter();

  //? ============== Handle Session ============= ?//
  const { data: session } = useSession();
  // * ====================================== * //

  //? ============== Handle Text Editor ============= ?//
  const [textEditorValue, setTextEditorValue] = useState("");
  // * ====================================== * //

  //? ============== Handle Upload ============= ?//
  const [uploadImage, setUploadImage] = useState();
  // * ====================================== * //

  //? ============== Handle Initial Data ============= ?//
  useEffect(() => {
    if (isEdit) {
      setUploadImage({ id: initialData?.thumbnail?.id, url: initialData?.thumbnail?.url });
      setTextEditorValue(initialData.content);
    }
  }, []);
  // * ====================================== * //

  //? ============== Handle Submit ============= ?//
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        title: value.title,
        author: value.author,
        status: value.status ? "PUBLISHED" : "DRAFT",
        content: textEditorValue,
        thumbnailId: uploadImage?.id,
        createdId: session?.user?.id,
        updatedId: session?.user?.id,
      };
      if (!submission.thumbnailId) {
        WarningNotification({
          message: "Missing Fields!",
          description: "Please upload thumbnail image!",
        });
      } else {
        const result = await onSubmit(submission);
        if (result) {
          router.push("/dashboard/articles");
        }
      }
    });
  };
  // * ====================================== * //
  return (
    <>
      <Form layout="vertical" form={form} initialValues={isEdit ? initialData : {}}>
        <Form.Item label="Thumbnail">
          <Col style={{ height: 500, marginBottom: 30 }}>
            <AppUploadImages
              uploadImage={uploadImage}
              setUploadImage={setUploadImage}
              imageHeight={500}
              userId={session?.user?.id}
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
        <Form.Item name={"status"} label="Published" valuePropName="checked">
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

AppFormArticles.propTypes = {
  onSubmit: propTypes.func.isRequired,
  isEdit: propTypes.bool,
  initialData: propTypes.any,
};

export default AppFormArticles;
