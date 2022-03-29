// Libs
import moment from "moment";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Col, Form, Input, Row, Image, Select, InputNumber } from "antd";
const { Option } = Select;

// Data Hook
import { useUploads } from "app/hooks/upload";
import { useArtworks } from "app/hooks/artwork";
import { useUsers } from "app/hooks/user";
import { useGenres } from "app/hooks/genre";

// Components
import AppUploadBox from "app/components/libs/upload-box";
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import AppFormArtworkPrice from "app/components/libs/form-artwork-price";
import { WarningNotification } from "app/components/utils/notification";

// Style
import s from "./index.module.scss";

function AppContentsArtworkCreate() {
  const router = useRouter();
  const [form] = Form.useForm();

  //? ============== Handle Artwork Price ============= ?//
  const [markupPrice, setMarkupPrice] = useState(0);
  // * ====================================== * //

  //? ============== Handle Active Upload ============= ?//
  const [artistSelected, setArtistSelected] = useState();
  const handleSelectArtist = (value) => {
    setArtistSelected(value[1]);
  };
  // * ====================================== * //

  //? ============== Artwork Hook ============= ?//
  const { data: artworkData, onAdd } = useArtworks({ queryString: "" });
  const lastArtworkId = artworkData?.length != 0 ? artworkData?.[0]?.id + 1 : 1;
  // * ====================================== * //

  //? ============== Artist Hook ============= ?//
  const { data: artistData } = useUsers({ queryString: "role=ARTIST&limit=all" });
  // * ====================================== * //

  //? ============== Genre Hook ============= ?//
  const { data: genreData } = useGenres({ queryString: "" });
  // * ====================================== * //

  //? ============== Handle Submit ============= ?//
  const handleSubmit = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        sku: `ARTCHIVE/USR-${value.artistId?.[1]}/ART-${lastArtworkId}/${moment().format(
          "DDMMYYYY"
        )}`,
        artist_id: value.artistId?.[1],
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
        markupPrice: `${markupPrice}`,
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
          router.push("/dashboard/artworks");
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
      userId: artistSelected,
      artworkId: lastArtworkId,
    });
    if (result.success) {
      setUploadImage({ id: result.data.id, url: result.data.url });
    }
  };
  // * ====================================== * //

  return (
    <>
      <AppContainerBox>
        <AppContainerCard title="CREATE NEW ARTWORK">
          <Row gutter={[32, 0]}>
            <Col span={10}>
              {uploadImage ? (
                <Image alt="" src={`${process.env.NEXT_PUBLIC_S3_URL}/${uploadImage?.url}`} />
              ) : (
                <AppUploadBox
                  onUpload={handleUpload}
                  loading={uploadLoading}
                  className={s.upload}
                  disabled={!artistSelected}
                />
              )}
              {!artistSelected && (
                <p style={{ margin: "10px 0 0", fontStyle: "italic", opacity: "0.5" }}>
                  *Note : Please select artist first
                </p>
              )}
            </Col>
            <Col span={12}>
              <Form layout="vertical" form={form}>
                <Form.Item
                  name="artistId"
                  label="Artist"
                  rules={[{ required: true, message: "Please select artist for this artwork!" }]}
                >
                  <Select placeholder="Select artist" showSearch onSelect={handleSelectArtist}>
                    {artistData &&
                      artistData?.map((item, index) => {
                        return (
                          <Option key={index} value={[item.full_name, item.id]}>
                            {item.full_name}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
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
                  rules={[
                    { required: true, message: "Please input description for this artwork!" },
                  ]}
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
                <AppFormArtworkPrice markupPrice={markupPrice} setMarkupPrice={setMarkupPrice} />
              </Form>
              <Col span={24} style={{ padding: 0, textAlign: "right" }}>
                <Button type="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Col>
            </Col>
          </Row>
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsArtworkCreate;
