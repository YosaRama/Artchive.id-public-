/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesArtistCard from ".";

export default {
  title: "Main/Components/Artist Card",
  component: ThemesArtistCard,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={6}>
      <ThemesArtistCard {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  artistName: "Artist Name",
  artistCity: "Artist City",
  avatarSrc: "/images/profile-default.png",
  bannerSrc: "/images/default-images.jpg",
  artistId: 1,
  artistSlug: "Artist-Slug",
};
