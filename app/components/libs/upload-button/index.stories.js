/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppUploadButton from "../upload-button";

export default {
  title: "Dashboard/Components/Upload Button",
  component: AppUploadButton,
};

const Template = (args) => (
  <>
    <Col span={24}>
      <AppUploadButton {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  onUpload: "",
  loading: true,
  children: "Upload Button",
};
