/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesDividerWithButton from "../divider-with-button";

export default {
  title: "Main/Components/Divider With Button",
  component: ThemesDividerWithButton,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={24}>
      <ThemesDividerWithButton {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Show More",
  onClick: "onClick",
};
