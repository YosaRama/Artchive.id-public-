// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
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
import moment from "moment";
const { Option } = Select;

// Data Hook
import { useUploads } from "app/hooks/upload";
import { useArtwork } from "app/hooks/artwork";
import { useGenres } from "app/hooks/genre";

// Components
import ThemesHeadline from "themes/components/libs/headline";
import ThemesButton from "themes/components/libs/button";
import AppUploadBox from "app/components/libs/upload-box";
import AppUploadButton from "app/components/libs/upload-button";
import AppFormArtworkPrice from "app/components/libs/form-artwork-price";
import AppFormArtworkMaterial from "app/components/libs/form-artwork-material";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";
import { WarningNotification } from "app/components/utils/notification";

// Helpers
import priceFormatter from "app/helpers/priceFormatter";

// Styles
import s from "./index.module.scss";

function ThemesContentsProfileStudioDetails(props) {
  const { artistData } = props;

  const router = useRouter();
  const artworkId = router.query.id;

  //? ============== Artwork Hook ============= ?//
  const {
    data: artworkData,
    onEdit,
    onAddGallery,
    onChangeCover,
    onDeleteGallery,
    onDelete,
    loading: artworkDataLoading,
  } = useArtwork({ singleId: artworkId });
  const lastArtworkId = artworkData?.length != 0 ? artworkData?.[0]?.id + 1 : 1;
  // * ====================================== * //

  //? ============== Genre Hook ============= ?//
  const { data: genreData } = useGenres({ queryString: "limit=all" });
  // * ====================================== * //

  //? ============== Handle Initial Data ============= ?//
  const initialData = artworkData && {
    ...artworkData,
    // genre: artworkData?.genre?.[0]?.id, //? For single genre
    genre: artworkData.genre.map((item) => item.id),
    year: moment(`${artworkData.year}-12-30`),
  };

  // * ====================================== * //

  //? ============== Handle Upload ============= ?//
  const { loading: uploadLoading, onUpload } = useUploads();

  // Handle Upload Cover Image
  const [uploadImage, setUploadImage] = useState(true);
  const handleUpload = async (file) => {
    const result = await onUpload({
      file: file.file,
      userId: artistData.id,
      artworkId: lastArtworkId,
    });
    if (result.success) {
      onChangeCover({ coverId: result.data.id });
    }
  };

  // Handle Upload Gallery Image
  const handleUploadMediaGallery = async (file) => {
    const result = await onUpload({
      file: file.file,
      userId: artistData.id,
      artworkId: lastArtworkId,
    });
    if (result.success) {
      onAddGallery({ galleryId: result.data.id });
    }
  };
  // * ====================================== * //

  //? ============== Handle Delete Artwork Gallery ============= ?//
  const handleDeleteMediaGallery = (id) => {
    onDeleteGallery({ galleryId: id });
  };
  // * ====================================== * //

  //? ============== Handle Artwork Price ============= ?//
  const [markupPrice, setMarkupPrice] = useState("");
  // * ====================================== * //

  //? ============== Handle Submit ============= ?//
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form
      .validateFields()
      .then(async (value) => {
        const submission = {
          artist_id: artistData?.id,
          title: value.title,
          year: moment(value.year).format("YYYY"),
          material: value.material,
          description: value.description,
          genre_id: value.genre,
          cover_id: uploadImage?.id || artworkData?.media_cover_id,
          type: value.type,
          height: value.height,
          width: value.width,
          price: `${priceFormatter(value.price.replace(/\D/g, ""), ",")}`,
          markupPrice: `${markupPrice || artworkData?.markup_price}`,
          status: artworkData.approve ? value.status : artworkData?.status,
          approve: artworkData?.approve,
        };
        if (!submission.cover_id) {
          WarningNotification({
            message: "Failed Submit!",
            description: "Please upload artwork image",
          });
        } else {
          const result = await onEdit(submission);
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

  //? ============== Handle Delete ============= ?//
  const handleDelete = async () => {
    const result = await onDelete();
    if (result) {
      router.push("/profile/studio");
    }
  };
  // * ====================================== * //

  return (
    <>
      {artworkData && (
        <>
          {/* Form Details Section */}
          <div className={s.title}>
            <ThemesHeadline title="Edit Your Artwork" subtitle="Your artwork details" />
          </div>
          <Divider className={s.divider} />
          <div className={s.contentContainer}>
            <Row gutter={[32, 0]} justify="center">
              <Col lg={{ span: 10 }} xs={{ span: 24 }} className={s.artworkImage}>
                {uploadImage ? (
                  <>
                    <Image
                      alt=""
                      src={`${process.env.NEXT_PUBLIC_S3_URL}/${
                        uploadImage?.url || artworkData?.media_cover?.url
                      }`}
                    />
                    <Col span={24} className={s.changeImgBtn} style={{ padding: 0 }}>
                      <AppUploadButton onUpload={handleUpload} loading={uploadLoading}>
                        Change Artwork
                      </AppUploadButton>
                    </Col>
                  </>
                ) : (
                  <AppUploadBox
                    onUpload={handleUpload}
                    loading={uploadLoading}
                    className={s.upload}
                  />
                )}
              </Col>
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                <Form layout="vertical" form={form} initialValues={initialData}>
                  <Form.Item
                    name="genre"
                    label="Genre"
                    rules={[{ required: true, message: "Please select genre for this artwork!" }]}
                  >
                    <Select
                      placeholder="Select artist"
                      showSearch
                      mode="multiple"
                      filterOption={(input, option) =>
                        option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >=
                          0 ||
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
                    {/* <Input placeholder="Input artwork year" /> */}
                    <DatePicker picker="year" style={{ width: "100%" }} />
                  </Form.Item>
                  <AppFormArtworkMaterial />
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
                    <Col span={24}>
                      <Form.Item name={"status"} label="Status">
                        <Select disabled={!initialData.approve} style={{ width: "100%" }}>
                          <Option value={"PUBLISH"}>PUBLISH</Option>
                          <Option value={"SOLD"}>SOLD</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <AppFormArtworkPrice
                    markupPrice={markupPrice || artworkData.markup_price}
                    setMarkupPrice={setMarkupPrice}
                  />
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
                {artworkData?.media_gallery?.map((item) => {
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
                            onDelete: () => handleDeleteMediaGallery(item.id),
                          })
                        }
                      >
                        Delete
                      </Button>
                    </Col>
                  );
                })}

                {artworkData?.media_gallery?.length < 4 && (
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
                <Col md={{ span: 12, order: 1 }} xs={{ span: 24, order: 2 }}>
                  <ThemesButton
                    type={`outline ${s.submitBtn}`}
                    onClick={() => deleteConfirmModal({ title: "artwork", onDelete: handleDelete })}
                  >
                    DELETE
                  </ThemesButton>
                </Col>
                <Col md={{ span: 12, order: 2 }} xs={{ span: 24, order: 1 }}>
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
      )}
    </>
  );
}

ThemesContentsProfileStudioDetails.propTypes = {
  artistData: propTypes.object,
};

export default ThemesContentsProfileStudioDetails;
