/* eslint-disable import/no-anonymous-default-export */
import { Col, Row } from "antd";
import ThemesHomepageSearchBox from ".";

export default {
  title: "Main/Components/Homepage Search Box",
  component: ThemesHomepageSearchBox,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={24}>
      <ThemesHomepageSearchBox {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  default: "default",
};
