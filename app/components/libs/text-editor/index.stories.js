/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppTextEditor from "../text-editor";

export default {
  title: "Dashboard/Components/Text Editor",
  component: AppTextEditor,
};

const Template = (args) => (
  <>
    <Col span={24}>
      <AppTextEditor {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  value: "Text Editor Value",
  setValue: "",
  placeholder: "placeHolder",
};
