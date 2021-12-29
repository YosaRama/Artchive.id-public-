// Libs
import { Button, Col, Form, Input, Row, Image } from "antd";

// Data Hook
import { useUploads } from "app/hooks/upload";

// Components
import UploadBox from "app/components/libs/upload-box";
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";

// Style
import s from "./index.module.scss";
import { useState } from "react";

function ArtworkCreate() {
  //? ============== Handle Upload ============= ?//
  const { loading: uploadLoading, onUpload } = useUploads();
  const [uploadImage, setUploadImage] = useState();
  const handleUpload = async (file) => {
    const result = await onUpload({
      file: file.file,
      artistId: 5, // TODO: Change with id in session
      artworkId: 6,
    });
    if (result.success) {
      setUploadImage({ id: result.data.id, url: result.data.url });
    }
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
              <Form layout="vertical">
                <Form.Item name="sku" label="Artwork SKU">
                  <Input />
                </Form.Item>
                <Form.Item name="artistId" label="Artist">
                  <Input />
                </Form.Item>
                <Form.Item name="title" label="Title">
                  <Input />
                </Form.Item>
                <Form.Item name="year" label="Year">
                  <Input />
                </Form.Item>
                <Form.Item name="material" label="Material">
                  <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                  <Input />
                </Form.Item>
                <Form.Item name="genre" label="Genre">
                  <Input />
                </Form.Item>
                <Form.Item name="type" label="Type">
                  <Input />
                </Form.Item>
                <Form.Item name="width" label="Width">
                  <Input />
                </Form.Item>
                <Form.Item name="height" label="Height">
                  <Input />
                </Form.Item>
                <Form.Item name="price" label="Price">
                  <Input />
                </Form.Item>
              </Form>
              <Col span={24} style={{ padding: 0, textAlign: "right" }}>
                <Button type="primary">Submit</Button>
              </Col>
            </Col>
          </Row>
        </ContainerCard>
      </ContainerBox>
    </>
  );
}

export default ArtworkCreate;
