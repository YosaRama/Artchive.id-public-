/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppUploadImage from "../upload-images";

export default {
  title: "Dashboard/Components/Upload Image",
  component: AppUploadImage,
};

const Template = (args) => (
  <>
    <Col span={24}>
      <AppUploadImage {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  userId: "1",
  artworkId: "1",
  uploadImage: "",
  setUploadImage: "",
  imageHeight: "100",
  uploadDisabled: false,
  uploadBoxClassName: "",
};
