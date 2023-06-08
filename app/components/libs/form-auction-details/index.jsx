// Libs
import propTypes from "prop-types";
import moment from "moment";
import { Button, Col, DatePicker, Form, Input, TimePicker } from "antd";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

// Components
import AppTextEditor from "../text-editor";
import AppUploadImage from "../upload-images";

// Styles
import s from "./index.module.scss";

function AppFormAuctionDetails(props) {
  const { onSubmit, isEdit, initialData } = props;
  //? ============== Handle Session ============= ?//
  const { data: session } = useSession();
  // * ====================================== * //

  //? ============== Handle Details ============= ?//
  const [detailsValue, setDetailsValue] = useState("");
  // * ====================================== * //

  //? ============== Handle Vision ============= ?//
  const [visionValue, setVisionValue] = useState("");
  // * ====================================== * //

  //? ============== Handle Mission ============= ?//
  const [missionValue, setMissionValue] = useState("");
  // * ====================================== * //

  //? ============== Handle Description ============= ?//
  const [descriptionValue, setDescriptionValue] = useState("");
  // * ====================================== * //

  //? ============== Handle Upload ============= ?//
  const [uploadImage, setUploadImage] = useState();
  // * ====================================== * //

  //? ============== Handle Initial Data ============= ?//
  //? Data Parse
  const initialValues = {
    ...initialData,
    auction_date: [moment(initialData?.start_date), moment(initialData?.end_date)],
    auction_time: [
      moment(`2022-02-02${initialData?.start_time}`),
      moment(`2022-02-02${initialData?.end_time}`),
    ],
  };

  useEffect(() => {
    if (isEdit) {
      setUploadImage({ id: initialData?.thumbnail?.id, url: initialData?.thumbnail?.url });
      setDescriptionValue(initialData?.description);
    }
  }, []);
  // * ====================================== * //

  //? ============== Handle Submission ============= ?//
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        title: value.title,
        shortDescription: value.details,
        details: detailsValue,
        startDate: moment(value.auction_date[0]).format(),
        endDate: moment(value.auction_date[1]).format(),
        organizedBy: value.organized_by,
        address: value.address,
        placeName: value.place_name,
        vision: visionValue,
        mission: missionValue,
        lat: value.lat,
        lng: value.lng,
        catalogueLink: value.catalogue_link,
        startTime: moment(value.auction_time[0]).format("hh:mm A"),
        endTime: moment(value.auction_time[1]).format("hh:mm A"),
        thumbnail: +uploadImage?.id,
        createdBy: +session?.user?.id,
        updatedBy: +session?.user?.id,
      };
      onSubmit(submission);
    });
  };
  // * ====================================== * //

  return (
    <>
      <Form layout="vertical" form={form} initialValues={isEdit ? initialValues : {}}>
        <Form.Item name={"thumbnail"} label="Auction Thumbnail">
          <Col span={6}>
            <AppUploadImage
              uploadImage={uploadImage}
              setUploadImage={setUploadImage}
              imageHeight={300}
              userId={session?.user?.id}
            />
          </Col>
        </Form.Item>
        <Form.Item name={"title"} label="Auction Name">
          <Input placeholder="Input exhibition name here" />
        </Form.Item>

        <Col className={s.customFormContainer} style={{ padding: 0 }}>
          <p>Auction Description / Press Released</p>
          <Col className={s.editor} style={{ padding: 0 }}>
            <AppTextEditor value={detailsValue} setValue={setDetailsValue} />
          </Col>
        </Col>
        <Col className={s.customFormContainer} style={{ padding: 0 }}>
          <p>Auction Vision</p>
          <Col className={s.editor} style={{ padding: 0 }}>
            <AppTextEditor value={visionValue} setValue={setVisionValue} />
          </Col>
        </Col>
        <Col className={s.customFormContainer} style={{ padding: 0 }}>
          <p>Auction Mission</p>
          <Col className={s.editor} style={{ padding: 0 }}>
            <AppTextEditor value={missionValue} setValue={setMissionValue} />
          </Col>
        </Col>
        <Form.Item name={"auction_date"} label="Auction Date">
          <DatePicker.RangePicker />
        </Form.Item>
        <Form.Item name={"auction_time"} label="Auction Time">
          <TimePicker.RangePicker use12Hours format="h:mm a" />
        </Form.Item>
        <Form.Item name={"organized_by"} label="Organized By">
          <Input placeholder="Input auction organizer name" />
        </Form.Item>
        <Form.Item name={"address"} label="Auction Location">
          <Input placeholder="Input auction location address" />
        </Form.Item>
        <Form.Item name={"place_name"} label="Auction Place">
          <Input placeholder="Input auction location place" />
        </Form.Item>

        {/* <Col style={{ fontWeight: "Bold", marginTop: "20px" }}>
          <h4>Overview Section</h4>
        </Col>
        <Form.Item name={"overview_title"} label="Overview Title">
          <Input placeholder="Input auction overview title" />
        </Form.Item>
        <Col className={s.customFormContainer} style={{ padding: 0 }}>
          <p>Video Description</p>
          <Col className={s.editor} style={{ padding: 0 }}>
            <AppTextEditor value={descriptionValue} setValue={setDescriptionValue} />
          </Col>
        </Col>
        <Form.Item name={"video_url"} label="Video Link">
          <Input placeholder="Input auction video link. Example : https://youtu.be/wRQITRgn5Qs" />
        </Form.Item>
        <Form.Item name={"auctionImage"} label="Auction Photoshot - (max. 10 Images)">
          / /TODO : I Dont Know what to do/ /

          <AppUploadGalleries
            initialGallery={mediaGallery}
            limit={10}
            onAddGallery={uploadAuctionImage}
          />
        </Form.Item>

        <Col style={{ fontWeight: "Bold", marginTop: "20px" }}>
          <h4>Curator Section</h4>
        </Col>

        <Form.Item name={"overview_title"} label="Overview Title">
          <Input placeholder="Input auction overview title" />
        </Form.Item> */}

        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={handleSubmit}>
            SAVE
          </Button>
        </Col>
      </Form>
    </>
  );
}

AppFormAuctionDetails.propTypes = {
  onSubmit: propTypes.func,
  isEdit: propTypes.bool,
  initialData: propTypes.any,
};

export default AppFormAuctionDetails;
