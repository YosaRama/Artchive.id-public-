/* eslint-disable import/no-anonymous-default-export */
import { Col, Row } from "antd";
import ThemesHeadline from ".";

export default {
  title: "Main/Components/Headline",
  component: ThemesHeadline,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={24}>
      <ThemesHeadline {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Headline Title",
  subtitle: "Headline Subtittle",
  className: "classNameHeadline",
};
