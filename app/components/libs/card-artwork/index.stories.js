/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import CardArtwork from "../card-artwork";

export default {
  title: "Dashboard/Components/Card Artwork",
  component: CardArtwork,
};

const Template = (args) => (
  <>
    <Col span={4}>
      <CardArtwork {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Artwork One",
  size: "90 x 90",
  image: "https://m.media-amazon.com/images/I/91uylFCg2yL._SL1500_.jpg",
  status: "PUBLISH",
  featured: true,
  id: 1,
  artistImage: "/images/artist-1.jpg",
  artistName: "John Doe",
};
