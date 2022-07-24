/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesProfileArtworkCard from ".";

export default {
  title: "Main/Components/Profile Artwork Card",
  component: ThemesProfileArtworkCard,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={6}>
      <ThemesProfileArtworkCard {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  id: "1",
  approved: "APPROVED",
  status: "PUBLISH",
  imgSrc: "images/artwork-1.jpg",
  title: "Artwork Title",
  price: "2.000.000",
};
