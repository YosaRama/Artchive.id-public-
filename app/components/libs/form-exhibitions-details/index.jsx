// Libs
import propTypes from "prop-types";
import { Button, Col, DatePicker, Form, Input, Row, TimePicker } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";

// Components
import AppTextEditor from "../text-editor";
import AppUploadImage from "../upload-images";

// Styles
import s from "./index.module.scss";

function AppFormExhibitionDetails() {
  //? ============== Handle Session ============= ?//
  const { data: session } = useSession();
  // * ====================================== * //

  //? ============== Handle Description ============= ?//
  const [descriptionValue, setDescriptionValue] = useState();
  // * ====================================== * //

  //? ============== Handle Upload ============= ?//
  const [uploadImage, setUploadImage] = useState();
  // * ====================================== * //

  return (
    <>
      <Form layout="vertical">
        <Col className={s.customFormContainer}>
          <p>Exhibition Thumbnail</p>
          <Col span={6} style={{ height: 300 }}>
            <AppUploadImage
              uploadImage={uploadImage}
              setUploadImage={setUploadImage}
              userId={session?.user?.id}
            />
          </Col>
        </Col>
        <Form.Item name={"title"} label="Exhibition Name">
          <Input placeholder="Input exhibition name here" />
        </Form.Item>
        <Form.Item name={"short_description"} label="Exhibition Summary">
          <Input placeholder="Input short description of exhibition" />
        </Form.Item>
        <Col className={s.customFormContainer}>
          <p>Exhibition Description / Press Released</p>
          <Col className={s.editor}>
            <AppTextEditor value={descriptionValue} setValue={setDescriptionValue} />
          </Col>
        </Col>
        <Form.Item name={"description"} label="Exhibition Description / Press Released">
          <Input placeholder="Input full description of exhibition" />
        </Form.Item>
        <Form.Item name={"exhibition_date"} label="Exhibition Date">
          <DatePicker.RangePicker />
        </Form.Item>
        <Form.Item name={"organized_by"} label="Organized By">
          <Input placeholder="Input exhibition organizer name" />
        </Form.Item>
        <Form.Item name={"exhibition_time"} label="Exhibition Time">
          <TimePicker.RangePicker use12Hours format="h:mm a" />
        </Form.Item>
        <Form.Item name={"catalogue_link"} label="Catalogue Link">
          <Input placeholder="Input catalogue link" />
        </Form.Item>
        <Form.Item name={"address"} label="Exhibition Location">
          <Input placeholder="Input exhibition location address" />
        </Form.Item>
        <Row gutter={16}>
          <Col>
            <Form.Item name={"lat"} label="Latitude">
              <Input placeholder="Input location latitude" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name={"lng"} label="Longitude">
              <Input placeholder="Input location longitude" />
            </Form.Item>
          </Col>
        </Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary">SAVE</Button>
        </Col>
      </Form>
    </>
  );
}

export default AppFormExhibitionDetails;
