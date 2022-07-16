/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesArtworkWithFrame from ".";
import ThemesArtistCard from ".";

export default {
  title: "Main/Components/Artwork With Frame",
  component: ThemesArtworkWithFrame,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={6}>
      <ThemesArtworkWithFrame {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  imgSrc: "/images/artwork-1.jpg",
  artworkTitle: "Some Artwork",
  artworkSize: "80 x 80",
  artworkSlug: "artwork",
  artworkStatus: "PUBLISH",
};
