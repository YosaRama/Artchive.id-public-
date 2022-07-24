/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppUploadGalleries from "../upload-galleries";

export default {
  title: "Dashboard/Components/Upload Galleries",
  component: AppUploadGalleries,
};

const Template = (args) => (
  <>
    <Col span={24}>
      <AppUploadGalleries {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  initialGallery: "",
  limit: "10",
  onAddGallery: "",
  handleDelete: "",
  deleteTitle: "deleteTitle",
};
