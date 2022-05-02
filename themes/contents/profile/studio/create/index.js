// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import moment from "moment";
import { useState } from "react";
import {
  Col,
  Divider,
  Row,
  Button,
  Form,
  Input,
  Image,
  Select,
  InputNumber,
  DatePicker,
} from "antd";
const { Option } = Select;

// Data Hook
import { useUploads } from "app/hooks/upload";
import { useArtworks } from "app/hooks/artwork";
import { useGenres } from "app/hooks/genre";

// Components
import ThemesHeadline from "themes/components/libs/headline";
import ThemesButton from "themes/components/libs/button";
import AppUploadBox from "app/components/libs/upload-box";
import AppFormArtworkPrice from "app/components/libs/form-artwork-price";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";
import AppFormArtworkMaterial from "app/components/libs/form-artwork-material";
import AppUploadImage from "app/components/libs/upload-images";
import { WarningNotification } from "app/components/utils/notification";

// Styles
import s from "./index.module.scss";

function ThemesContentsProfileStudioCreate(props) {
  const { artistData } = props;
  const router = useRouter();
  const [form] = Form.useForm();

  //? ============== Handle Artwork Price ============= ?//
  const [markupPrice, setMarkupPrice] = useState(0);
  // * ====================================== * //

  //? ============== Artwork Hook ============= ?//
  const {
    data: artworkData,
    onAdd,
    loading: artworkDataLoading,
  } = useArtworks({ queryString: "" });
  const lastArtworkId = artworkData?.length != 0 ? artworkData?.[0]?.id + 1 : 1;
  // * ====================================== * //

  //? ============== Genre Hook ============= ?//
  const { data: genreData } = useGenres({ queryString: "limit=all" });
  // * ====================================== * //

  //? ============== Handle Upload ============= ?//
  const { loading: uploadLoading, onUpload } = useUploads();

  // Handle Upload Cover Image
  const [uploadImage, setUploadImage] = useState();
  const handleUploadCover = async (file) => {
    const result = await onUpload({
      file: file.file,
      userId: artistData.id,
      artworkId: lastArtworkId,
    });
    if (result.success) {
      setUploadImage({ id: result.data.id, url: result.data.url });
    }
  };

  // Handle Upload Gallery Image
  const [mediaGallery, setMediaGallery] = useState([]);
  const handleUploadMediaGallery = async (file) => {
    const result = await onUpload({
      file: file.file,
      userId: artistData.id,
      artworkId: lastArtworkId,
    });
    if (result.success) {
      setMediaGallery([...mediaGallery, { id: result.data.id, url: result.data.url }]);
    }
  };
  // * ====================================== * //

  //? ============== Handle Submit ============= ?//
  const handleSubmit = () => {
    form
      .validateFields()
      .then(async (value) => {
        const submission = {
          sku: `ARTCHIVE/USR-${artistData.id}/ART-${lastArtworkId}/${moment().format("DDMMYYYY")}`,
          artist_id: artistData?.id,
          title: value.title,
          year: moment(value.year).format("YYYY"),
          material: value.material,
          description: value.description,
          genre_id: value.genre.map((item) => item), //? For multiple genre
          // genre_id: value.genre[1], //? For single genre
          media_id: mediaGallery.map((item) => item.id),
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
            message: "Oops! Something's missing",
            description: "Please upload artwork image",
          });
        } else {
          const result = await onAdd(submission);
          if (result) {
            router.push("/profile/studio");
          }
        }
      })
      .catch((e) => {
        WarningNotification({
          message: "Oops! Something's missing",
          description: "Please fill all required form!",
        });
      });
  };
  // * ====================================== * //

  return (
    <>
      {/* Form Details Section */}
      <div className={s.title}>
        <ThemesHeadline title="Add an Artwork" subtitle="Upload your artwork and details" />
      </div>
      <Divider className={s.divider} />
      <div className={s.contentContainer}>
        <Row gutter={[32, 0]} justify="center">
          <Col lg={{ span: 10 }} xs={{ span: 24 }} className={s.artworkImage}>
            <Col className={s.upload}>
              <AppUploadImage uploadImage={uploadImage} setUploadImage={setUploadImage} />
            </Col>
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <Form layout="vertical" form={form}>
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
                <DatePicker picker="year" style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                name="genre"
                label="Genre"
                rules={[{ required: true, message: "Please select genre for this artwork!" }]}
              >
                <Select
                  placeholder="Select genre"
                  showSearch
                  mode="multiple"
                  filterOption={(input, option) =>
                    option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
                    option.value.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
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
              <AppFormArtworkMaterial />
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
              <AppFormArtworkPrice markupPrice={markupPrice} setMarkupPrice={setMarkupPrice} />
            </Form>
          </Col>
        </Row>
      </div>
      {/* =================================== */}

      {/* Media Galley Section */}
      <div className={s.title}>
        <ThemesHeadline title="Media Gallery" subtitle="Upload your artwork details photos" />
      </div>
      <Divider className={s.divider} />
      <div className={s.contentContainer}>
        <Col span={22} className={s.mediaGalleryContainer}>
          <Row gutter={[16, 0]} className={s.mediaGalleryBox}>
            {mediaGallery?.map((item) => {
              return (
                <Col
                  className={s.mediaGalleryImageBox}
                  xl={{ span: 6 }}
                  lg={{ span: 11 }}
                  md={{ span: 11 }}
                  xs={{ span: 21 }}
                  style={{ textAlign: "center" }}
                  key={item.id}
                >
                  <Image src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.url}`} alt="" />
                  <Button
                    onClick={() =>
                      deleteConfirmModal({
                        title: "artwork gallery image",
                        onDelete: () =>
                          setMediaGallery(mediaGallery.filter((gallery) => gallery.id != item.id)),
                      })
                    }
                  >
                    Delete
                  </Button>
                </Col>
              );
            })}

            {mediaGallery?.length < 4 && (
              <Col xl={{ span: 6 }} lg={{ span: 11 }} md={{ span: 11 }} xs={{ span: 21 }}>
                <AppUploadBox
                  className={s.uploadBox}
                  onUpload={handleUploadMediaGallery}
                  loading={uploadLoading}
                />
              </Col>
            )}
          </Row>
        </Col>
      </div>
      {/* =================================== */}

      {/* Action Button Section */}
      <div>
        <Col md={{ span: 8 }} sm={{ span: 24 }} className={s.submitBtnContainer}>
          <Row gutter={[16, 0]} justify="end">
            <Col md={{ span: 12 }} xs={{ span: 24 }}>
              <ThemesButton
                type={`primary ${s.submitBtn}`}
                onClick={handleSubmit}
                loading={artworkDataLoading}
              >
                SAVE
              </ThemesButton>
            </Col>
          </Row>
        </Col>
      </div>
      {/* =================================== */}
    </>
  );
}

ThemesContentsProfileStudioCreate.propTypes = {
  artistData: propTypes.object,
};

export default ThemesContentsProfileStudioCreate;
