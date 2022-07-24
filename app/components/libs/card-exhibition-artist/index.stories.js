/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppCardExhibitionArtist from ".";

export default {
  title: "Dashboard/Components/Card Exhibition Artist",
  component: AppCardExhibitionArtist,
};

const Template = (args) => (
  <Col span={12}>
    <AppCardExhibitionArtist {...args} />
  </Col>
);

export const Primary = Template.bind({});
Primary.args = {
  name: "Artist Name",
  city: "Artist City",
  profile: "",
};
