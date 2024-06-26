// Libs
import propTypes from "prop-types";
import { Button, Col, Form, Input, Switch } from "antd";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Components
import AppTextEditor from "../text-editor";
import AppUploadGalleries from "../upload-galleries";
import AppUploadImages from "../upload-images";
import { WarningNotification } from "dashboard/components/utils/notification";

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

  //? ============== Handle Upload Gallery ============= ?//
  const [gallery, setGallery] = useState([]);
  const onAddGallery = (file) => {
    setGallery([...gallery, { id: file.data.id, url: file.data.url }]);
  };
  const onDeleteGallery = (id) => {
    const filterItem = gallery.filter((item) => item.id !== id);
    setGallery(filterItem);
  };
  // * ====================================== * //

  //? ============== Handle Initial Data ============= ?//
  const initialDataParse = {
    ...initialData,
    shortDescription: initialData?.short_description,
  };
  useEffect(() => {
    if (isEdit) {
      setUploadImage({ id: initialData?.thumbnail?.id, url: initialData?.thumbnail?.url });
      setTextEditorValue(initialData?.content);
      setGallery(initialData?.gallery.map((item) => ({ id: item.id, url: item.url })));
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
        shortDescription: value.shortDescription,
        content: textEditorValue,
        thumbnailId: uploadImage?.id,
        createdId: session?.user?.id,
        updatedId: session?.user?.id,
        galleryId: gallery.length != 0 ? gallery.map((item) => item.id) : null,
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
      <Form layout="vertical" form={form} initialValues={isEdit ? initialDataParse : {}}>
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
        <Form.Item label="Gallery">
          <AppUploadGalleries
            limit={6}
            initialGallery={gallery}
            onAddGallery={onAddGallery}
            handleDelete={onDeleteGallery}
            deleteTitle={"item on article gallery"}
          />
        </Form.Item>
        <Form.Item name={"title"} label="Article Title">
          <Input />
        </Form.Item>
        <Form.Item name={"author"} label="Author">
          <Input />
        </Form.Item>
        <Form.Item name={"shortDescription"} label="Short Description">
          <Input.TextArea autoSize={{ minRows: 6 }} />
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
