/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesRadioWithImage from ".";

export default {
  title: "Main/Components/Radio With Image",
  component: ThemesRadioWithImage,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={3}>
      <ThemesRadioWithImage {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  imgSrc: "/images/frontpage-artist-icon.png",
  value: "",
  className: "className",
  children: "Artist",
};
