/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppCardFinalPrice from "../card-final-price";

export default {
  title: "Dashboard/Components/Card Final Price",
  component: AppCardFinalPrice,
};

const Template = (args) => (
  <Col span={24}>
    <AppCardFinalPrice {...args} />
  </Col>
);

export const Primary = Template.bind({});
Primary.args = {
  markupPrice: "200",
};
