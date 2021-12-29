// Libs
import moment from "moment";
import { useRouter } from "next/router";
import { Button, Col, Form, Input, Row, Image, Select, InputNumber } from "antd";
const { Option } = Select;

// Data Hook
import { useUploads } from "app/hooks/upload";
import { useArtworks } from "app/hooks/artwork";
import { useUsers } from "app/hooks/user";

// Components
import UploadBox from "app/components/libs/upload-box";
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";

// Style
import s from "./index.module.scss";
import { useState } from "react";

function ArtworkCreate() {
  const router = useRouter();

  //? ============== Artwork Hook ============= ?//
  const { data: artworkData, onAdd } = useArtworks({ queryString: "" });
  const lastArtworkId = artworkData?.[0]?.id;
  // * ====================================== * //

  //? ============== Artist Hook ============= ?//
  const { data: artistData } = useUsers({ queryString: "role=ARTIST" });
  // * ====================================== * //

  //? ============== Genre Hook ============= ?//
  // TODO : Hook Genre
  // * ====================================== * //

  //? ============== Handle Upload ============= ?//
  const { loading: uploadLoading, onUpload } = useUploads();
  const [uploadImage, setUploadImage] = useState();
  const handleUpload = async (file) => {
    const result = await onUpload({
      file: file.file,
      artistId: 1, // TODO: Change with id in session
      artworkId: lastArtworkId + 1,
    });
    if (result.success) {
      setUploadImage({ id: result.data.id, url: result.data.url });
    }
  };
  // * ====================================== * //

  //? ============== Handle Add Artwork ============= ?//
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        sku: value.sku,
        artist_id: value.artistId?.[1],
        title: value.title,
        year: value.year,
        material: value.material,
        description: value.description,
        genre_id: 1,
        media_id: [uploadImage?.id],
        type: value.type,
        height: value.height,
        width: value.width,
        price: value.price,
        status: "DRAFT", // Default on create artwork
        approve: false, // Default on create artwork
      };
      const result = await onAdd(submission);
      if (result) {
        router.push("/dashboard/artworks");
      }
    });
  };

  // * ====================================== * //

  return (
    <>
      <ContainerBox>
        <ContainerCard title="CREATE NEW ARTWORK">
          <Row gutter={[32, 0]}>
            <Col span={10}>
              {uploadImage ? (
                <Image alt="" src={`${process.env.NEXT_PUBLIC_S3_URL}/${uploadImage?.url}`} />
              ) : (
                <UploadBox onUpload={handleUpload} loading={uploadLoading} className={s.upload} />
              )}
            </Col>
            <Col span={12}>
              <Form layout="vertical" form={form}>
                {lastArtworkId && (
                  <Form.Item
                    name="sku"
                    label="Artwork SKU"
                    initialValue={`ARTCHIVE/ART-${lastArtworkId}/${moment().format("DDMMYYYY")}`}
                  >
                    <Input disabled />
                  </Form.Item>
                )}
                <Form.Item name="artistId" label="Artist">
                  <Select placeholder="Select artist" showSearch>
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
                <Form.Item name="title" label="Title">
                  <Input placeholder="Input artwork title" />
                </Form.Item>
                <Form.Item name="year" label="Year">
                  <Input placeholder="Input artwork year" />
                </Form.Item>
                <Form.Item name="material" label="Material">
                  <Input placeholder="Input artwork material" />
                </Form.Item>
                <Form.Item name="description" label="Description">
                  <Input.TextArea placeholder="Write artwork description" />
                </Form.Item>

                {/* // TODO : Handle Select Genre */}
                {/* <Form.Item name="genre" label="Genre">
                  <Input />
                </Form.Item> */}

                <Form.Item name="type" label="Type">
                  <Select placeholder="Select type of artwork">
                    <Option value="UNIQUE">Unique</Option>
                    <Option value="EDITION">Edition Series</Option>
                  </Select>
                </Form.Item>
                <Row gutter={[16, 0]}>
                  <Col span={12}>
                    <Form.Item name="width" label="Width">
                      <InputNumber placeholder="Width (cm)" style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="height" label="Height">
                      <InputNumber placeholder="Height (cm)" style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="price" label="Price">
                  <Input placeholder="Input artwork price" />
                </Form.Item>
              </Form>
              <Col span={24} style={{ padding: 0, textAlign: "right" }}>
                <Button type="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Col>
            </Col>
          </Row>
        </ContainerCard>
      </ContainerBox>
    </>
  );
}

export default ArtworkCreate;
