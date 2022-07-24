/* eslint-disable import/no-anonymous-default-export */
import AppCardCount from "../card-count";
import { Col } from "antd";

export default {
  title: "Dashboard/Components/Card Count",
  component: AppCardCount,
};

const Template = (args) => (
  <Col span={6}>
    <AppCardCount {...args} />
  </Col>
);

export const Primary = Template.bind({});
Primary.args = {
  icon: "Icon",
  count: "1",
  title: "Card Count",
  link: "https://artchive.id",
};
