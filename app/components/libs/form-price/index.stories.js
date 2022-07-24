/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppFormPrice from "../form-price";

export default {
  title: "Dashboard/Components/Form Price",
  component: AppFormPrice,
};

const Template = (args) => (
  <>
    <Col span={6}>
      <AppFormPrice {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  onChange: "",
};
