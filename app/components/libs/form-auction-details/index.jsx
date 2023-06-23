// Libs
import propTypes from "prop-types";
import moment from "moment";
import { Button, Col, DatePicker, Form, Input } from "antd";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Components
import AppTextEditor from "../text-editor";
import AppUploadImage from "../upload-images";

// Styles
import s from "./index.module.scss";

function AppFormAuctionDetails(props) {
  const { onSubmit, isEdit, initialData } = props;
  const router = useRouter();
  const { data: session } = useSession();

  // #region State value
  const [visionValue, setVisionValue] = useState("");
  const [missionValue, setMissionValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [uploadImage, setUploadImage] = useState();
  //#endregion

  //#region Data initialize
  //? Data Parse
  const initialValues = {
    ...initialData,
    title: initialData?.name,
    organized_by: initialData?.organizer,
    auction_date: [moment(initialData?.start_date), moment(initialData?.end_date)],
  };
  useEffect(() => {
    if (isEdit) {
      setDescriptionValue(initialData?.description);
      setVisionValue(initialData?.vision);
      setMissionValue(initialData?.mission);
      setUploadImage({
        id: 1,
        url: initialData?.thumbnail.replace(`${process.env.NEXT_PUBLIC_S3_URL}/`, ""),
      });
    }
  }, [initialData, isEdit]);
  //#endregion

  //#region Handle submission
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        description: descriptionValue,
        end_date: moment(value.auction_date[1]._d).format("YYYY-MM-DD"),
        mission: missionValue,
        name: value.title,
        organizer: value.organized_by,
        start_date: moment(value.auction_date[0]._d).format("YYYY-MM-DD"),
        thumbnail: `${process.env.NEXT_PUBLIC_S3_URL}/${uploadImage?.url}`,
        vision: visionValue,
      };
      onSubmit(submission);
      router.back();
    });
  };

  //#endregion

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
            <AppTextEditor value={descriptionValue} setValue={setDescriptionValue} />
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
        <Form.Item name={"organized_by"} label="Organized By">
          <Input placeholder="Input auction organizer name" />
        </Form.Item>
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
