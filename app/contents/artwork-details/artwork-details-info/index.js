// Libs
import { useRouter } from "next/router";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Row,
  Select,
  Switch,
} from "antd";
const { Option } = Select;

// Data Hook
import { useArtwork } from "app/hooks/artwork";
import { useUsers } from "app/hooks/user";

function ArtworkGeneralInformation() {
  const router = useRouter();

  //? ============== Artist Hook ============= ?//
  const { data: artistData } = useUsers({ queryString: "role=ARTIST" });
  // * ====================================== * //

  //? ============== Artwork Hook ============= ?//
  const {
    onEdit,
    data: artworkInitialData,
    onDelete,
  } = useArtwork({ singleId: router?.query?.id });
  const artworkInitialValues = artworkInitialData?.length != 0 && {
    ...artworkInitialData,
    artistId: [artworkInitialData?.artist?.full_name, artworkInitialData?.artist_id],
  };
  // * ====================================== * //

  //? ============== Handle Update ============= ?//
  const [form] = Form.useForm();

  const handleUpdate = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        sku: value.sku,
        artist_id: value.artistId[1],
        title: value.title,
        year: value.year,
        material: value.material,
        description: value.description,
        genre_id: 1,
        cover_id: artworkInitialValues?.media_cover_id,
        type: value.type,
        height: value.height,
        width: value.width,
        price: value.price,
        status: value.status,
        approve: value.approve,
      };
      onEdit(submission);
    });
  };
  // * ====================================== * //

  //? ============== Handle Delete ============= ?//
  const handleDelete = async () => {
    const result = await onDelete();
    if (result) {
      router.push("/dashboard/artworks");
    }
  };
  // * ====================================== * //

  return (
    <Col style={{ margin: "50px auto 0" }} span={22}>
      {artworkInitialValues && (
        <Form layout="vertical" initialValues={artworkInitialValues} form={form}>
          <Row gutter={[16, 0]}>
            <Col span={11}>
              <Form.Item label="Artwork SKU" name="sku">
                <Input disabled />
              </Form.Item>
              <Form.Item name="artistId" label="Artist">
                <Select placeholder="Select artist" showSearch disabled>
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
              <Form.Item name="status" label="Status">
                <Select placeholder="Input artwork status">
                  <Option value="PUBLISH">Publish</Option>
                  <Option value="DRAFT">Draft</Option>
                  <Option value="SOLD">Sold</Option>
                </Select>
              </Form.Item>
            </Col>
            <Divider type="vertical" />
            <Col span={11}>
              <Form.Item name="description" label="Description">
                <Input.TextArea placeholder="Write artwork description" />
              </Form.Item>
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
              <Form.Item name="approve" label="Approved" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col span={24} style={{ textAlign: "right", margin: "30px auto" }}>
              <Popconfirm onConfirm={handleDelete} title="Are you sure to delete this artwork?">
                <Button size="large" type="ghost" danger style={{ marginRight: 10 }}>
                  Delete Artwork
                </Button>
              </Popconfirm>
              <Button size="large" type="primary" onClick={handleUpdate}>
                Save Changes
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Col>
  );
}

export default ArtworkGeneralInformation;
