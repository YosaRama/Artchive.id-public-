// Libs
import { useRouter } from "next/router";
import moment from "moment";
import { useState } from "react";
import { Card, Col, Divider, Row, Button, Form, Input, Image, Select, InputNumber } from "antd";
const { Option } = Select;

// Data Hook
import { useUploads } from "app/hooks/upload";
import { useArtworks } from "app/hooks/artwork";
import { useGenres } from "app/hooks/genre";

// Components
import ThemesHeadline from "themes/components/libs/headline";
import AppUploadBox from "app/components/libs/upload-box";

// Notification
import { WarningNotification } from "app/components/utils/notification";

// Styles
import s from "./index.module.scss";

function ThemesContentsProfileStudioCreate(props) {
  const { artistData } = props;
  const router = useRouter();
  const [form] = Form.useForm();

  //? ============== Artwork Hook ============= ?//
  const { data: artworkData, onAdd } = useArtworks({ queryString: "" });
  const lastArtworkId = artworkData?.length != 0 ? artworkData?.[0]?.id + 1 : 1;
  // * ====================================== * //

  //? ============== Genre Hook ============= ?//
  const { data: genreData } = useGenres({ queryString: "" });
  // * ====================================== * //

  //? ============== Handle Submit ============= ?//
  const handleSubmit = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        sku: value.sku,
        artist_id: artistData.id,
        title: value.title,
        year: value.year,
        material: value.material,
        description: value.description,
        genre_id: value.genre.map((item) => item[1]),
        media_id: [],
        cover_id: uploadImage?.id,
        type: value.type,
        height: value.height,
        width: value.width,
        price: `${value.price}`,
        status: "DRAFT", // Default on create artwork
        approve: false, // Default on create artwork
      };
      if (!submission.cover_id) {
        WarningNotification({
          message: "Failed Submit!",
          description: "Please upload artwork image",
        });
      } else {
        const result = await onAdd(submission);
        if (result) {
          router.push("/profile/studio");
        }
      }
    });
  };
  // * ====================================== * //

  //? ============== Handle Upload ============= ?//
  const { loading: uploadLoading, onUpload } = useUploads();
  const [uploadImage, setUploadImage] = useState();
  const handleUpload = async (file) => {
    const result = await onUpload({
      file: file.file,
      userId: artistData.id,
      artworkId: lastArtworkId,
    });
    if (result.success) {
      setUploadImage({ id: result.data.id, url: result.data.url });
    }
  };
  // * ====================================== * //

  return (
    <>
      <div className={s.title}>
        <ThemesHeadline title="Add an Artwork" subtitle="Upload your artwork and details" />
      </div>
      <Divider className={s.divider} />
      <div className={s.contentContainer}>
        <Row gutter={[32, 0]} justify="center">
          <Col lg={{ span: 10 }} xs={{ span: 24 }} className={s.artworkImage}>
            {uploadImage ? (
              <Image alt="" src={`${process.env.NEXT_PUBLIC_S3_URL}/${uploadImage?.url}`} />
            ) : (
              <AppUploadBox onUpload={handleUpload} loading={uploadLoading} className={s.upload} />
            )}
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <Form layout="vertical" form={form}>
              {lastArtworkId && (
                <Form.Item
                  name="sku"
                  label="Artwork SKU"
                  initialValue={`ARTCHIVE/USR-${
                    artistData.id
                  }/ART-${lastArtworkId}/${moment().format("DDMMYYYY")}`}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input disabled />
                </Form.Item>
              )}
              <Form.Item
                name="genre"
                label="Genre"
                rules={[{ required: true, message: "Please select genre for this artwork!" }]}
              >
                <Select placeholder="Select artist" showSearch mode="multiple">
                  {genreData &&
                    genreData?.map((item, index) => {
                      return (
                        <Option key={index} value={[item.title, item.id]}>
                          {item.title}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Please input title for this artwork!" }]}
              >
                <Input placeholder="Input artwork title" />
              </Form.Item>
              <Form.Item
                name="year"
                label="Year"
                rules={[{ required: true, message: "Please input year for this artwork!" }]}
              >
                <Input placeholder="Input artwork year" />
              </Form.Item>
              <Form.Item
                name="material"
                label="Material"
                rules={[{ required: true, message: "Please input material for this artwork!" }]}
              >
                <Input placeholder="Input artwork material" />
              </Form.Item>
              <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: "Please input description for this artwork!" }]}
              >
                <Input.TextArea placeholder="Write artwork description" />
              </Form.Item>

              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: "Please select type of this artwork!" }]}
              >
                <Select placeholder="Select type of artwork">
                  <Option value="UNIQUE">Unique</Option>
                  <Option value="EDITION">Edition Series</Option>
                </Select>
              </Form.Item>
              <Row gutter={[16, 0]}>
                <Col span={12}>
                  <Form.Item
                    name="width"
                    label="Width"
                    rules={[
                      {
                        required: true,
                        message: "Please input width for this artwork!",
                        type: "number",
                      },
                    ]}
                  >
                    <InputNumber placeholder="Width (cm)" style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="height"
                    label="Height"
                    rules={[
                      {
                        required: true,
                        message: "Please input height for this artwork!",
                        type: "number",
                      },
                    ]}
                  >
                    <InputNumber placeholder="Height (cm)" style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="price"
                label="Price"
                rules={[
                  {
                    required: true,
                    message: "Please input price for this artwork!",
                  },
                ]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Input artwork price"
                  addonBefore="Rp"
                  formatter={(value) => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  parser={(value) => value.replace(/Rp\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Form>
            <Col span={24} style={{ padding: 0, textAlign: "right" }}>
              <Button type="primary" onClick={handleSubmit} className={s.submitBtn}>
                SUBMIT
              </Button>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ThemesContentsProfileStudioCreate;
