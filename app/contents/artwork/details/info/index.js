// Libs
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Switch,
} from "antd";
import moment from "moment";
const { Option } = Select;

// Data Hook
import { useArtwork } from "app/hooks/artwork";
import { useUsers } from "app/hooks/user";
import { useGenres } from "app/hooks/genre";

// Components
import AppFormArtworkPrice from "app/components/libs/form-artwork-price";
import AppFormArtworkMaterial from "app/components/libs/form-artwork-material";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";

function AppContentsArtworkDetailsInfo() {
  const router = useRouter();

  //? ============== Artist Hook ============= ?//
  const { data: artistData } = useUsers({ queryString: "role=ARTIST" });
  // * ====================================== * //

  //? ============== Artwork Hook ============= ?//
  const {
    onEdit,
    data: artworkInitialData,
    onDelete,
    loading,
  } = useArtwork({ singleId: router?.query?.id });
  const artworkInitialValues = artworkInitialData && {
    ...artworkInitialData,
    artistId: [artworkInitialData?.artist?.full_name, artworkInitialData?.artist_id],
    // genre: artworkInitialData?.genre?.[0].id, //? For single genre
    genre: artworkInitialData?.genre?.map((item) => {
      //? For multiple genre
      return item.id;
    }),
    year: moment(`${artworkInitialData.year}-12-30`),
  };
  // * ====================================== * //

  //? ============== Genre Hook ============= ?//
  const { data: genreData } = useGenres({ queryString: "limit=all" });
  // * ====================================== * //

  //? ============== Handle Update ============= ?//
  const [form] = Form.useForm();
  const handleUpdate = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        sku: value.sku,
        artist_id: value.artistId[1],
        title: value.title,
        year: moment(value.year).format("YYYY"),
        material: value.material,
        description: value.description,
        genre_id: value.genre,
        cover_id: artworkInitialValues?.media_cover_id,
        type: value.type,
        height: value.height,
        width: value.width,
        price: `${value.price}`,
        markupPrice: `${markupPrice || artworkInitialValues?.markup_price}`,
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

  //? ============== Handle Status Dropdown ============= ?//
  const [isApproved, setIsApproved] = useState();
  useEffect(() => {
    setIsApproved(artworkInitialValues?.approve);
  }, [artworkInitialValues?.approve]);
  const handleApproved = () => {
    form.setFieldsValue({ status: null });
    setIsApproved(!isApproved);
  };
  // * ====================================== * //

  //? ============== Handle Artwork Price ============= ?//
  const [markupPrice, setMarkupPrice] = useState("");
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
              <Form.Item
                name="genre"
                label="Genre"
                rules={[{ required: true, message: "Please select minimal 1 genre of artwork!" }]}
              >
                <Select placeholder="Select genre" mode="multiple">
                  {genreData &&
                    genreData?.map((item, index) => {
                      return (
                        <Option key={index} value={item.id}>
                          {item.title}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Please input title of artwork!" }]}
              >
                <Input placeholder="Input artwork title" />
              </Form.Item>
              <Form.Item
                name="year"
                label="Year"
                rules={[{ required: true, message: "Please input year of artwork!" }]}
              >
                {/* <Input placeholder="Input artwork year" /> */}
                <DatePicker picker="year" style={{ width: "100%" }} />
              </Form.Item>
              <AppFormArtworkMaterial />
              <Form.Item
                name="status"
                label="Status"
                rules={[{ required: true, message: "Please select status of artwork!" }]}
              >
                <Select placeholder="Input artwork status">
                  {isApproved ? (
                    <>
                      <Option value="PUBLISH">Publish</Option>
                      <Option value="SOLD">Sold</Option>
                    </>
                  ) : (
                    <>
                      <Option value="DRAFT">Draft</Option>
                      <Option value="EDIT">Edit Required</Option>
                    </>
                  )}
                </Select>
              </Form.Item>
            </Col>
            <Divider type="vertical" />
            <Col span={11}>
              <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: "Please input description of artwork!" }]}
              >
                <Input.TextArea placeholder="Write artwork description" />
              </Form.Item>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: "Please select type of artwork!" }]}
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
                    rules={[{ required: true, message: "Width of artwork is required!" }]}
                  >
                    <InputNumber placeholder="Width (cm)" style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="height" label="Height">
                    <InputNumber
                      placeholder="Height (cm)"
                      style={{ width: "100%" }}
                      rules={[{ required: true, message: "Height of artwork is required!" }]}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <AppFormArtworkPrice
                markupPrice={markupPrice || artworkInitialValues.markup_price}
                setMarkupPrice={setMarkupPrice}
              />
              <Form.Item name="approve" label="Approved" valuePropName="checked">
                <Switch onChange={handleApproved} />
              </Form.Item>
            </Col>
            <Col span={24} style={{ textAlign: "right", margin: "30px auto" }}>
              <Button
                size="large"
                type="ghost"
                danger
                style={{ marginRight: 10 }}
                onClick={() => deleteConfirmModal({ title: "artwork", onDelete: handleDelete })}
                loading={loading}
              >
                Delete Artwork
              </Button>
              <Button size="large" type="primary" onClick={handleUpdate} loading={loading}>
                Save Changes
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Col>
  );
}

export default AppContentsArtworkDetailsInfo;
