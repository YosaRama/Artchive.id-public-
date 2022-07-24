/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppSelectArtist from "../select-artist";

export default {
  title: "Dashboard/Components/Select Artist",
  component: AppSelectArtist,
};

const Template = (args) => (
  <>
    <Col span={24}>
      <AppSelectArtist {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  setResult: "",
};
