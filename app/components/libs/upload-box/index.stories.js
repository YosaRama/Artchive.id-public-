/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppUploadBox from "../upload-box";

export default {
  title: "Dashboard/Components/Upload Box",
  component: AppUploadBox,
};

const Template = (args) => (
  <>
    <Col span={24}>
      <AppUploadBox {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  onUpload: "",
  loading: true,
};
