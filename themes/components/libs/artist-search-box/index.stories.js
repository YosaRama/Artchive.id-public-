/* eslint-disable import/no-anonymous-default-export */
import ThemeArtistSearchBox from ".";
import { Col } from "antd";

export default {
  title: "Main/Components/ Artist Search Box",
  component: ThemeArtistSearchBox,
};

const Template = (args) => (
  <div id="frontpage">
    <Col>
      <ThemeArtistSearchBox {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
// Primary.args = {
//   artistName: "John Doe",
//   artistCity: "Bali",
//   avatarSrc: "/images/profile-default.png",
//   bannerSrc: "/images/default-images.jpg",
//   artistId: 1,
//   artistSlug: "john-doe",
// };
