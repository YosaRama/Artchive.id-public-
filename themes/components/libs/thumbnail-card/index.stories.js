/* eslint-disable import/no-anonymous-default-export */
import { Col, Row } from "antd";
import ThemesThumbnailCard from ".";

export default {
  title: "Main/Components/Thumbnail Card",
  component: ThemesThumbnailCard,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={12}>
      <ThemesThumbnailCard {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Thumbnail Card Title",
  subtitle: "Thumbnail Subtitle",
  profile: "",
  url: "https://artchive.id",
  imageWidthDesktop: "50px",
  imageWidthMobile: "25px",
  className: "",
};
