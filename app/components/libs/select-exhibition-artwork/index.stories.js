/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppSelectExhibitionArtwork from "../select-exhibition-artwork";

export default {
  title: "Dashboard/Components/Select Artist",
  component: AppSelectExhibitionArtwork,
};

const Template = (args) => (
  <>
    <Col span={24}>
      <AppSelectExhibitionArtwork {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  setResult: "",
};
