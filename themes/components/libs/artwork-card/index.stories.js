/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesArtworkCard from "../artwork-card";

export default {
  title: "Main/Components/Artwork Card",
  component: ThemesArtworkCard,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={24}>
      <ThemesArtworkCard {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  imgSrc: "/public/images/artwork-1.jpg",
  artworkUrl: "https://artchive.id",
  artworkTitle: "Artwork Card",
  artistName: "Artchive.id",
  artistCity: "",
  artworkYear: "2022",
  artworkMedia: "Oil On Canvas",
  artworkWidth: "100",
  artworkHeight: "100",
  artworkPrice: "2",
  artworkStatus: "PUBLISH",
};
