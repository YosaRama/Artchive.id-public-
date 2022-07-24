/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesButton from ".";

export default {
  title: "Main/Components/Button",
  component: ThemesButton,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={24}>
      <ThemesButton {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  loading: "loading",
  children: "Button",
  type: "default",
  onClick: "onClick",
  disabled: "disabled",
};
